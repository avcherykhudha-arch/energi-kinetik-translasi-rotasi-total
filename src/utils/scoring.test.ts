import test from 'node:test';
import assert from 'node:assert/strict';
import { PHYSICS_QUESTIONS } from '../data/questions';
import {
  evaluateAssessment,
  isQuestionAnswered,
  parseNumericAnswer,
  scoreQuestion,
  verifyTeacherPassword,
} from './scoring';
import { AnswersMap } from '../types/quiz';

test('dataset contains exactly 10 questions totaling 100 max points', () => {
  assert.equal(PHYSICS_QUESTIONS.length, 10);
  const totalMax = PHYSICS_QUESTIONS.reduce((sum, q) => sum + q.maxPoints, 0);
  assert.equal(totalMax, 100);
});

test('parseNumericAnswer handles dot, comma, whitespace, and invalid input', () => {
  assert.equal(parseNumericAnswer('112.5'), 112.5);
  assert.equal(parseNumericAnswer(' 112,5 '), 112.5);
  assert.equal(parseNumericAnswer('24'), 24);
  assert.equal(parseNumericAnswer('0.8'), 0.8);
  assert.equal(parseNumericAnswer(''), null);
  assert.equal(parseNumericAnswer('12.5 J'), null);
  assert.equal(parseNumericAnswer('abc'), null);
});

test('single choice scoring awards 10 for exact match and 0 otherwise', () => {
  const q1 = PHYSICS_QUESTIONS[0];
  assert.equal(scoreQuestion(q1, 2).pointsEarned, 10);
  assert.equal(scoreQuestion(q1, 0).pointsEarned, 0);
  assert.equal(scoreQuestion(q1, undefined).pointsEarned, 0);
});

test('multiple choice complex scoring is strictly all-or-nothing (no partial points)', () => {
  const q3 = PHYSICS_QUESTIONS[2];
  assert.equal(scoreQuestion(q3, [0, 1, 3]).pointsEarned, 10);
  assert.equal(scoreQuestion(q3, [3, 1, 0]).pointsEarned, 10);
  // Missing one correct option -> 0
  assert.equal(scoreQuestion(q3, [0, 1]).pointsEarned, 0);
  // Extra wrong option -> 0
  assert.equal(scoreQuestion(q3, [0, 1, 2, 3]).pointsEarned, 0);
});

test('true/false group Soal 5 scores +2.5 correct, -1 wrong, 0 blank, clamped at minimum 0', () => {
  const q5 = PHYSICS_QUESTIONS[4];
  // Correct key: [false, true, true, false]
  assert.equal(scoreQuestion(q5, [false, true, true, false]).pointsEarned, 10);
  // 3 correct (+7.5) + 1 wrong (-1) = 6.5
  assert.equal(scoreQuestion(q5, [false, true, true, true]).pointsEarned, 6.5);
  // 2 correct (+5) + 2 blank (0) = 5
  assert.equal(scoreQuestion(q5, [false, true, null, null]).pointsEarned, 5);
  // 1 correct (+2.5) + 3 wrong (-3) = -0.5 -> clamped to 0
  assert.equal(scoreQuestion(q5, [false, false, false, true]).pointsEarned, 0);
  // All wrong (-4) -> clamped to 0
  assert.equal(scoreQuestion(q5, [true, false, false, true]).pointsEarned, 0);
});

test('numeric scoring respects tolerance boundaries', () => {
  const q6 = PHYSICS_QUESTIONS[5]; // 112.5 ± 0.5
  assert.equal(scoreQuestion(q6, '112.5').pointsEarned, 10);
  assert.equal(scoreQuestion(q6, '112.9').pointsEarned, 10);
  assert.equal(scoreQuestion(q6, '113.1').pointsEarned, 0);

  const q9 = PHYSICS_QUESTIONS[8]; // 0.8 ± 0.02
  assert.equal(scoreQuestion(q9, '0.8').pointsEarned, 10);
  assert.equal(scoreQuestion(q9, '0.82').pointsEarned, 10);
  assert.equal(scoreQuestion(q9, '0.85').pointsEarned, 0);
});

test('evaluateAssessment produces 100/100 for all correct answers and 0/100 for empty', () => {
  const emptyResult = evaluateAssessment(PHYSICS_QUESTIONS, {});
  assert.equal(emptyResult.totalScore, 0);
  assert.equal(emptyResult.answeredCount, 0);
  assert.equal(emptyResult.completionPercentage, 0);

  const perfectAnswers: AnswersMap = {
    1: 2,
    2: 2,
    3: [0, 1, 3],
    4: [0, 1, 3],
    5: [false, true, true, false],
    6: '112.5',
    7: '10',
    8: '18',
    9: '0.8',
    10: '24',
  };
  const perfectResult = evaluateAssessment(PHYSICS_QUESTIONS, perfectAnswers);
  assert.equal(perfectResult.totalScore, 100);
  assert.equal(perfectResult.answeredCount, 10);
  assert.equal(perfectResult.fullCorrectCount, 10);
  assert.equal(perfectResult.incorrectOrIncompleteCount, 0);
  assert.equal(perfectResult.completionPercentage, 100);
});

test('isQuestionAnswered detects partial/blank states accurately', () => {
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[0], undefined), false);
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[2], []), false);
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[4], [null, null, null, null]), false);
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[4], [true, null, null, null]), true);
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[5], '   '), false);
  assert.equal(isQuestionAnswered(PHYSICS_QUESTIONS[5], '112.5'), true);
});

test('teacher password matches ABC strictly', () => {
  assert.equal(verifyTeacherPassword('ABC'), true);
  assert.equal(verifyTeacherPassword('abc'), false);
  assert.equal(verifyTeacherPassword('123'), false);
});
