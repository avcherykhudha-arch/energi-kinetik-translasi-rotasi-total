import React from 'react';

interface StimulusDiagramProps {
  questionId: number;
}

function tangentPointAndCenter(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  u: number,
  r: number
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const nx = dy / len;
  const ny = -dx / len; // points upward in SVG coordinates
  const px = x1 + u * dx;
  const py = y1 + u * dy;
  const cx = px + r * nx;
  const cy = py + r * ny;
  return { px, py, cx, cy, nx, ny, tx: dx / len, ty: dy / len };
}

const SharedDefs: React.FC = () => (
  <defs>
    <marker
      id="arrow-teal"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f766e" />
    </marker>
    <marker
      id="arrow-slate"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#334155" />
    </marker>
    <marker
      id="arrow-amber"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b45309" />
    </marker>
    <radialGradient id="solid-sphere-grad" cx="35%" cy="32%" r="65%">
      <stop offset="0%" stopColor="#99f6e4" />
      <stop offset="55%" stopColor="#14b8a6" />
      <stop offset="100%" stopColor="#115e59" />
    </radialGradient>
    <radialGradient id="solid-cyl-grad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stopColor="#e2e8f0" />
      <stop offset="60%" stopColor="#94a3b8" />
      <stop offset="100%" stopColor="#475569" />
    </radialGradient>
    <linearGradient id="ramp-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f1f5f9" />
      <stop offset="100%" stopColor="#cbd5e1" />
    </linearGradient>
    <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" strokeWidth="1" opacity="0.35" />
    </pattern>
  </defs>
);

const GravityIndicator: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + 34}
      stroke="#334155"
      strokeWidth="2"
      markerEnd="url(#arrow-slate)"
    />
    <text x={x + 8} y={y + 22} fontSize="12" fontWeight="600" fill="#1e293b">
      g = 10 m/s²
    </text>
  </g>
);

