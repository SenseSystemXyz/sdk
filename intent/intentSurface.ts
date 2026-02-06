import { buildIntent } from "./intentVector.js";

export function surfaceIntent(alignment: {
  coherence: number;
  confidence: number;
}) {
  const intent = buildIntent(alignment.coherence);

  return {
    ...intent,
    confidence: alignment.confidence,
    timestamp: Date.now()
  };
}
