export type QuestionType =
  | 'single_choice'
  | 'multiple_choice'
  | 'true_false_group'
  | 'numeric';

export interface TrueFalseStatement {
  id: string;
  text: string;
  correctValue: boolean;
}

export interface TextbookExplanation {
  identifikasi: string;
  diketahui: string[];
  ditanyakan: string;
  landasanTeori: string;
  fbdDeskripsi: string;
  analisisMatematis: string;
  perhitungan: string;
  jawabanAkhir: string;
  interpretasi: string;
  analisisOpsi: string[];
}

export interface BaseQuestion {
  id: number;
  title: string;
  type: QuestionType;
  typeLabel: string;
  maxPoints: number;
  stimulusCaption: string;
  prompt: string;
  narasiSoal: string;
  narasiPembahasan: string;
  pembahasan: TextbookExplanation;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single_choice';
  options: { label: string; text: string }[];
  correctIndex: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple_choice';
  options: { label: string; text: string }[];
  correctIndices: number[];
}

export interface TrueFalseGroupQuestion extends BaseQuestion {
  type: 'true_false_group';
  statements: TrueFalseStatement[];
}

export interface NumericQuestion extends BaseQuestion {
  type: 'numeric';
  unit: string;
  correctValue: number;
  tolerance: number;
  placeholder: string;
  answerHint: string;
}

export type PhysicsQuestion =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | TrueFalseGroupQuestion
  | NumericQuestion;

export type StudentAnswer =
  | number // single_choice: selected index (0..4)
  | number[] // multiple_choice: array of selected indices
  | (boolean | null)[] // true_false_group: array of 4 booleans/null
  | string; // numeric: raw string input

export type AnswersMap = Record<number, StudentAnswer>;

export interface StudentProfile {
  fullName: string;
  className: string;
}

export interface QuestionScoreDetail {
  questionId: number;
  pointsEarned: number;
  maxPoints: number;
  isAnswered: boolean;
  isFullCorrect: boolean;
  statementResults?: {
    isAnswered: boolean;
    isCorrect: boolean;
    points: number;
  }[];
}

export interface AssessmentResult {
  totalScore: number;
  maxTotalScore: number;
  answeredCount: number;
  fullCorrectCount: number;
  incorrectOrIncompleteCount: number;
  completionPercentage: number;
  questionDetails: QuestionScoreDetail[];
  submittedAt: string;
}

export interface PersistedQuizState {
  student: StudentProfile | null;
  currentQuestionIndex: number;
  answers: AnswersMap;
  isSubmitted: boolean;
  result: AssessmentResult | null;
  teacherUnlocked: boolean;
  lastUpdatedAt: string;
}
