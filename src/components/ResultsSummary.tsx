import React from 'react';
import { Lock } from 'lucide-react';
import { AssessmentResult, StudentProfile } from '../types/quiz';

interface ResultsSummaryProps {
  student: StudentProfile;
  result: AssessmentResult;
  teacherUnlocked: boolean;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  student,
  result,
  teacherUnlocked,
}) => {
  return (
    <section
      aria-labelledby="results-heading"
      className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="border-b border-slate-100 pb-4">
        <p className="text-xs font-semibold tracking-wide text-teal-800">
          HASIL PENILAIAN OTOMATIS · SMAS TUNAS BARU JIN SEUNG BATAM
        </p>
        <h2
          id="results-heading"
          className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl"
        >
          Rekapitulasi Jawaban Siswa
        </h2>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{student.fullName}</span>
          <span aria-hidden="true">·</span>
          <span>Kelas {student.className}</span>
        </div>
      </div>

      {/* Primary Score Display */}
      <div className="my-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50/70 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold text-teal-900">NILAI AKHIR (SKALA 0–100)</p>
          <p className="mt-1 font-mono-tabular text-4xl font-bold text-teal-950 sm:text-5xl">
            {result.totalScore}
            <span className="text-lg font-medium text-teal-700"> / {result.maxTotalScore}</span>
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs font-medium text-slate-600">Persentase Penyelesaian</p>
          <p className="font-mono-tabular text-2xl font-bold text-teal-900">
            {result.completionPercentage}%
          </p>
        </div>
      </div>

      {/* Breakdown Metrics */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <p className="text-xs text-slate-500">Jumlah Soal Dijawab</p>
          <p className="mt-1 font-mono-tabular text-2xl font-bold text-slate-900">
            {result.answeredCount} / 10
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <p className="text-xs text-slate-500">Jumlah Soal Benar Penuh</p>
          <p className="mt-1 font-mono-tabular text-2xl font-bold text-teal-800">
            {result.fullCorrectCount}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <p className="text-xs text-slate-500">Jumlah Soal Salah / Parsial</p>
          <p className="mt-1 font-mono-tabular text-2xl font-bold text-slate-800">
            {result.incorrectOrIncompleteCount}
          </p>
        </div>
      </div>

      {!teacherUnlocked && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-teal-800" aria-hidden="true" />
          <div>
            <p className="font-semibold text-slate-900">
              Kunci Jawaban dan Pembahasan Terkunci
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Jawaban Anda telah dikunci dan disimpan di perangkat ini. Kunci jawaban,
              pembahasan sistematis buku teks, dan Diagram Benda Bebas hanya dapat
              dibuka oleh Guru (Mr Jo) melalui tombol <strong>MODE GURU</strong> di
              bagian atas halaman.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
