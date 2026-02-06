import { noiseFilter } from "./noiseFilter.js";

export type RawSignal = {
  source: string;
  value: number;
  timestamp: number;
};

export function extractSignal(stream: RawSignal[]) {
  const values = stream.map(s => s.value);
  const filtered = noiseFilter(values);

  return {
    strength: filtered.length / values.length,
    variance: Math.max(...filtered) - Math.min(...filtered),
    samples: filtered.length
  };
}
