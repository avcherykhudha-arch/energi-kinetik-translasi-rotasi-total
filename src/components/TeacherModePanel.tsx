import React, { useState } from 'react';
import {
  CheckCircle2,
  KeyRound,
  Lock,
  Pause,
  Play,
  RotateCcw,
  Square,
  Volume2,
  X,
  XCircle,
} from 'lucide-react';
import {
  AnswersMap,
  AssessmentResult,
  PhysicsQuestion,
  StudentAnswer,
  StudentProfile,
} from '../types/quiz';
import { verifyTeacherPassword, evaluateAssessment } from '../utils/scoring';
import { NarratorStatus } from '../utils/narrator';
import { MathText } from './MathText';
import { FreeBodyDiagram } from './FreeBodyDiagram';
import { StimulusDiagram } from './StimulusDiagram';

interface TeacherModePanelProps {
  questions: PhysicsQuestion[];
  student: StudentProfile | null;
  answers: AnswersMap;
  savedResult: AssessmentResult | null;
  isUnlocked: boolean;
  narratorStatus: NarratorStatus;
  narratorRate: number;
  onUnlockSuccess: () => void;
  onClosePanel: () => void;
  onRequestReset: () => void;
  onPlayExplanationNarration: (text: string) => void;
  onPauseNarrator: () => void;
  onResumeNarrator: () => void;
  onStopNarrator: () => void;
  onRateChange: (rate: number) => void;
}

function formatStudentAnswerSummary(
  q: PhysicsQuestion,
  ans: StudentAnswer | undefined
): string {
  if (ans === undefined || ans === null) return 'Tidak dijawab';
  switch (q.type) {
    case 'single_choice':
      return typeof ans === 'number' && q.options[ans]
        ? `Pilihan ${q.options[ans].label}`
        : 'Tidak dijawab';
    case 'multiple_choice': {
      const indices = Array.isArray(ans)
        ? ans.filter((v): v is number => typeof v === 'number')
        : [];
      return indices.length > 0
        ? `Pernyataan ${[...indices]
            .sort((a, b) => a - b)
            .map((i) => q.options[i]?.label ?? i + 1)
            .join(', ')}`
        : 'Tidak dijawab';
    }
    case 'true_false_group':
      if (!Array.isArray(ans)) return 'Tidak dijawab';
      return ans
        .map((v, i) =>
          v === true ? `${i + 1}: Benar` : v === false ? `${i + 1}: Salah` : `${i + 1}: Kosong`
        )
        .join(' · ');
    case 'numeric':
      return typeof ans === 'string' && ans.trim()
        ? `${ans.trim()} ${q.unit}`
        : 'Tidak dijawab';
  }
}

function formatKeySummary(q: PhysicsQuestion): string {
  switch (q.type) {
    case 'single_choice':
      return `Pilihan ${q.options[q.correctIndex].label}`;
    case 'multiple_choice':
      return `Pernyataan ${q.correctIndices.map((i) => q.options[i].label).join(', ')}`;
    case 'true_false_group':
      return q.statements
        .map((s, i) => `${i + 1}: ${s.correctValue ? 'BENAR' : 'SALAH'}`)
        .join(' · ');
    case 'numeric':
      return `${q.correctValue} ${q.unit} (toleransi ±${q.tolerance})`;
  }
}

