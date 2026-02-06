export function coherenceScore(vectors: number[]): number {
  if (vectors.length === 0) return 0;
  const mean = vectors.reduce((a, b) => a + b, 0) / vectors.length;
  const deviation =
    vectors.reduce((a, b) => a + Math.abs(b - mean), 0) / vectors.length;

  return Number((1 / (1 + deviation)).toFixed(4));
}
