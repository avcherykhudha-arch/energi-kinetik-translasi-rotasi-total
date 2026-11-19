import React from 'react';

interface FreeBodyDiagramProps {
  questionId: number;
}

const FbdDefs: React.FC = () => (
  <defs>
    <marker id="fbd-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="fbd-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="fbd-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f766e" />
    </marker>
    <marker id="fbd-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b45309" />
    </marker>
    <marker id="fbd-axis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#64748b" />
    </marker>
  </defs>
);

const InclineDownFbd: React.FC<{
  title: string;
  angleLabel: string;
  bodyLabel: string;
}> = ({ title, angleLabel, bodyLabel }) => {
  // Ramp descending to the right at 30 deg: tangent (0.866, 0.5), outward normal (0.5, -0.866)
  const r = 48;
  const px = 260;
  const py = 205;
  const tx = 0.866;
  const ty = 0.5;
  const nx = 0.5;
  const ny = -0.866;
  const cx = px + r * nx; // 284
  const cy = py + r * ny; // 163.4

  return (
    <svg viewBox="0 0 560 310" className="w-full h-auto" role="img" aria-label={`Diagram Benda Bebas: ${title}`}>
      <FbdDefs />
      <rect x="0" y="0" width="560" height="310" fill="#ffffff" />
      {/* Title */}
      <text x="20" y="26" fontSize="13" fontWeight="700" fill="#0f172a">{title}</text>
      <text x="20" y="44" fontSize="11.5" fill="#475569">{bodyLabel}</text>

      {/* Coordinate axes (+x down slope, +y perpendicular out of slope) */}
      <g transform="translate(82, 102)">
        <line x1="0" y1="0" x2={42 * tx} y2={42 * ty} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <line x1="0" y1="0" x2={42 * nx} y2={42 * ny} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <text x={44 * tx + 4} y={44 * ty + 4} fontSize="11" fontWeight="600" fill="#475569">+x</text>
        <text x={44 * nx + 2} y={44 * ny - 2} fontSize="11" fontWeight="600" fill="#475569">+y</text>
      </g>

      {/* Inclined plane surface */}
      <line x1={px - 170 * tx} y1={py - 170 * ty} x2={px + 185 * tx} y2={py + 185 * ty} stroke="#334155" strokeWidth="3" />
      <text x={px + 115 * tx} y={py + 115 * ty + 20} fontSize="12" fontWeight="600" fill="#334155">{angleLabel}</text>

      {/* Rigid body */}
      <circle cx={cx} cy={cy} r={r} fill="#f0fdfa" fillOpacity="0.85" stroke="#0f172a" strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r="3.5" fill="#0f172a" />
      <circle cx={px} cy={py} r="4" fill="#0f766e" />
      <line x1={cx} y1={cy} x2={px} y2={py} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
      <text x={cx - 18} y={cy - 10} fontSize="11" fontWeight="600" fill="#334155">R</text>

      {/* Weight mg strictly vertical downward */}
      <line x1={cx} y1={cy} x2={cx} y2={cy + 98} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbd-red)" />
      <text x={cx - 26} y={cy + 108} fontSize="13" fontWeight="700" fill="#dc2626">mg</text>

      {/* Dashed weight components mg cos theta and mg sin theta */}
      <line x1={cx} y1={cy} x2={cx - 85 * nx} y2={cy - 85 * ny} stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1={cx - 85 * nx} y1={cy - 85 * ny} x2={cx} y2={cy + 98} stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x={cx - 95} y={cy + 62} fontSize="11" fill="#b91c1c">mg cos θ</text>

      {/* Normal force N perpendicular from contact point */}
      <line x1={px} y1={py} x2={px + 128 * nx} y2={py + 128 * ny} stroke="#0284c7" strokeWidth="2.4" markerEnd="url(#fbd-blue)" />
      <text x={px + 132 * nx + 6} y={py + 132 * ny + 4} fontSize="13" fontWeight="700" fill="#0284c7">N</text>

      {/* Static friction f_s UP the incline at contact point */}
      <line x1={px} y1={py} x2={px - 62 * tx} y2={py - 62 * ty} stroke="#0f766e" strokeWidth="2.4" markerEnd="url(#fbd-teal)" />
      <text x={px - 80 * tx - 14} y={py - 80 * ty - 4} fontSize="13" fontWeight="700" fill="#0f766e">f_s</text>

      {/* Linear acceleration a along +x */}
      <line x1={cx + 58 * tx} y1={cy + 58 * ty} x2={cx + 115 * tx} y2={cy + 115 * ty} stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fbd-amber)" />
      <text x={cx + 120 * tx} y={cy + 120 * ty + 4} fontSize="12" fontWeight="700" fill="#b45309">a_PM</text>

      {/* Angular acceleration alpha clockwise */}
      <path d={`M ${cx + 24} ${cy - 54} A 58 58 0 0 1 ${cx + 56} ${cy - 8}`} fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#fbd-amber)" />
      <text x={cx + 52} y={cy - 40} fontSize="12" fontWeight="700" fill="#b45309">α, ω</text>
    </svg>
  );
};