export const StimulusDiagram: React.FC<StimulusDiagramProps> = ({ questionId }) => {
  switch (questionId) {
    case 1: {
      // Silinder pejal menuruni bidang miring 30 deg, s = 5.4 m
      const x1 = 90;
      const y1 = 80;
      const x2 = 430;
      const y2 = 276; // dy/dx = 196/340 ~= tan(30 deg)
      const r = 28;
      const start = tangentPointAndCenter(x1, y1, x2, y2, 0.14, r);
      const end = tangentPointAndCenter(x1, y1, x2, y2, 0.88, r);
      return (
        <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-label="Diagram Soal 1: Silinder pejal menuruni bidang miring 30 derajat">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="320" fill="#ffffff" />
          {/* Ramp triangle */}
          <polygon points={`${x1},${y1} ${x1},${y2} ${x2},${y2}`} fill="url(#ramp-grad)" stroke="#475569" strokeWidth="2" />
          <line x1="50" y1={y2} x2="560" y2={y2} stroke="#334155" strokeWidth="2.5" />
          <rect x="50" y={y2} width="510" height="12" fill="url(#hatch)" />

          {/* Angle 30 deg */}
          <path d={`M ${x2 - 58} ${y2} A 58 58 0 0 1 ${x2 - 50} ${y2 - 29}`} fill="none" stroke="#0f766e" strokeWidth="2" />
          <text x={x2 - 96} y={y2 - 12} fontSize="13" fontWeight="600" fill="#0f766e">θ = 30°</text>

          {/* Length s dimension parallel to ramp */}
          <line x1={x1 + 14} y1={y1 - 24} x2={x2 + 14} y2={y2 - 24} stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
          <text x="275" y="145" fontSize="13" fontWeight="600" fill="#0f172a" transform="rotate(30 275 145)">
            s = 5,4 m (tanpa slip)
          </text>

          {/* Initial solid cylinder */}
          <circle cx={start.cx} cy={start.cy} r={r} fill="url(#solid-cyl-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={start.cx} cy={start.cy} r={10} fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 2" />
          <circle cx={start.cx} cy={start.cy} r="3" fill="#0f172a" />
          <circle cx={start.px} cy={start.py} r="3.5" fill="#0f766e" />
          <line x1={start.cx} y1={start.cy} x2={start.cx + r * 0.7} y2={start.cy - r * 0.7} stroke="#0f172a" strokeWidth="1.5" />
          <text x={start.cx + 30} y={start.cy - 22} fontSize="12" fontWeight="600" fill="#0f172a">R = 0,2 m</text>
          <text x={start.cx - 68} y={start.cy - 38} fontSize="12" fontWeight="600" fill="#0f766e">Posisi Awal (v₀ = 0)</text>

          {/* Final ghosted cylinder */}
          <circle cx={end.cx} cy={end.cy} r={r} fill="#ccfbf1" fillOpacity="0.55" stroke="#0f766e" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx={end.cx} cy={end.cy} r="3" fill="#0f766e" />
          <circle cx={end.px} cy={end.py} r="3.5" fill="#0f766e" />
          <line x1={end.cx} y1={end.cy} x2={end.cx + 42} y2={end.cy + 24} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
          <text x={end.cx + 46} y={end.cy + 28} fontSize="13" fontWeight="700" fill="#0f766e">v = ?</text>

          {/* Motion & rotation cue */}
          <path d={`M ${start.cx + 22} ${start.cy - 26} A 34 34 0 0 1 ${start.cx + 35} ${start.cy + 2}`} fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <text x={start.cx + 42} y={start.cy - 10} fontSize="12" fontWeight="600" fill="#b45309">ω</text>

          {/* Info box */}
          <rect x="435" y="24" width="145" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="447" y="44" fontSize="12" fontWeight="700" fill="#0f172a">Silinder Pejal</text>
          <text x="447" y="61" fontSize="12" fill="#334155">m = 4 kg</text>
          <text x="447" y="77" fontSize="12" fill="#334155">I = ½ mR²</text>
          <GravityIndicator x={480} y={110} />
        </svg>
      );
    }

    case 2: {
      // Bola berongga tipis pada lintasan horizontal, omega = 16 rad/s
      const yGround = 225;
      const r = 56;
      const cx = 250;
      const cy = yGround - r;
      return (
        <svg viewBox="0 0 600 300" className="w-full h-auto" role="img" aria-label="Diagram Soal 2: Bola berongga tipis menggelinding pada lintasan datar">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="300" fill="#ffffff" />
          <line x1="40" y1={yGround} x2="560" y2={yGround} stroke="#334155" strokeWidth="2.5" />
          <rect x="40" y={yGround} width="520" height="14" fill="url(#hatch)" />

          {/* Hollow spherical shell cross-section */}
          <circle cx={cx} cy={cy} r={r} fill="#0d9488" stroke="#0f172a" strokeWidth="2.2" />
          <circle cx={cx} cy={cy} r={r - 11} fill="#f0fdfa" stroke="#115e59" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx={cx} cy={cy} r="3.5" fill="#0f172a" />
          <text x={cx - 8} y={cy - 10} fontSize="12" fontWeight="700" fill="#0f172a">PM</text>

          {/* Radius line */}
          <line x1={cx} y1={cy} x2={cx + r * 0.78} y2={cy - r * 0.62} stroke="#0f172a" strokeWidth="1.6" />
          <text x={cx + 16} y={cy - 22} fontSize="12" fontWeight="600" fill="#0f172a">R = 0,25 m</text>

          {/* Contact point */}
          <circle cx={cx} cy={yGround} r="4" fill="#0f766e" />
          <text x={cx - 48} y={yGround + 30} fontSize="12" fontWeight="600" fill="#0f766e">Titik Kontak P (tanpa slip)</text>

          {/* Velocity vector */}
          <line x1={cx + r + 8} y1={cy} x2={cx + r + 95} y2={cy} stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#arrow-teal)" />
          <text x={cx + r + 18} y={cy - 10} fontSize="13" fontWeight="600" fill="#0f766e">v = ωR</text>

          {/* Angular velocity arc */}
          <path d={`M ${cx - 28} ${cy - r - 14} A 68 68 0 0 1 ${cx + 48} ${cy - r + 4}`} fill="none" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
          <text x={cx - 18} y={cy - r - 24} fontSize="13" fontWeight="700" fill="#b45309">ω = 16 rad/s</text>

          {/* Info box */}
          <rect x="415" y="34" width="158" height="72" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="427" y="55" fontSize="12" fontWeight="700" fill="#0f172a">Bola Berongga Tipis</text>
          <text x="427" y="73" fontSize="12" fill="#334155">m = 3 kg</text>
          <text x="427" y="91" fontSize="12" fill="#334155">I = ⅔ mR²</text>
        </svg>
      );
    }

    case 3: {
      // Bola pejal menuruni bidang miring h = 3.5 m
      const x1 = 100;
      const y1 = 68;
      const x2 = 430;
      const y2 = 266;
      const r = 26;
      const start = tangentPointAndCenter(x1, y1, x2, y2, 0.1, r);
      const end = tangentPointAndCenter(x1, y1, x2, y2, 0.9, r);
      return (
        <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-label="Diagram Soal 3: Bola pejal menggelinding dari ketinggian 3,5 meter">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="320" fill="#ffffff" />
          <polygon points={`${x1},${y1} ${x1},${y2} ${x2},${y2}`} fill="url(#ramp-grad)" stroke="#475569" strokeWidth="2" />
          <line x1="45" y1={y2} x2="560" y2={y2} stroke="#334155" strokeWidth="2.5" />
          <rect x="45" y={y2} width="515" height="12" fill="url(#hatch)" />

          {/* Vertical height dimension */}
          <line x1="65" y1={start.cy} x2="65" y2={end.cy} stroke="#0f766e" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1="58" y1={start.cy} x2={start.cx} y2={start.cy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="58" y1={end.cy} x2={end.cx} y2={end.cy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="16" y="165" fontSize="13" fontWeight="700" fill="#0f766e">h = 3,5 m</text>

          {/* Initial solid sphere */}
          <circle cx={start.cx} cy={start.cy} r={r} fill="url(#solid-sphere-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={start.cx} cy={start.cy} r="3" fill="#0f172a" />
          <circle cx={start.px} cy={start.py} r="3.5" fill="#0f766e" />
          <text x={start.cx + 34} y={start.cy - 10} fontSize="12" fontWeight="600" fill="#0f172a">Awal (v₀ = 0)</text>

          {/* Final sphere at bottom */}
          <circle cx={end.cx} cy={end.cy} r={r} fill="url(#solid-sphere-grad)" fillOpacity="0.65" stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx={end.cx} cy={end.cy} r="3" fill="#0f766e" />
          <circle cx={end.px} cy={end.py} r="3.5" fill="#0f766e" />
          <line x1={end.cx + 28} y1={end.cy + 14} x2={end.cx + 76} y2={end.cy + 14} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
          <text x={end.cx + 80} y={end.cy + 18} fontSize="13" fontWeight="700" fill="#0f766e">v, ω</text>

          {/* Info box */}
          <rect x="412" y="24" width="166" height="74" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="424" y="45" fontSize="12" fontWeight="700" fill="#0f172a">Bola Pejal Homogen</text>
          <text x="424" y="63" fontSize="12" fill="#334155">m = 5 kg · R = 0,2 m</text>
          <text x="424" y="81" fontSize="12" fill="#334155">I = ⅖ mR² (tanpa slip)</text>
          <GravityIndicator x={460} y={118} />
        </svg>
      );
    }

    case 4: {
      // Perbandingan Bola Pejal (A) dan Cincin Tipis (B) pada ketinggian h = 2.8 m
      const x1 = 90;
      const y1 = 86;
      const x2 = 415;
      const y2 = 266;
      const r = 24;
      const posA = tangentPointAndCenter(x1, y1, x2, y2, 0.14, r);
      const posB = tangentPointAndCenter(x1 + 125, y1, x2 + 125, y2, 0.14, r);
      return (
        <svg viewBox="0 0 620 320" className="w-full h-auto" role="img" aria-label="Diagram Soal 4: Perbandingan Bola Pejal A dan Cincin Tipis B pada bidang miring identik">
          <SharedDefs />
          <rect x="0" y="0" width="620" height="320" fill="#ffffff" />
          {/* Left ramp (A) */}
          <polygon points={`${x1},${y1} ${x1},${y2} ${x2},${y2}`} fill="url(#ramp-grad)" fillOpacity="0.7" stroke="#475569" strokeWidth="1.8" />
          {/* Right ramp (B) */}
          <polygon points={`${x1 + 125},${y1} ${x1 + 125},${y2} ${x2 + 125},${y2}`} fill="#f0fdfa" fillOpacity="0.65" stroke="#0f766e" strokeWidth="1.8" strokeDasharray="5 3" />
          <line x1="40" y1={y2} x2="585" y2={y2} stroke="#334155" strokeWidth="2.5" />

          {/* Height indicator */}
          <line x1="60" y1={posA.cy} x2="60" y2={y2 - r} stroke="#0f766e" strokeWidth="1.6" strokeDasharray="4 3" />
          <text x="12" y="176" fontSize="12" fontWeight="700" fill="#0f766e">h = 2,8 m</text>

          {/* Body A: Bola Pejal */}
          <circle cx={posA.cx} cy={posA.cy} r={r} fill="url(#solid-sphere-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={posA.cx} cy={posA.cy} r="3" fill="#0f172a" />
          <circle cx={posA.px} cy={posA.py} r="3.2" fill="#0f766e" />
          <text x={posA.cx - 32} y={posA.cy - 34} fontSize="12" fontWeight="700" fill="#0f172a">A: Bola Pejal</text>

          {/* Body B: Cincin Tipis */}
          <circle cx={posB.cx} cy={posB.cy} r={r} fill="none" stroke="#b45309" strokeWidth="6" />
          <circle cx={posB.cx} cy={posB.cy} r="3" fill="#b45309" />
          <circle cx={posB.px} cy={posB.py} r="3.2" fill="#b45309" />
          <text x={posB.cx - 30} y={posB.cy - 34} fontSize="12" fontWeight="700" fill="#b45309">B: Cincin Tipis</text>

          {/* Info box */}
          <rect x="380" y="20" width="220" height="72" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="392" y="40" fontSize="12" fontWeight="700" fill="#0f172a">M = 2 kg · R = 0,3 m (keduanya)</text>
          <text x="392" y="58" fontSize="12" fill="#334155">I_A = ⅖ MR² · I_B = MR²</text>
          <text x="392" y="76" fontSize="12" fill="#0f766e">Dilepaskan bersamaan tanpa slip</text>
          <GravityIndicator x={485} y={108} />
        </svg>
      );
    }

    case 5: {
      // Silinder berongga tipis bergerak v1 = 4 m/s lalu naik bidang miring 30 deg
      const xBend = 240;
      const yFloor = 250;
      const xTop = 520;
      const yTop = 88; // tan(30) ~ 162/280
      const r = 26;
      const pos1 = tangentPointAndCenter(50, yFloor, xBend, yFloor, 0.42, r);
      const posPeak = tangentPointAndCenter(xBend, yFloor, xTop, yTop, 0.72, r);
      return (
        <svg viewBox="0 0 600 310" className="w-full h-auto" role="img" aria-label="Diagram Soal 5: Silinder berongga menaiki bidang miring 30 derajat">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="310" fill="#ffffff" />
          {/* Track */}
          <polygon points={`${xBend},${yFloor} ${xTop},${yFloor} ${xTop},${yTop}`} fill="url(#ramp-grad)" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1={yFloor} x2={xTop + 20} y2={yFloor} stroke="#334155" strokeWidth="2.5" />
          <line x1={xBend} y1={yFloor} x2={xTop} y2={yTop} stroke="#334155" strokeWidth="2.5" />

          {/* Angle 30 */}
          <path d={`M ${xBend + 56} ${yFloor} A 56 56 0 0 0 ${xBend + 48} ${yFloor - 28}`} fill="none" stroke="#0f766e" strokeWidth="2" />
          <text x={xBend + 64} y={yFloor - 10} fontSize="13" fontWeight="600" fill="#0f766e">θ = 30°</text>

          {/* Initial hollow cylinder on flat */}
          <circle cx={pos1.cx} cy={pos1.cy} r={r} fill="none" stroke="#0f172a" strokeWidth="6" />
          <circle cx={pos1.cx} cy={pos1.cy} r="3" fill="#0f172a" />
          <circle cx={pos1.px} cy={pos1.py} r="3.5" fill="#0f766e" />
          <line x1={pos1.cx + r + 6} y1={pos1.cy} x2={pos1.cx + r + 58} y2={pos1.cy} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
          <text x={pos1.cx + r + 10} y={pos1.cy - 10} fontSize="12" fontWeight="700" fill="#0f766e">v₁ = 4 m/s</text>
          <text x={pos1.cx - 42} y={pos1.cy - 36} fontSize="12" fontWeight="600" fill="#0f172a">m = 2 kg, R = 0,4 m</text>

          {/* Peak position */}
          <circle cx={posPeak.cx} cy={posPeak.cy} r={r} fill="none" stroke="#0f766e" strokeWidth="5" strokeDasharray="5 3" />
          <circle cx={posPeak.cx} cy={posPeak.cy} r="3" fill="#0f766e" />
          <circle cx={posPeak.px} cy={posPeak.py} r="3.5" fill="#0f766e" />
          <text x={posPeak.cx - 90} y={posPeak.cy - 28} fontSize="12" fontWeight="700" fill="#0f766e">Berhenti sesaat (v = 0)</text>

          {/* Height h_maks */}
          <line x1={posPeak.cx} y1={posPeak.cy} x2={posPeak.cx} y2={pos1.cy} stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x={posPeak.cx + 8} y={(posPeak.cy + pos1.cy) / 2} fontSize="12" fontWeight="700" fill="#b45309">h_maks = ?</text>

          <rect x="24" y="24" width="215" height="58" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="36" y="44" fontSize="12" fontWeight="700" fill="#0f172a">Silinder Berongga Tipis</text>
          <text x="36" y="63" fontSize="12" fill="#334155">I = mR² · g = 10 m/s² (tanpa slip)</text>
        </svg>
      );
    }

    case 6: {
      // Silinder pejal di jalan datar v = 5 m/s
      const yGround = 220;
      const r = 54;
      const cx = 240;
      const cy = yGround - r;
      return (
        <svg viewBox="0 0 600 290" className="w-full h-auto" role="img" aria-label="Diagram Soal 6: Silinder pejal menggelinding di jalan datar">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="290" fill="#ffffff" />
          <line x1="40" y1={yGround} x2="560" y2={yGround} stroke="#334155" strokeWidth="2.5" />
          <rect x="40" y={yGround} width="520" height="14" fill="url(#hatch)" />

          {/* Solid cylinder face */}
          <circle cx={cx} cy={cy} r={r} fill="url(#solid-cyl-grad)" stroke="#0f172a" strokeWidth="2.2" />
          <circle cx={cx} cy={cy} r={r - 12} fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx={cx} cy={cy} r="3.5" fill="#0f172a" />
          <line x1={cx} y1={cy} x2={cx - r * 0.72} y2={cy - r * 0.68} stroke="#0f172a" strokeWidth="1.6" />
          <text x={cx - 102} y={cy - 36} fontSize="12" fontWeight="600" fill="#0f172a">R = 0,2 m</text>

          <circle cx={cx} cy={yGround} r="4" fill="#0f766e" />
          <text x={cx - 48} y={yGround + 30} fontSize="12" fontWeight="600" fill="#0f766e">Kontak Tanpa Slip</text>

          {/* Velocity & Omega */}
          <line x1={cx + r + 8} y1={cy} x2={cx + r + 96} y2={cy} stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#arrow-teal)" />
          <text x={cx + r + 18} y={cy - 10} fontSize="13" fontWeight="700" fill="#0f766e">v = 5 m/s</text>

          <path d={`M ${cx - 24} ${cy - r - 12} A 62 62 0 0 1 ${cx + 42} ${cy - r + 2}`} fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
          <text x={cx + 2} y={cy - r - 20} fontSize="12" fontWeight="700" fill="#b45309">ω = v/R</text>

          <rect x="410" y="34" width="160" height="72" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="422" y="54" fontSize="12" fontWeight="700" fill="#0f172a">Silinder Pejal</text>
          <text x="422" y="72" fontSize="12" fill="#334155">m = 6 kg</text>
          <text x="422" y="90" fontSize="12" fill="#334155">I = ½ mR²</text>
        </svg>
      );
    }

    case 7: {
      // Bola pejal di bidang miring h = 7.0 m, 30 deg
      const x1 = 96;
      const y1 = 72;
      const x2 = 434;
      const y2 = 267;
      const r = 24;
      const start = tangentPointAndCenter(x1, y1, x2, y2, 0.1, r);
      const end = tangentPointAndCenter(x1, y1, x2, y2, 0.9, r);
      return (
        <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-label="Diagram Soal 7: Bola pejal menggelinding dari ketinggian 7 meter">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="320" fill="#ffffff" />
          <polygon points={`${x1},${y1} ${x1},${y2} ${x2},${y2}`} fill="url(#ramp-grad)" stroke="#475569" strokeWidth="2" />
          <line x1="45" y1={y2} x2="565" y2={y2} stroke="#334155" strokeWidth="2.5" />
          <rect x="45" y={y2} width="520" height="12" fill="url(#hatch)" />

          <path d={`M ${x2 - 58} ${y2} A 58 58 0 0 1 ${x2 - 50} ${y2 - 29}`} fill="none" stroke="#0f766e" strokeWidth="2" />
          <text x={x2 - 96} y={y2 - 12} fontSize="13" fontWeight="600" fill="#0f766e">θ = 30°</text>

          <line x1="60" y1={start.cy} x2="60" y2={end.cy} stroke="#0f766e" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1="54" y1={start.cy} x2={start.cx} y2={start.cy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="54" y1={end.cy} x2={end.cx} y2={end.cy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="12" y="168" fontSize="13" fontWeight="700" fill="#0f766e">h = 7,0 m</text>

          <circle cx={start.cx} cy={start.cy} r={r} fill="url(#solid-sphere-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={start.cx} cy={start.cy} r="3" fill="#0f172a" />
          <circle cx={start.px} cy={start.py} r="3.5" fill="#0f766e" />
          <text x={start.cx + 30} y={start.cy - 10} fontSize="12" fontWeight="600" fill="#0f172a">v₀ = 0</text>

          <circle cx={end.cx} cy={end.cy} r={r} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx={end.cx} cy={end.cy} r="3" fill="#0f766e" />
          <line x1={end.cx + 26} y1={end.cy + 14} x2={end.cx + 78} y2={end.cy + 14} stroke="#0f766e" strokeWidth="2.4" markerEnd="url(#arrow-teal)" />
          <text x={end.cx + 82} y={end.cy + 18} fontSize="13" fontWeight="700" fill="#0f766e">v = ?</text>

          <rect x="415" y="24" width="165" height="72" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="427" y="45" fontSize="12" fontWeight="700" fill="#0f172a">Bola Pejal Homogen</text>
          <text x="427" y="63" fontSize="12" fill="#334155">m = 3,5 kg · R = 0,15 m</text>
          <text x="427" y="81" fontSize="12" fill="#334155">I = ⅖ mR²</text>
          <GravityIndicator x={465} y={114} />
        </svg>
      );
    }

    case 8: {
      // Dua benda pada lintasan datar dengan v = 6 m/s
      const yG = 225;
      const r1 = 42;
      const r2 = 52;
      const c1x = 155;
      const c2x = 415;
      return (
        <svg viewBox="0 0 600 295" className="w-full h-auto" role="img" aria-label="Diagram Soal 8: Bola berongga dan silinder pejal menggelinding pada kecepatan sama">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="295" fill="#ffffff" />
          <line x1="35" y1={yG} x2="565" y2={yG} stroke="#334155" strokeWidth="2.5" />
          <rect x="35" y={yG} width="530" height="14" fill="url(#hatch)" />

          {/* Benda 1: Bola berongga tipis */}
          <circle cx={c1x} cy={yG - r1} r={r1} fill="#0d9488" stroke="#0f172a" strokeWidth="2" />
          <circle cx={c1x} cy={yG - r1} r={r1 - 9} fill="#f0fdfa" stroke="#115e59" strokeWidth="1.4" strokeDasharray="3 2" />
          <circle cx={c1x} cy={yG - r1} r="3" fill="#0f172a" />
          <circle cx={c1x} cy={yG} r="3.5" fill="#0f766e" />
          <line x1={c1x + r1 + 6} y1={yG - r1} x2={c1x + r1 + 64} y2={yG - r1} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
          <text x={c1x + r1 + 10} y={yG - r1 - 9} fontSize="12" fontWeight="700" fill="#0f766e">v = 6 m/s</text>
          <text x={c1x - 65} y="48" fontSize="12" fontWeight="700" fill="#0f172a">Benda 1: Bola Berongga</text>
          <text x={c1x - 65} y="66" fontSize="12" fill="#334155">m₁ = 3 kg · R₁ = 0,2 m</text>
          <text x={c1x - 65} y="84" fontSize="12" fill="#334155">I₁ = ⅔ m₁R₁²</text>

          {/* Benda 2: Silinder pejal */}
          <circle cx={c2x} cy={yG - r2} r={r2} fill="url(#solid-cyl-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={c2x} cy={yG - r2} r="3" fill="#0f172a" />
          <circle cx={c2x} cy={yG} r="3.5" fill="#0f766e" />
          <line x1={c2x + r2 + 6} y1={yG - r2} x2={c2x + r2 + 64} y2={yG - r2} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
          <text x={c2x + r2 + 10} y={yG - r2 - 9} fontSize="12" fontWeight="700" fill="#0f766e">v = 6 m/s</text>
          <text x={c2x - 65} y="48" fontSize="12" fontWeight="700" fill="#0f172a">Benda 2: Silinder Pejal</text>
          <text x={c2x - 65} y="66" fontSize="12" fill="#334155">m₂ = 4 kg · R₂ = 0,25 m</text>
          <text x={c2x - 65} y="84" fontSize="12" fill="#334155">I₂ = ½ m₂R₂²</text>
        </svg>
      );
    }

    case 9: {
      // Roda termodifikasi pada lantai datar
      const yGround = 225;
      const r = 62;
      const cx = 230;
      const cy = yGround - r;
      return (
        <svg viewBox="0 0 600 295" className="w-full h-auto" role="img" aria-label="Diagram Soal 9: Roda termodifikasi menggelinding tanpa slip">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="295" fill="#ffffff" />
          <line x1="40" y1={yGround} x2="560" y2={yGround} stroke="#334155" strokeWidth="2.5" />
          <rect x="40" y={yGround} width="520" height="14" fill="url(#hatch)" />

          {/* Modified wheel with weighted rim & hub */}
          <circle cx={cx} cy={cy} r={r} fill="#e2e8f0" stroke="#0f172a" strokeWidth="3" />
          <circle cx={cx} cy={cy} r={r - 12} fill="#f8fafc" stroke="#475569" strokeWidth="1.5" />
          {/* Spokes */}
          <line x1={cx - r + 12} y1={cy} x2={cx + r - 12} y2={cy} stroke="#64748b" strokeWidth="3" />
          <line x1={cx} y1={cy - r + 12} x2={cx} y2={cy + r - 12} stroke="#64748b" strokeWidth="3" />
          <circle cx={cx} cy={cy} r="14" fill="#0f766e" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="3" fill="#ffffff" />

          <line x1={cx} y1={cy} x2={cx + r * 0.72} y2={cy - r * 0.68} stroke="#0f172a" strokeWidth="1.8" />
          <text x={cx + 22} y={cy - 26} fontSize="12" fontWeight="700" fill="#0f172a">R = 0,5 m</text>

          <circle cx={cx} cy={yGround} r="4" fill="#0f766e" />
          <text x={cx - 46} y={yGround + 30} fontSize="12" fontWeight="600" fill="#0f766e">Kontak Tanpa Slip</text>

          <path d={`M ${cx - 26} ${cy - r - 12} A 70 70 0 0 1 ${cx + 44} ${cy - r + 2}`} fill="none" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
          <text x={cx - 8} y={cy - r - 22} fontSize="12" fontWeight="700" fill="#b45309">ω</text>

          <rect x="360" y="42" width="205" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="372" y="64" fontSize="12" fontWeight="700" fill="#0f172a">Data Sensor Dinamika</text>
          <text x="372" y="84" fontSize="12" fill="#334155">m = 8 kg · R = 0,5 m</text>
          <text x="372" y="102" fontSize="12" fill="#0f766e">K_total = 140 J · K_rot = 40 J</text>
          <text x="372" y="120" fontSize="12" fontWeight="700" fill="#b45309">Ditanya: I = ?</text>
        </svg>
      );
    }

    case 10:
    default: {
      // Lintasan multi-ketinggian: h1 = 4.5 m (v1 = 2 m/s), dasar h2 = 0, naik h3 = 2.1 m
      const yBase = 264;
      // Track polyline: flat top (40, 90)->(150,90), smooth curve down to (280,264)->(360,264), ramp up to (545,160)
      const r = 20;
      const c1x = 95;
      const c1y = 90 - r;
      const c2x = 320;
      const c2y = yBase - r;
      const pos3 = tangentPointAndCenter(360, yBase, 545, 160, 0.56, r);
      return (
        <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-label="Diagram Soal 10: Silinder pejal melintasi tiga ketinggian berbeda tanpa slip">
          <SharedDefs />
          <rect x="0" y="0" width="600" height="320" fill="#ffffff" />
          {/* Reference ground h2 = 0 */}
          <line x1="30" y1={yBase} x2="570" y2={yBase} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 4" />
          <text x="275" y={yBase + 22} fontSize="12" fontWeight="600" fill="#475569">Dasar (h₂ = 0 m)</text>

          {/* Rigid rough track */}
          <path
            d={`M 35 90 L 145 90 C 205 90, 215 ${yBase}, 280 ${yBase} L 360 ${yBase} L 545 160`}
            fill="none"
            stroke="#334155"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Height h1 */}
          <line x1="48" y1="90" x2="48" y2={yBase} stroke="#0f766e" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="10" y="182" fontSize="12" fontWeight="700" fill="#0f766e">h₁ = 4,5 m</text>

          {/* Height h3 */}
          <line x1={pos3.px} y1={pos3.py} x2={pos3.px} y2={yBase} stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x={pos3.px + 8} y={(pos3.py + yBase) / 2 + 4} fontSize="12" fontWeight="700" fill="#b45309">h₃ = 2,1 m</text>

          {/* Position 1 cylinder */}
          <circle cx={c1x} cy={c1y} r={r} fill="url(#solid-cyl-grad)" stroke="#0f172a" strokeWidth="2" />
          <circle cx={c1x} cy={c1y} r="2.8" fill="#0f172a" />
          <circle cx={c1x} cy={90} r="3.2" fill="#0f766e" />
          <line x1={c1x + r + 4} y1={c1y} x2={c1x + r + 44} y2={c1y} stroke="#0f766e" strokeWidth="2" markerEnd="url(#arrow-teal)" />
          <text x={c1x - 16} y={c1y - 28} fontSize="12" fontWeight="700" fill="#0f172a">Posisi 1 (v₁ = 2 m/s)</text>

          {/* Position 2 ghosted */}
          <circle cx={c2x} cy={c2y} r={r} fill="#f1f5f9" stroke="#64748b" strokeWidth="1.8" strokeDasharray="4 3" />
          <circle cx={c2x} cy={c2y} r="2.5" fill="#64748b" />
          <text x={c2x - 24} y={c2y - 26} fontSize="11" fontWeight="600" fill="#475569">Posisi 2</text>

          {/* Position 3 cylinder */}
          <circle cx={pos3.cx} cy={pos3.cy} r={r} fill="url(#solid-cyl-grad)" stroke="#b45309" strokeWidth="2" />
          <circle cx={pos3.cx} cy={pos3.cy} r="2.8" fill="#0f172a" />
          <circle cx={pos3.px} cy={pos3.py} r="3.2" fill="#b45309" />
          <text x={pos3.cx - 42} y={pos3.cy - 28} fontSize="12" fontWeight="700" fill="#b45309">Posisi 3 (ω₃ = ?)</text>

          <rect x="330" y="18" width="248" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="342" y="38" fontSize="12" fontWeight="700" fill="#0f172a">Silinder Pejal (tanpa slip)</text>
          <text x="342" y="56" fontSize="12" fill="#334155">m = 4 kg · R = 0,25 m · I = ½ mR²</text>
          <text x="342" y="72" fontSize="12" fill="#334155">g = 10 m/s²</text>
        </svg>
      );
    }
  }
};
