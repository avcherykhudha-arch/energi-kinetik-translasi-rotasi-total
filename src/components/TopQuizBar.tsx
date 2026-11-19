import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
  Send,
  ShieldCheck,
  Square,
  Volume2,
} from 'lucide-react';
import {
  AnswersMap,
  PhysicsQuestion,
  StudentProfile,
} from '../types/quiz';
import { isQuestionAnswered } from '../utils/scoring';
import { NarratorStatus } from '../utils/narrator';

interface TopQuizBarProps {
  student: StudentProfile;
  questions: PhysicsQuestion[];
  currentIndex: number;
  answers: AnswersMap;
  isSubmitted: boolean;
  teacherUnlocked: boolean;
  narratorStatus: NarratorStatus;
  narratorRate: number;
  narratorNotice: string | null;
  onSelectQuestion: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onRequestSubmit: () => void;
  onRequestReset: () => void;
  onOpenTeacherMode: () => void;
  onPlayNarrator: () => void;
  onPauseNarrator: () => void;
  onResumeNarrator: () => void;
  onStopNarrator: () => void;
  onRateChange: (rate: number) => void;
}

export const TopQuizBar: React.FC<TopQuizBarProps> = ({
  student,
  questions,
  currentIndex,
  answers,
  isSubmitted,
  teacherUnlocked,
  narratorStatus,
  narratorRate,
  narratorNotice,
  onSelectQuestion,
  onPrev,
  onNext,
  onRequestSubmit,
  onRequestReset,
  onOpenTeacherMode,
  onPlayNarrator,
  onPauseNarrator,
  onResumeNarrator,
  onStopNarrator,
  onRateChange,
}) => {
  const answeredCount = questions.filter((q) =>
    isQuestionAnswered(q, answers[q.id])
  ).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <header className="border-b border-teal-200/80 bg-white shadow-xs">
      <div className="mx-auto max-w-5xl px-3 py-3 sm:px-6">
        {/* Zone 1: Identity, Student Info & Primary System Actions */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-100 pb-3">
          <div className="min-w-0">
            <h1 className="truncate font-display text-sm font-bold tracking-tight text-teal-950 sm:text-base">
              PHYSICS ROTATIONAL ENERGY – HOTS ASSESSMENT
            </h1>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-600">
              <span className="font-semibold text-teal-900">
                {student.fullName}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tabular font-medium text-slate-700">
                Kelas {student.className}
              </span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span className="hidden sm:inline">
                SMAS Tunas Baru Jin Seung Batam (Mr Jo)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onOpenTeacherMode}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                teacherUnlocked
                  ? 'border-teal-700 bg-teal-800 text-white hover:bg-teal-900'
                  : 'border-teal-200 bg-teal-50 text-teal-900 hover:bg-teal-100'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{teacherUnlocked ? 'MODE GURU (TERBUKA)' : 'MODE GURU'}</span>
            </button>

            <button
              type="button"
              onClick={onRequestReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>RESET PROGRESS</span>
            </button>
          </div>
        </div>

        {/* Zone 2: Progress Bar & Question Numbers 1-10 */}
        <div className="mt-3 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-medium text-slate-700">
              Progres Pengerjaan:{' '}
              <strong className="font-mono-tabular text-teal-900">
                {answeredCount}/{questions.length}
              </strong>{' '}
              soal dijawab ({progressPercent}%)
            </span>
            <span className="font-mono-tabular text-slate-500">
              {isSubmitted
                ? 'Status: Jawaban Terkunci'
                : `Menampilkan Soal ${currentIndex + 1} dari ${questions.length}`}
            </span>
          </div>

          <div
            className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progres pengerjaan kuis"
          >
            <div
              className="h-full rounded-full bg-teal-700 transition-transform duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* 1-10 Question Number Grid (5 cols on 300px mobile, 10 cols on sm+) */}
          <nav
            aria-label="Navigasi nomor soal"
            className="grid grid-cols-5 gap-1.5 sm:grid-cols-10"
          >
            {questions.map((q, idx) => {
              const answered = isQuestionAnswered(q, answers[q.id]);
              const isActive = !isSubmitted && idx === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onSelectQuestion(idx)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`Soal ${q.id}, ${
                    answered ? 'sudah dijawab' : 'belum dijawab'
                  }`}
                  className={`flex h-10 items-center justify-center gap-1 rounded-lg border font-mono-tabular text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 ${
                    isActive
                      ? 'border-teal-800 bg-teal-800 text-white shadow-xs'
                      : answered
                        ? 'border-teal-300 bg-teal-50 text-teal-900 hover:bg-teal-100'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-slate-50'
                  }`}
                >
                  <span>{q.id}</span>
                  <span className="text-[10px]" aria-hidden="true">
                    {answered ? '✓' : ''}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Zone 3: Prev/Next Navigation, Narrator MR JO Controls & Submit Button */}
        {(!isSubmitted || teacherUnlocked) && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
            {/* Prev / Next (only while quiz is active) */}
            {!isSubmitted ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onPrev}
                  disabled={currentIndex === 0}
                  className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 whitespace-nowrap"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Sebelumnya</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  disabled={currentIndex === questions.length - 1}
                  className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 whitespace-nowrap"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <div className="text-xs font-semibold text-teal-800">
                Kontrol Audio Narator Pembahasan
              </div>
            )}

            {/* Narrator MR JO Controls */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-teal-100 bg-teal-50/70 p-1">
              <span className="inline-flex items-center gap-1 px-1.5 text-xs font-semibold text-teal-900">
                <Volume2 className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                <span>MR JO</span>
              </span>

              {narratorStatus === 'idle' || narratorStatus === 'unsupported' ? (
                <button
                  type="button"
                  onClick={onPlayNarrator}
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-teal-700 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-800 whitespace-nowrap"
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>PUTAR NARATOR</span>
                </button>
              ) : narratorStatus === 'playing' ? (
                <button
                  type="button"
                  onClick={onPauseNarrator}
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-amber-600 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-amber-700 whitespace-nowrap"
                >
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>JEDA</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onResumeNarrator}
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-teal-700 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-800 whitespace-nowrap"
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>LANJUTKAN</span>
                </button>
              )}

              {(narratorStatus === 'playing' || narratorStatus === 'paused') && (
                <button
                  type="button"
                  onClick={onStopNarrator}
                  aria-label="Hentikan narator suara"
                  className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-300 bg-white px-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap"
                >
                  <Square className="h-3 w-3" aria-hidden="true" />
                  <span>STOP</span>
                </button>
              )}

              <label className="sr-only" htmlFor="narrator-speed">
                Kecepatan suara narator
              </label>
              <select
                id="narrator-speed"
                value={narratorRate}
                onChange={(e) => onRateChange(Number(e.target.value))}
                aria-label="Kecepatan suara narator"
                className="h-8 rounded-lg border border-teal-200 bg-white px-1.5 font-mono-tabular text-xs font-medium text-teal-900 focus:border-teal-600 focus:outline-none"
              >
                <option value={0.85}>0.85x</option>
                <option value={1}>1.0x</option>
                <option value={1.15}>1.15x</option>
                <option value={1.25}>1.25x</option>
              </select>
            </div>

            {/* Submit Button (ONLY in TOP area) */}
            {!isSubmitted && (
              <button
                type="button"
                onClick={onRequestSubmit}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-teal-900 px-3.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-teal-950 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                <span>KUMPULKAN JAWABAN</span>
              </button>
            )}
          </div>
        )}

        {narratorNotice && (
          <p
            role="status"
            className="mt-2 rounded-lg border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs text-teal-900"
          >
            {narratorNotice}
          </p>
        )}
      </div>
    </header>
  );
};
