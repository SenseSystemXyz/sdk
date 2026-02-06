import { ObserverAgent } from "./agents/observerAgent.js";

const agent = new ObserverAgent();

const stream = [
  { source: "onchain", value: 0.1, timestamp: Date.now() },
  { source: "onchain", value: 0.15, timestamp: Date.now() },
  { source: "onchain", value: 0.9, timestamp: Date.now() }
];

console.log(agent.observe(stream));