export const TeacherModePanel: React.FC<TeacherModePanelProps> = ({
  questions,
  student,
  answers,
  savedResult,
  isUnlocked,
  narratorStatus,
  narratorRate,
  onUnlockSuccess,
  onClosePanel,
  onRequestReset,
  onPlayExplanationNarration,
  onPauseNarrator,
  onResumeNarrator,
  onStopNarrator,
  onRateChange,
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);

  const liveResult = savedResult ?? evaluateAssessment(questions, answers);
  const activeQuestion =
    questions.find((q) => q.id === selectedQuestionId) ?? questions[0];
  const activeScoreDetail = liveResult.questionDetails.find(
    (d) => d.questionId === activeQuestion.id
  );

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyTeacherPassword(passwordInput)) {
      setAuthError(null);
      setPasswordInput('');
      onUnlockSuccess();
    } else {
      setAuthError('Password salah. Akses Mode Guru ditolak.');
    }
  };

  if (!isUnlocked) {
    return (
      <section
        aria-labelledby="teacher-lock-heading"
        className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm sm:p-7"
      >
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-teal-800" aria-hidden="true" />
            <h2
              id="teacher-lock-heading"
              className="font-display text-lg font-bold text-slate-900"
            >
              Akses Mode Guru (Mr Jo)
            </h2>
          </div>
          <button
            type="button"
            onClick={onClosePanel}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Tutup</span>
          </button>
        </div>

        <p className="mb-4 text-sm text-slate-600">
          Masukkan password guru untuk membuka kunci jawaban, pembahasan
          sistematis buku teks, Diagram Benda Bebas (FBD), serta rekap hasil
          siswa di perangkat ini.
        </p>

        <form onSubmit={handleUnlockSubmit} className="max-w-sm space-y-3">
          <div>
            <label
              htmlFor="teacher-password"
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Password Guru
            </label>
            <input
              id="teacher-password"
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (authError) setAuthError(null);
              }}
              placeholder="Masukkan password guru"
              autoComplete="off"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20"
            />
          </div>

          {authError && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-800"
            >
              {authError}
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white hover:bg-teal-900"
          >
            <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
            <span>BUKA MODE GURU</span>
          </button>
        </form>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="teacher-dashboard-heading"
      className="space-y-5 rounded-2xl border border-teal-200 bg-white p-4 shadow-sm sm:p-7"
    >
      {/* Top Teacher Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <p className="text-xs font-semibold text-teal-800">
            MODE GURU TERBUKA · MR JO — SMAS TUNAS BARU JIN SEUNG BATAM
          </p>
          <h2
            id="teacher-dashboard-heading"
            className="mt-1 font-display text-lg font-bold text-slate-900 sm:text-xl"
          >
            Kunci Jawaban, Pembahasan Buku Teks & Diagram Benda Bebas
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onRequestReset}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Reset Progres</span>
          </button>
          <button
            type="button"
            onClick={onClosePanel}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-teal-800 px-3 text-xs font-semibold text-white hover:bg-teal-900"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Kembali ke Tampilan Utama</span>
          </button>
        </div>
      </div>

      {/* Student Saved Progress & Score Overview */}
      <div className="rounded-xl border border-teal-100 bg-teal-50/50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs sm:text-sm">
            <span className="font-semibold text-slate-900">
              Siswa: {student ? `${student.fullName} (${student.className})` : 'Belum ada siswa login'}
            </span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="text-slate-700">
              Dijawab: <strong className="font-mono-tabular">{liveResult.answeredCount}/10</strong>
            </span>
          </div>
          <div className="font-mono-tabular text-sm font-bold text-teal-950">
            Skor Sementara/Akhir: {liveResult.totalScore} / 100
          </div>
        </div>
      </div>

      {/* Top Question Selector for Teacher Review */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-600">
          Pilih Nomor Soal untuk Melihat Pembahasan Lengkap & FBD:
        </p>
        <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
          {questions.map((q) => {
            const detail = liveResult.questionDetails.find((d) => d.questionId === q.id);
            const isSelected = q.id === activeQuestion.id;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setSelectedQuestionId(q.id)}
                className={`flex h-10 flex-col items-center justify-center rounded-lg border font-mono-tabular text-xs font-bold transition-colors ${
                  isSelected
                    ? 'border-teal-800 bg-teal-800 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50'
                }`}
              >
                <span>#{q.id}</span>
                <span className="text-[10px] font-normal opacity-85">
                  {detail ? `${detail.pointsEarned}p` : '0p'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question Teacher Review & Narrator */}
      <div className="space-y-5 border-t border-slate-100 pt-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-teal-800">
              PEMBAHASAN SOAL {activeQuestion.id} · {activeQuestion.typeLabel}
            </p>
            <h3 className="mt-0.5 font-display text-lg font-bold text-slate-900">
              {activeQuestion.title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-teal-100 bg-teal-50/70 p-1">
            <Volume2 className="ml-1.5 h-4 w-4 text-teal-700" aria-hidden="true" />
            {narratorStatus === 'idle' || narratorStatus === 'unsupported' ? (
              <button
                type="button"
                onClick={() => onPlayExplanationNarration(activeQuestion.narasiPembahasan)}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-teal-700 px-3 text-xs font-semibold text-white hover:bg-teal-800"
              >
                <Play className="h-3 w-3" aria-hidden="true" />
                <span>Putar Narator Pembahasan</span>
              </button>
            ) : narratorStatus === 'playing' ? (
              <button
                type="button"
                onClick={onPauseNarrator}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-amber-600 px-3 text-xs font-semibold text-white hover:bg-amber-700"
              >
                <Pause className="h-3 w-3" aria-hidden="true" />
                <span>Jeda</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onResumeNarrator}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-teal-700 px-3 text-xs font-semibold text-white hover:bg-teal-800"
              >
                <Play className="h-3 w-3" aria-hidden="true" />
                <span>Lanjutkan</span>
              </button>
            )}
            {(narratorStatus === 'playing' || narratorStatus === 'paused') && (
              <button
                type="button"
                onClick={onStopNarrator}
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                <Square className="h-3 w-3" aria-hidden="true" />
                <span>Stop</span>
              </button>
            )}
            <select
              value={narratorRate}
              onChange={(e) => onRateChange(Number(e.target.value))}
              aria-label="Kecepatan suara narator pembahasan"
              className="h-8 rounded-lg border border-teal-200 bg-white px-1.5 font-mono-tabular text-xs font-medium text-teal-900"
            >
              <option value={0.85}>0.85x</option>
              <option value={1}>1.0x</option>
              <option value={1.15}>1.15x</option>
              <option value={1.25}>1.25x</option>
            </select>
          </div>
        </div>

        {/* Comparison Box: Student Answer vs Key vs Score */}
        <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-slate-500">Jawaban Siswa</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {formatStudentAnswerSummary(activeQuestion, answers[activeQuestion.id])}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Kunci Jawaban</p>
            <p className="mt-1 text-sm font-bold text-teal-900">
              {formatKeySummary(activeQuestion)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Perolehan Skor</p>
            <div className="mt-1 flex items-center gap-1.5">
              {activeScoreDetail?.isFullCorrect ? (
                <CheckCircle2 className="h-4 w-4 text-teal-700" aria-hidden="true" />
              ) : (
                <XCircle className="h-4 w-4 text-amber-600" aria-hidden="true" />
              )}
              <span className="font-mono-tabular text-sm font-bold text-slate-900">
                {activeScoreDetail?.pointsEarned ?? 0} / {activeQuestion.maxPoints} poin
              </span>
            </div>
          </div>
        </div>

        {/* Question Prompt & Stimulus Reference */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-xs font-semibold text-slate-500">Ringkasan Soal & Stimulus</p>
          <div className="mb-3 text-sm text-slate-800">
            <MathText text={activeQuestion.prompt} />
          </div>
          <div className="mx-auto max-w-lg overflow-hidden rounded-lg border border-slate-100">
            <StimulusDiagram questionId={activeQuestion.id} />
          </div>
        </div>

        {/* 10-Section Systematic Textbook Explanation */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-800">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              1. Identifikasi Permasalahan
            </h4>
            <MathText text={activeQuestion.pembahasan.identifikasi} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-2 font-display text-sm font-bold text-teal-950">
              2. Diketahui
            </h4>
            <ul className="list-disc space-y-1 pl-5">
              {activeQuestion.pembahasan.diketahui.map((item, i) => (
                <li key={i}>
                  <MathText text={item} />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              3. Ditanyakan
            </h4>
            <MathText text={activeQuestion.pembahasan.ditanyakan} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              4. Landasan Teori
            </h4>
            <MathText text={activeQuestion.pembahasan.landasanTeori} />
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/30 p-4">
            <h4 className="mb-2 font-display text-sm font-bold text-teal-950">
              5. Diagram Benda Bebas (Free Body Diagram)
            </h4>
            <div className="mb-3 overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
              <FreeBodyDiagram questionId={activeQuestion.id} />
            </div>
            <MathText text={activeQuestion.pembahasan.fbdDeskripsi} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              6. Analisis Matematis
            </h4>
            <MathText text={activeQuestion.pembahasan.analisisMatematis} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              7. Perhitungan Sistematis
            </h4>
            <MathText text={activeQuestion.pembahasan.perhitungan} />
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4">
            <h4 className="mb-1 font-display text-sm font-bold text-teal-950">
              8. Jawaban Akhir
            </h4>
            <div className="font-semibold text-teal-950">
              <MathText text={activeQuestion.pembahasan.jawabanAkhir} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-1.5 font-display text-sm font-bold text-teal-950">
              9. Interpretasi dan Penarikan Kesimpulan
            </h4>
            <MathText text={activeQuestion.pembahasan.interpretasi} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="mb-2 font-display text-sm font-bold text-teal-950">
              10. Analisis Pilihan Jawaban / Pernyataan
            </h4>
            <ul className="space-y-1.5">
              {activeQuestion.pembahasan.analisisOpsi.map((item, i) => (
                <li key={i} className="rounded-lg bg-slate-50 px-3 py-2">
                  <MathText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
