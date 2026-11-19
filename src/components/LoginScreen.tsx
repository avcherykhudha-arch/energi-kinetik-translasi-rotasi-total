import React, { useState } from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { StudentProfile } from '../types/quiz';

interface LoginScreenProps {
  onStartQuiz: (profile: StudentProfile) => void;
  onOpenTeacherMode: () => void;
}

const CLASS_OPTIONS = [
  'XI-F1',
  'XI-F2',
  'XI-F3',
  'XI-F4',
  'XII-F1',
  'XII-F2',
  'XII-F3',
  'XII-F4',
];

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onStartQuiz,
  onOpenTeacherMode,
}) => {
  const [fullName, setFullName] = useState('');
  const [className, setClassName] = useState('');
  const [customClass, setCustomClass] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = fullName.trim();
    const chosenClass =
      className === '__lainnya__' ? customClass.trim() : className.trim();

    if (!cleanName) {
      setError('Nama lengkap siswa wajib diisi sebelum memulai kuis.');
      return;
    }
    if (cleanName.length < 3) {
      setError('Masukkan nama lengkap siswa minimal 3 karakter.');
      return;
    }
    if (!chosenClass) {
      setError('Silakan pilih atau tuliskan kelas Anda terlebih dahulu.');
      return;
    }

    setError(null);
    onStartQuiz({
      fullName: cleanName,
      className: chosenClass,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <header className="border-b border-teal-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold tracking-tight text-teal-900 sm:text-base">
              PHYSICS ROTATIONAL ENERGY – HOTS ASSESSMENT
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenTeacherMode}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50/70 px-3 py-2 text-xs font-semibold text-teal-900 transition-colors hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 whitespace-nowrap"
          >
            <ShieldCheck className="h-4 w-4 text-teal-700" aria-hidden="true" />
            <span>MODE GURU</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 pt-6 sm:px-6 sm:pt-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 border-b border-slate-100 pb-5">
            <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-teal-800">
              <span>SMAS TUNAS BARU JIN SEUNG BATAM</span>
              <span aria-hidden="true">·</span>
              <span>SMA – Fase F</span>
              <span aria-hidden="true">·</span>
              <span>Guru Pembimbing: MR JO</span>
            </div>
            <h1 className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Penilaian Fisika HOTS: Energi Kinetik Benda Menggelinding
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Evaluasi kemampuan analisis matematis dan penalaran fisis pada materi
              energi kinetik translasi, rotasi, total, momen inersia, dan
              kekekalan energi mekanik tanpa slip.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl bg-teal-50/60 p-3.5 text-center border border-teal-100">
            <div>
              <div className="font-mono-tabular text-base font-bold text-teal-900 sm:text-lg">
                10
              </div>
              <div className="text-xs text-slate-600">Soal HOTS</div>
            </div>
            <div className="border-x border-teal-200/70">
              <div className="font-mono-tabular text-base font-bold text-teal-900 sm:text-lg">
                100
              </div>
              <div className="text-xs text-slate-600">Skor Maks</div>
            </div>
            <div>
              <div className="font-mono-tabular text-base font-bold text-teal-900 sm:text-lg">
                TTS
              </div>
              <div className="text-xs text-slate-600">Narator Mr Jo</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="student-name"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                Nama Lengkap Siswa
              </label>
              <input
                id="student-name"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Masukkan nama lengkap sesuai absensi"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
              />
            </div>

            <div>
              <label
                htmlFor="student-class"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                Kelas
              </label>
              <select
                id="student-class"
                value={className}
                onChange={(e) => {
                  setClassName(e.target.value);
                  if (error) setError(null);
                }}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
              >
                <option value="">-- Pilih Kelas --</option>
                {CLASS_OPTIONS.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
                <option value="__lainnya__">Lainnya (tulis manual)</option>
              </select>
            </div>

            {className === '__lainnya__' && (
              <div>
                <label
                  htmlFor="custom-class"
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  Tuliskan Nama Kelas
                </label>
                <input
                  id="custom-class"
                  type="text"
                  value={customClass}
                  onChange={(e) => {
                    setCustomClass(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Contoh: XI-F5"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-800"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <span>MULAI QUIZ</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <div className="mt-5 flex items-start gap-2.5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
            <p>
              Progres pengerjaan dan identitas Anda tersimpan otomatis di
              perangkat ini. Pastikan seluruh 10 soal telah diperiksa sebelum
              mengumpulkan jawaban.
            </p>
          </div>
        </section>

        {/* Generous empty bottom breathing room per layout safety spec */}
        <div className="h-44 sm:h-52" aria-hidden="true" />
      </main>
    </div>
  );
};
