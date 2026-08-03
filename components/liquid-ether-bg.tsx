"use client";

import dynamic from "next/dynamic";

const LiquidEther = dynamic(
  () => import("@/components/reactbits/LiquidEther.jsx"),
  { ssr: false },
);

export default function LiquidEtherBg() {
  return (
    <LiquidEther
      colors={["#f43f5e", "#f97316", "#8b5cf6"]}
      resolution={0.4}
      mouseForce={15}
      cursorSize={100}
      autoDemo={true}
      autoSpeed={0.4}
      autoIntensity={1.8}
      isViscous={true}
      viscous={20}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
