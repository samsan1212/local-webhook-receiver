import { pino } from "pino";
import PinoPretty from "pino-pretty";

import type { PinoPretty as PinoPrettyNs } from "pino-pretty";

export const logger = pino(
  (PinoPretty as unknown as () => PinoPrettyNs.PrettyStream)(),
);
