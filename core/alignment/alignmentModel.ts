import { coherenceScore } from "./coherenceScore.js";

export function modelAlignment(signals: number[]) {
  const coherence = coherenceScore(signals);

  return {
    aligned: coherence > 0.65,
    coherence,
    confidence: coherence * Math.log(signals.length + 1)
  };
}
