export type IntentVector = {
  direction: "up" | "down" | "neutral";
  intensity: number;
};

export function buildIntent(alignmentScore: number): IntentVector {
  if (alignmentScore > 0.75)
    return { direction: "up", intensity: alignmentScore };

  if (alignmentScore < 0.4)
    return { direction: "down", intensity: 1 - alignmentScore };

  return { direction: "neutral", intensity: 0.3 };
}
