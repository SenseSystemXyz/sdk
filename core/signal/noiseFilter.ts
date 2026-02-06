export function noiseFilter(values: number[], threshold = 0.2): number[] {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return values.filter(v => Math.abs(v - avg) > threshold);
}
