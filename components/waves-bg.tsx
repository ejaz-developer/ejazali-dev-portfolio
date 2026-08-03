"use client";

import dynamic from "next/dynamic";

const Waves = dynamic(
  () => import("@/components/reactbits/Waves.jsx"),
  { ssr: false },
);

export default function WavesBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Waves
        lineColor="rgba(244, 63, 94, 0.3)"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
        xGap={10}
        yGap={32}
      />
    </div>
  );
}
