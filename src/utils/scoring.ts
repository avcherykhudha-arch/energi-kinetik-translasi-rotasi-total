import {
  AnswersMap,
  AssessmentResult,
  PersistedQuizState,
  PhysicsQuestion,
  QuestionScoreDetail,
  StudentAnswer,
} from '../types/quiz';

export const TEACHER_PASSWORD = 'ABC';
export const STORAGE_KEY = 'physics_rotational_hots_v1';

export function parseNumericAnswer(raw: string): number | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim().replace(',', '.');
  if (!trimmed) return null;
  // Strictly accept finite decimal or integer syntax (optional leading sign)
  if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(trimmed)) {
    return null;
  }
  const num = Number(trimmed);
  return Number.isFinite(num) ? num : null;
}

export function isQuestionAnswered(
  question: PhysicsQuestion,
  answer: StudentAnswer | undefined
): boolean {
  if (answer === undefined || answer === null) return false;

  switch (question.type) {
    case 'single_choice':
      return typeof answer === 'number' && answer >= 0 && answer < question.options.length;
    case 'multiple_choice':
      return Array.isArray(answer) && answer.length > 0;
    case 'true_false_group':
      return (
        Array.isArray(answer) &&
        answer.some((val) => val === true || val === false)
      );
    case 'numeric':
      return typeof answer === 'string' && answer.trim().length > 0;
  }
}

export function isTrueFalseFullyAnswered(
  question: PhysicsQuestion,
  answer: StudentAnswer | undefined
): boolean {
  if (question.type !== 'true_false_group') return isQuestionAnswered(question, answer);
  return (
    Array.isArray(answer) &&
    answer.length === question.statements.length &&
    answer.every((val) => val === true || val === false)
  );
}

export function scoreQuestion(
  question: PhysicsQuestion,
  answer: StudentAnswer | undefined
): QuestionScoreDetail {
  const answered = isQuestionAnswered(question, answer);

  switch (question.type) {
    case 'single_choice': {
      const isCorrect = typeof answer === 'number' && answer === question.correctIndex;
      return {
        questionId: question.id,
        pointsEarned: isCorrect ? question.maxPoints : 0,
        maxPoints: question.maxPoints,
        isAnswered: answered,
        isFullCorrect: isCorrect,
      };
    }

    case 'multiple_choice': {
      const selected = Array.isArray(answer)
        ? Array.from(new Set(answer.filter((v): v is number => typeof v === 'number'))).sort(
            (a, b) => a - b
          )
        : [];
      const expected = [...question.correctIndices].sort((a, b) => a - b);
      const isExactMatch =
        selected.length === expected.length &&
        selected.every((val, idx) => val === expected[idx]);

      return {
        questionId: question.id,
        pointsEarned: isExactMatch ? question.maxPoints : 0,
        maxPoints: question.maxPoints,
        isAnswered: answered,
        isFullCorrect: isExactMatch,
      };
    }

    case 'true_false_group': {
      const arr = Array.isArray(answer) ? answer : [];
      let rawSum = 0;
      const statementResults = question.statements.map((stmt, idx) => {
        const chosen = arr[idx];
        if (chosen !== true && chosen !== false) {
          return { isAnswered: false, isCorrect: false, points: 0 };
        }
        const isCorrect = chosen === stmt.correctValue;
        const pts = isCorrect ? 2.5 : -1;
        rawSum += pts;
        return { isAnswered: true, isCorrect, points: pts };
      });

      const clampedPoints = Math.max(0, rawSum);
      const isFullCorrect =
        statementResults.every((r) => r.isCorrect) && clampedPoints === question.maxPoints;

      return {
        questionId: question.id,
        pointsEarned: clampedPoints,
        maxPoints: question.maxPoints,
        isAnswered: answered,
        isFullCorrect,
        statementResults,
      };
    }

    case 'numeric': {
      const parsed = typeof answer === 'string' ? parseNumericAnswer(answer) : null;
      const isCorrect =
        parsed !== null && Math.abs(parsed - question.correctValue) <= question.tolerance;
      return {
        questionId: question.id,
        pointsEarned: isCorrect ? question.maxPoints : 0,
        maxPoints: question.maxPoints,
        isAnswered: answered,
        isFullCorrect: isCorrect,
      };
    }
  }
}

export function evaluateAssessment(
  questions: PhysicsQuestion[],
  answers: AnswersMap,
  submittedAt: string = new Date().toISOString()
): AssessmentResult {
  const questionDetails = questions.map((q) => scoreQuestion(q, answers[q.id]));
  const totalScore = questionDetails.reduce((acc, d) => acc + d.pointsEarned, 0);
  const maxTotalScore = questionDetails.reduce((acc, d) => acc + d.maxPoints, 0);
  const answeredCount = questionDetails.filter((d) => d.isAnswered).length;
  const fullCorrectCount = questionDetails.filter((d) => d.isFullCorrect).length;
  const incorrectOrIncompleteCount = questions.length - fullCorrectCount;
  const completionPercentage =
    questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  return {
    totalScore: Math.round(totalScore * 100) / 100,
    maxTotalScore,
    answeredCount,
    fullCorrectCount,
    incorrectOrIncompleteCount,
    completionPercentage,
    questionDetails,
    submittedAt,
  };
}

export function verifyTeacherPassword(input: string): boolean {
  return input.trim() === TEACHER_PASSWORD;
}

export function createInitialQuizState(): PersistedQuizState {
  return {
    student: null,
    currentQuestionIndex: 0,
    answers: {},
    isSubmitted: false,
    result: null,
    teacherUnlocked: false,
    lastUpdatedAt: new Date().toISOString(),
  };
}

export function loadQuizState(): PersistedQuizState {
  if (typeof window === 'undefined') return createInitialQuizState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialQuizState();
    const parsed = JSON.parse(raw) as Partial<PersistedQuizState>;
    return {
      student: parsed.student ?? null,
      currentQuestionIndex:
        typeof parsed.currentQuestionIndex === 'number' ? parsed.currentQuestionIndex : 0,
      answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
      isSubmitted: Boolean(parsed.isSubmitted),
      result: parsed.result ?? null,
      teacherUnlocked: Boolean(parsed.teacherUnlocked),
      lastUpdatedAt: parsed.lastUpdatedAt ?? new Date().toISOString(),
    };
  } catch {
    return createInitialQuizState();
  }
}

export function saveQuizState(state: PersistedQuizState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, lastUpdatedAt: new Date().toISOString() })
    );
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export function clearQuizState(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors cleanly
  }
}
