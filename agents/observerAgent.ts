import { extractSignal } from "../core/signal/signalExtractor.js";
import { modelAlignment } from "../core/alignment/alignmentModel.js";
import { surfaceIntent } from "../core/intent/intentSurface.js";

export class ObserverAgent {
  observe(stream: any[]) {
    const signal = extractSignal(stream);
    const alignment = modelAlignment([signal.strength, signal.variance]);
    return surfaceIntent(alignment);
  }
}
