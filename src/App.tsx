import { useEffect, useState } from 'react';
import { PHYSICS_QUESTIONS } from './data/questions';
import { PersistedQuizState, StudentAnswer, StudentProfile } from './types/quiz';
import {
  clearQuizState,
  createInitialQuizState,
  evaluateAssessment,
  loadQuizState,
  saveQuizState,
} from './utils/scoring';
import { mrJoNarrator, NarratorStatus } from './utils/narrator';
import { LoginScreen } from './components/LoginScreen';
import { TopQuizBar } from './components/TopQuizBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultsSummary } from './components/ResultsSummary';
import { TeacherModePanel } from './components/TeacherModePanel';

export default function App() {
  const [quizState, setQuizState] = useState<PersistedQuizState>(() =>
    loadQuizState()
  );
  const [showTeacherPanel, setShowTeacherPanel] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const [narratorStatus, setNarratorStatus] = useState<NarratorStatus>('idle');
  const [narratorRate, setNarratorRate] = useState<number>(1.0);
  const [narratorNotice, setNarratorNotice] = useState<string | null>(null);

  useEffect(() => {
    mrJoNarrator.subscribe({
      onStatusChange: (status) => setNarratorStatus(status),
      onMessage: (msg) => setNarratorNotice(msg),
    });
    return () => {
      mrJoNarrator.stop();
    };
  }, []);

  useEffect(() => {
    saveQuizState(quizState);
  }, [quizState]);

  const currentQuestion =
    PHYSICS_QUESTIONS[quizState.currentQuestionIndex] ?? PHYSICS_QUESTIONS[0];

  const handleStartQuiz = (profile: StudentProfile) => {
    mrJoNarrator.stop();
    setShowTeacherPanel(false);
    setQuizState((prev) => ({
      ...prev,
      student: profile,
    }));
  };

  const handleSelectQuestion = (index: number) => {
    mrJoNarrator.stop();
    setShowTeacherPanel(false);
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.max(0, Math.min(index, PHYSICS_QUESTIONS.length - 1)),
    }));
  };

  const handleChangeAnswer = (answer: StudentAnswer) => {
    if (quizState.isSubmitted) return;
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer,
      },
    }));
  };

  const handleConfirmSubmit = () => {
    mrJoNarrator.stop();
    const result = evaluateAssessment(PHYSICS_QUESTIONS, quizState.answers);
    setQuizState((prev) => ({
      ...prev,
      isSubmitted: true,
      result,
    }));
    setShowSubmitConfirm(false);
  };

  const handleConfirmReset = () => {
    mrJoNarrator.stop();
    clearQuizState();
    setQuizState(createInitialQuizState());
    setShowTeacherPanel(false);
    setShowSubmitConfirm(false);
    setShowResetConfirm(false);
    setNarratorNotice(null);
  };

  const handlePlayQuestionNarrator = () => {
    mrJoNarrator.play(currentQuestion.narasiSoal, narratorRate);
  };

  const handlePlayExplanationNarrator = (text: string) => {
    mrJoNarrator.play(text, narratorRate);
  };

  const handleRateChange = (rate: number) => {
    setNarratorRate(rate);
    mrJoNarrator.setRate(rate);
  };

  // Top-anchored Confirmation Modals (never near bottom of screen!)
  const renderTopModals = () => (
    <>
      {showSubmitConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/45 px-3 pt-4 sm:pt-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-confirm-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-teal-200 bg-white p-5 shadow-xl">
            <h2
              id="submit-confirm-title"
              className="font-display text-base font-bold text-slate-900 sm:text-lg"
            >
              Konfirmasi Pengumpulan Jawaban
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Apakah Anda yakin ingin mengumpulkan seluruh jawaban? Pastikan semua soal
              telah diperiksa.
            </p>
            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="inline-flex h-10 items-center rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                KEMBALI MEMERIKSA
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="inline-flex h-10 items-center rounded-xl bg-teal-800 px-4 text-xs font-bold text-white hover:bg-teal-900"
              >
                YA, KUMPULKAN
              </button>
            </div>
          </div>
        </div>
      )}

      {showResetConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/45 px-3 pt-4 sm:pt-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-confirm-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-5 shadow-xl">
            <h2
              id="reset-confirm-title"
              className="font-display text-base font-bold text-slate-900 sm:text-lg"
            >
              Konfirmasi Reset Progres
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Apakah Anda yakin ingin menghapus seluruh jawaban, hasil penilaian, dan
              identitas siswa yang tersimpan di perangkat ini? Aplikasi akan kembali ke
              halaman awal.
            </p>
            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="inline-flex h-10 items-center rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                BATAL
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="inline-flex h-10 items-center rounded-xl bg-red-700 px-4 text-xs font-bold text-white hover:bg-red-800"
              >
                YA, RESET SEMUA
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // If student hasn't logged in yet
  if (!quizState.student) {
    return (
      <>
        {renderTopModals()}
        {showTeacherPanel ? (
          <div className="min-h-screen bg-slate-50 px-3 pt-5 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <TeacherModePanel
                questions={PHYSICS_QUESTIONS}
                student={quizState.student}
                answers={quizState.answers}
                savedResult={quizState.result}
                isUnlocked={quizState.teacherUnlocked}
                narratorStatus={narratorStatus}
                narratorRate={narratorRate}
                onUnlockSuccess={() =>
                  setQuizState((prev) => ({ ...prev, teacherUnlocked: true }))
                }
                onClosePanel={() => {
                  mrJoNarrator.stop();
                  setShowTeacherPanel(false);
                }}
                onRequestReset={() => setShowResetConfirm(true)}
                onPlayExplanationNarration={handlePlayExplanationNarrator}
                onPauseNarrator={() => mrJoNarrator.pause()}
                onResumeNarrator={() => mrJoNarrator.resume()}
                onStopNarrator={() => mrJoNarrator.stop()}
                onRateChange={handleRateChange}
              />
              <div className="h-48 sm:h-56" aria-hidden="true" />
            </div>
          </div>
        ) : (
          <LoginScreen
            onStartQuiz={handleStartQuiz}
            onOpenTeacherMode={() => setShowTeacherPanel(true)}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {renderTopModals()}

      {/* ALL navigation, progress, narrator, and submit controls strictly at TOP */}
      <TopQuizBar
        student={quizState.student}
        questions={PHYSICS_QUESTIONS}
        currentIndex={quizState.currentQuestionIndex}
        answers={quizState.answers}
        isSubmitted={quizState.isSubmitted}
        teacherUnlocked={quizState.teacherUnlocked}
        narratorStatus={narratorStatus}
        narratorRate={narratorRate}
        narratorNotice={narratorNotice}
        onSelectQuestion={handleSelectQuestion}
        onPrev={() => handleSelectQuestion(quizState.currentQuestionIndex - 1)}
        onNext={() => handleSelectQuestion(quizState.currentQuestionIndex + 1)}
        onRequestSubmit={() => setShowSubmitConfirm(true)}
        onRequestReset={() => setShowResetConfirm(true)}
        onOpenTeacherMode={() => {
          mrJoNarrator.stop();
          setShowTeacherPanel(true);
        }}
        onPlayNarrator={handlePlayQuestionNarrator}
        onPauseNarrator={() => mrJoNarrator.pause()}
        onResumeNarrator={() => mrJoNarrator.resume()}
        onStopNarrator={() => mrJoNarrator.stop()}
        onRateChange={handleRateChange}
      />

      <main className="mx-auto max-w-4xl px-3 pt-5 sm:px-6 sm:pt-7">
        {showTeacherPanel ? (
          <TeacherModePanel
            questions={PHYSICS_QUESTIONS}
            student={quizState.student}
            answers={quizState.answers}
            savedResult={quizState.result}
            isUnlocked={quizState.teacherUnlocked}
            narratorStatus={narratorStatus}
            narratorRate={narratorRate}
            onUnlockSuccess={() =>
              setQuizState((prev) => ({ ...prev, teacherUnlocked: true }))
            }
            onClosePanel={() => {
              mrJoNarrator.stop();
              setShowTeacherPanel(false);
            }}
            onRequestReset={() => setShowResetConfirm(true)}
            onPlayExplanationNarration={handlePlayExplanationNarrator}
            onPauseNarrator={() => mrJoNarrator.pause()}
            onResumeNarrator={() => mrJoNarrator.resume()}
            onStopNarrator={() => mrJoNarrator.stop()}
            onRateChange={handleRateChange}
          />
        ) : quizState.isSubmitted && quizState.result ? (
          <ResultsSummary
            student={quizState.student}
            result={quizState.result}
            teacherUnlocked={quizState.teacherUnlocked}
          />
        ) : (
          <QuestionCard
            question={currentQuestion}
            answer={quizState.answers[currentQuestion.id]}
            isLocked={quizState.isSubmitted}
            onChangeAnswer={handleChangeAnswer}
          />
        )}

        {/* Mandatory generous empty whitespace at the bottom — NO buttons, links, or sticky bar */}
        <div className="h-48 sm:h-60" aria-hidden="true" />
      </main>
    </div>
  );
}