const InclineUpFbd: React.FC<{
  title: string;
  bodyLabel: string;
}> = ({ title, bodyLabel }) => {
  // Ramp ascending to the right at 30 deg: tangent up-slope (0.866, -0.5), outward normal (-0.5, -0.866)
  const r = 46;
  const px = 280;
  const py = 195;
  const tx = 0.866;
  const ty = -0.5;
  const nx = -0.5;
  const ny = -0.866;
  const cx = px + r * nx; // 257
  const cy = py + r * ny; // 155.2

  return (
    <svg viewBox="0 0 560 310" className="w-full h-auto" role="img" aria-label={`Diagram Benda Bebas: ${title}`}>
      <FbdDefs />
      <rect x="0" y="0" width="560" height="310" fill="#ffffff" />
      <text x="20" y="26" fontSize="13" fontWeight="700" fill="#0f172a">{title}</text>
      <text x="20" y="44" fontSize="11.5" fill="#475569">{bodyLabel}</text>

      {/* Coordinate axes (+x up slope, +y perpendicular out) */}
      <g transform="translate(86, 128)">
        <line x1="0" y1="0" x2={44 * tx} y2={44 * ty} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <line x1="0" y1="0" x2={44 * nx} y2={44 * ny} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <text x={48 * tx} y={48 * ty + 4} fontSize="11" fontWeight="600" fill="#475569">+x (arah naik)</text>
        <text x={48 * nx - 12} y={48 * ny - 4} fontSize="11" fontWeight="600" fill="#475569">+y</text>
      </g>

      {/* Inclined surface ascending right */}
      <line x1={px - 175 * tx} y1={py - 175 * ty} x2={px + 185 * tx} y2={py + 185 * ty} stroke="#334155" strokeWidth="3" />

      {/* Hollow/solid cylinder */}
      <circle cx={cx} cy={cy} r={r} fill="#f0fdfa" stroke="#0f172a" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r="3.5" fill="#0f172a" />
      <circle cx={px} cy={py} r="4" fill="#0f766e" />
      <line x1={cx} y1={cy} x2={px} y2={py} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
      <text x={cx + 8} y={cy + 20} fontSize="11" fontWeight="600" fill="#334155">R</text>

      {/* Weight mg vertical downward */}
      <line x1={cx} y1={cy} x2={cx} y2={cy + 100} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbd-red)" />
      <text x={cx - 24} y={cy + 112} fontSize="13" fontWeight="700" fill="#dc2626">mg</text>

      {/* Normal force N perpendicular */}
      <line x1={px} y1={py} x2={px + 126 * nx} y2={py + 126 * ny} stroke="#0284c7" strokeWidth="2.4" markerEnd="url(#fbd-blue)" />
      <text x={px + 132 * nx - 14} y={py + 132 * ny - 4} fontSize="13" fontWeight="700" fill="#0284c7">N</text>

      {/* Static friction f_s UP the incline (+x) to decelerate clockwise spin */}
      <line x1={px} y1={py} x2={px + 68 * tx} y2={py + 68 * ty} stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#fbd-teal)" />
      <text x={px + 74 * tx} y={py + 74 * ty + 16} fontSize="13" fontWeight="700" fill="#0f766e">f_s (ke atas lereng)</text>

      {/* Velocity v up slope vs acceleration a down slope */}
      <line x1={cx + 56 * tx} y1={cy + 56 * ty} x2={cx + 108 * tx} y2={cy + 108 * ty} stroke="#0f766e" strokeWidth="2" markerEnd="url(#fbd-teal)" />
      <text x={cx + 114 * tx} y={cy + 114 * ty + 2} fontSize="12" fontWeight="700" fill="#0f766e">v</text>

      <line x1={cx - 56 * tx} y1={cy - 56 * ty - 26} x2={cx - 108 * tx} y2={cy - 108 * ty - 26} stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fbd-amber)" />
      <text x={cx - 140} y={cy - 12} fontSize="12" fontWeight="700" fill="#b45309">a (perlambatan)</text>

      {/* Angular deceleration alpha counter-clockwise */}
      <path d={`M ${cx + 54} ${cy - 16} A 58 58 0 0 0 ${cx + 14} ${cy - 58}`} fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#fbd-amber)" />
      <text x={cx + 18} y={cy - 68} fontSize="12" fontWeight="700" fill="#b45309">α (perlambatan)</text>
    </svg>
  );
};

