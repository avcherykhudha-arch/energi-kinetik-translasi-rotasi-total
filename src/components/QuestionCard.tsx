import React from 'react';
import {
  PhysicsQuestion,
  StudentAnswer,
} from '../types/quiz';
import { MathText } from './MathText';
import { StimulusDiagram } from './StimulusDiagram';

interface QuestionCardProps {
  question: PhysicsQuestion;
  answer: StudentAnswer | undefined;
  isLocked: boolean;
  onChangeAnswer: (answer: StudentAnswer) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  isLocked,
  onChangeAnswer,
}) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
      {/* Header metadata — clean typographic separators, zero pill enclosures */}
      <div className="mb-4 border-b border-slate-100 pb-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-teal-800">
          <span className="font-mono-tabular font-bold">SOAL {question.id} / 10</span>
          <span aria-hidden="true">·</span>
          <span>{question.typeLabel}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-tabular">Bobot Maks. {question.maxPoints} Poin</span>
        </div>
        <h2 className="mt-1 font-display text-lg font-bold text-slate-900 sm:text-xl">
          {question.title}
        </h2>
      </div>

      {/* Precision Physics Stimulus Visual */}
      <figure className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="p-2 sm:p-3">
          <StimulusDiagram questionId={question.id} />
        </div>
        <figcaption className="border-t border-slate-100 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-600">
          <MathText text={question.stimulusCaption} />
        </figcaption>
      </figure>

      {/* Question Prompt */}
      <div className="mb-5 text-sm leading-relaxed text-slate-800 sm:text-base">
        <MathText text={question.prompt} />
      </div>

      {/* Interactive Answer Area */}
      {question.type === 'single_choice' && (
        <fieldset className="space-y-2.5" disabled={isLocked}>
          <legend className="mb-2 text-xs font-semibold text-slate-600">
            Pilih satu jawaban yang paling tepat:
          </legend>
          {question.options.map((opt, idx) => {
            const isSelected = answer === idx;
            return (
              <label
                key={opt.label}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${
                  isSelected
                    ? 'border-teal-700 bg-teal-50/80 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-slate-50/70'
                } ${isLocked ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={idx}
                  checked={isSelected}
                  onChange={() => onChangeAnswer(idx)}
                  className="mt-1 h-4 w-4 shrink-0 accent-teal-800"
                />
                <span className="font-mono-tabular mt-0.5 text-sm font-bold text-teal-900">
                  {opt.label}.
                </span>
                <div className="min-w-0 flex-1 text-sm sm:text-base">
                  <MathText text={opt.text} />
                </div>
              </label>
            );
          })}
        </fieldset>
      )}

      {question.type === 'multiple_choice' && (
        <fieldset className="space-y-2.5" disabled={isLocked}>
          <legend className="mb-2 text-xs font-semibold text-slate-600">
            Pilihan Ganda Kompleks — centang SEMUA pernyataan yang benar (skor 10 jika tepat seluruhnya, 0 jika ada satu saja kekeliruan):
          </legend>
          {question.options.map((opt, idx) => {
            const selectedArr = Array.isArray(answer) ? (answer as number[]) : [];
            const isChecked = selectedArr.includes(idx);
            return (
              <label
                key={opt.label}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${
                  isChecked
                    ? 'border-teal-700 bg-teal-50/80 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-slate-50/70'
                } ${isLocked ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...selectedArr, idx]
                      : selectedArr.filter((i) => i !== idx);
                    onChangeAnswer(next);
                  }}
                  className="mt-1 h-4 w-4 shrink-0 rounded accent-teal-800"
                />
                <span className="font-mono-tabular mt-0.5 text-sm font-bold text-teal-900">
                  ({opt.label})
                </span>
                <div className="min-w-0 flex-1 text-sm sm:text-base">
                  <MathText text={opt.text} />
                </div>
              </label>
            );
          })}
        </fieldset>
      )}

      {question.type === 'true_false_group' && (
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-600">
            Penilaian parsial per pernyataan: Benar +2,5 poin, Salah -1 poin, Tidak dijawab 0 poin (skor minimum soal adalah 0).
          </p>
          {question.statements.map((stmt, idx) => {
            const currentArr: (boolean | null)[] = Array.isArray(answer)
              ? [...(answer as (boolean | null)[])]
              : [null, null, null, null];
            const val = currentArr[idx] ?? null;

            const setChoice = (choice: boolean) => {
              if (isLocked) return;
              const next: (boolean | null)[] = [
                currentArr[0] ?? null,
                currentArr[1] ?? null,
                currentArr[2] ?? null,
                currentArr[3] ?? null,
              ];
              next[idx] = choice;
              onChangeAnswer(next);
            };

            return (
              <div
                key={stmt.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 sm:p-4"
              >
                <div className="mb-3 flex items-start gap-2.5">
                  <span className="font-mono-tabular text-xs font-bold text-teal-900 mt-1">
                    {idx + 1}.
                  </span>
                  <div className="min-w-0 flex-1 text-sm text-slate-800 sm:text-base">
                    <MathText text={stmt.text} />
                  </div>
                </div>
                <div
                  className="flex flex-wrap gap-2 pl-5"
                  role="group"
                  aria-label={`Pilihan Benar atau Salah untuk pernyataan ${idx + 1}`}
                >
                  <button
                    type="button"
                    disabled={isLocked}
                    onClick={() => setChoice(true)}
                    aria-pressed={val === true}
                    className={`min-h-10 min-w-[96px] rounded-lg border px-4 py-2 text-xs font-bold transition-colors ${
                      val === true
                        ? 'border-teal-800 bg-teal-800 text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50'
                    } disabled:cursor-not-allowed disabled:opacity-75`}
                  >
                    BENAR
                  </button>
                  <button
                    type="button"
                    disabled={isLocked}
                    onClick={() => setChoice(false)}
                    aria-pressed={val === false}
                    className={`min-h-10 min-w-[96px] rounded-lg border px-4 py-2 text-xs font-bold transition-colors ${
                      val === false
                        ? 'border-teal-800 bg-teal-800 text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50'
                    } disabled:cursor-not-allowed disabled:opacity-75`}
                  >
                    SALAH
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {question.type === 'numeric' && (
        <div className="space-y-3">
          {/* Format Pengisian Tutorial Box */}
          <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-3.5 text-xs leading-relaxed text-slate-700">
            <p className="mb-1.5 font-semibold text-teal-950">
              Petunjuk Format Pengisian Jawaban Numerik:
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Gunakan <strong>titik</strong> untuk tanda desimal (contoh: jika hasil{' '}
                <span className="font-mono-tabular">12,5 joule</span>, ketik{' '}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono-tabular font-semibold text-teal-900">
                  12.5
                </code>
                ).
              </li>
              <li>
                Jika hasil bilangan bulat (contoh: <span className="font-mono-tabular">4 m/s</span>),
                cukup ketik{' '}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono-tabular font-semibold text-teal-900">
                  4
                </code>
                .
              </li>
              <li>
                Jangan mengetik satuan, simbol, atau teks tambahan karena satuan sudah
                disediakan di samping kolom.
              </li>
            </ul>
          </div>

          <div>
            <label
              htmlFor={`numeric-${question.id}`}
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Jawaban Numerik Anda ({question.answerHint})
            </label>
            <div className="flex items-stretch gap-2">
              <input
                id={`numeric-${question.id}`}
                type="text"
                inputMode="decimal"
                disabled={isLocked}
                value={typeof answer === 'string' ? answer : ''}
                onChange={(e) => onChangeAnswer(e.target.value)}
                placeholder={question.placeholder}
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 font-mono-tabular text-base font-semibold text-slate-900 placeholder:font-normal placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20 disabled:bg-slate-100"
              />
              <div className="flex shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-3.5 font-mono-tabular text-sm font-bold text-slate-800">
                {question.unit}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
