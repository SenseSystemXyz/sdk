import { ObserverAgent } from "../agents/observerAgent.js";

const agent = new ObserverAgent();

const mockStream = Array.from({ length: 30 }).map((_, i) => ({
  source: "social",
  value: Math.random() * (i > 20 ? 1.5 : 0.3),
  timestamp: Date.now() - i * 1000
}));

const result = agent.observe(mockStream);

console.log("🧭 Early Intent Detected:");
console.log(result);