const HorizontalSteadyFbd: React.FC<{
  title: string;
  bodyLabel: string;
}> = ({ title, bodyLabel }) => {
  const yGround = 225;
  const r = 54;
  const cx = 270;
  const cy = yGround - r;
  return (
    <svg viewBox="0 0 560 295" className="w-full h-auto" role="img" aria-label={`Diagram Benda Bebas: ${title}`}>
      <FbdDefs />
      <rect x="0" y="0" width="560" height="295" fill="#ffffff" />
      <text x="20" y="26" fontSize="13" fontWeight="700" fill="#0f172a">{title}</text>
      <text x="20" y="44" fontSize="11.5" fill="#475569">{bodyLabel}</text>

      {/* Axes */}
      <g transform="translate(68, 128)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <line x1="0" y1="0" x2="0" y2="-40" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fbd-axis)" />
        <text x="44" y="4" fontSize="11" fontWeight="600" fill="#475569">+x</text>
        <text x="-6" y="-45" fontSize="11" fontWeight="600" fill="#475569">+y</text>
      </g>

      <line x1="50" y1={yGround} x2="510" y2={yGround} stroke="#334155" strokeWidth="2.8" />
      <circle cx={cx} cy={cy} r={r} fill="#f0fdfa" stroke="#0f172a" strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r="3.5" fill="#0f172a" />
      <circle cx={cx} cy={yGround} r="4" fill="#0f766e" />
      <line x1={cx} y1={cy} x2={cx + r * 0.72} y2={cy - r * 0.68} stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 2" />
      <text x={cx + 22} y={cy - 18} fontSize="11.5" fontWeight="600" fill="#334155">R</text>

      {/* Weight mg down */}
      <line x1={cx} y1={cy} x2={cx} y2={cy + 98} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbd-red)" />
      <text x={cx + 8} y={cy + 96} fontSize="13" fontWeight="700" fill="#dc2626">mg</text>

      {/* Normal N up */}
      <line x1={cx} y1={yGround} x2={cx} y2={yGround - 140} stroke="#0284c7" strokeWidth="2.4" markerEnd="url(#fbd-blue)" />
      <text x={cx - 22} y={yGround - 134} fontSize="13" fontWeight="700" fill="#0284c7">N</text>

      {/* Motion indicators */}
      <line x1={cx + r + 10} y1={cy} x2={cx + r + 76} y2={cy} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#fbd-teal)" />
      <text x={cx + r + 18} y={cy - 10} fontSize="12" fontWeight="700" fill="#0f766e">v konstan (a = 0)</text>

      <path d={`M ${cx - 24} ${cy - r - 12} A 62 62 0 0 1 ${cx + 42} ${cy - r + 2}`} fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#fbd-amber)" />
      <text x={cx + 20} y={cy - r - 14} fontSize="12" fontWeight="700" fill="#b45309">ω konstan (α = 0)</text>

      {/* Static friction = 0 note */}
      <rect x="330" y="236" width="210" height="44" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="342" y="254" fontSize="11.5" fontWeight="700" fill="#0f766e">f_s = 0 N (di titik kontak)</text>
      <text x="342" y="270" fontSize="10.5" fill="#475569">Tidak ada percepatan pada v konstan</text>
    </svg>
  );
};

export const FreeBodyDiagram: React.FC<FreeBodyDiagramProps> = ({ questionId }) => {
  switch (questionId) {
    case 1:
      return (
        <InclineDownFbd
          title="Diagram Benda Bebas — Soal 1 (Bidang Miring Turun)"
          angleLabel="θ = 30°"
          bodyLabel="Silinder pejal (m = 4 kg, R = 0,2 m) menggelinding turun tanpa slip"
        />
      );
    case 2:
      return (
        <HorizontalSteadyFbd
          title="Diagram Benda Bebas — Soal 2 (Lintasan Datar)"
          bodyLabel="Bola berongga tipis (m = 3 kg, R = 0,25 m) bergerak dengan ω = 16 rad/s konstan"
        />
      );
    case 3:
      return (
        <InclineDownFbd
          title="Diagram Benda Bebas — Soal 3 (Bidang Miring Turun)"
          angleLabel="Bidang miring kasar"
          bodyLabel="Bola pejal (m = 5 kg, R = 0,2 m) menggelinding turun tanpa slip"
        />
      );
    case 4:
      return (
        <InclineDownFbd
          title="Diagram Benda Bebas — Soal 4 (Perbandingan pada Bidang Miring)"
          angleLabel="Bidang miring identik"
          bodyLabel="Berlaku untuk Bola Pejal (A) dan Cincin Tipis (B) dengan besar f_s berbeda"
        />
      );
    case 5:
      return (
        <InclineUpFbd
          title="Diagram Benda Bebas — Soal 5 (Mendaki Bidang Miring)"
          bodyLabel="Silinder berongga tipis (m = 2 kg) mendaki lereng θ = 30°; f_s tetap ke atas lereng"
        />
      );
    case 6:
      return (
        <HorizontalSteadyFbd
          title="Diagram Benda Bebas — Soal 6 (Lintasan Datar)"
          bodyLabel="Silinder pejal (m = 6 kg, R = 0,2 m) menggelinding dengan v = 5 m/s konstan"
        />
      );
    case 7:
      return (
        <InclineDownFbd
          title="Diagram Benda Bebas — Soal 7 (Bidang Miring Turun)"
          angleLabel="θ = 30°"
          bodyLabel="Bola pejal (m = 3,5 kg, R = 0,15 m) menggelinding turun tanpa slip"
        />
      );
    case 8:
      return (
        <HorizontalSteadyFbd
          title="Diagram Benda Bebas — Soal 8 (Lintasan Datar Kedua Benda)"
          bodyLabel="Benda 1 (m₁ = 3 kg) dan Benda 2 (m₂ = 4 kg) menggelinding pada v = 6 m/s konstan"
        />
      );
    case 9:
      return (
        <HorizontalSteadyFbd
          title="Diagram Benda Bebas — Soal 9 (Roda pada Lantai Datar)"
          bodyLabel="Roda termodifikasi (m = 8 kg, R = 0,5 m) menggelinding tanpa slip di lantai datar"
        />
      );
    case 10:
    default:
      return (
        <InclineUpFbd
          title="Diagram Benda Bebas — Soal 10 (Posisi 3: Lereng Menanjak)"
          bodyLabel="Silinder pejal (m = 4 kg, R = 0,25 m) melewati lereng menanjak pada h₃ = 2,1 m"
        />
      );
  }
};
