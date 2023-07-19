import { pino } from "npm:pino@8";
import PinoPretty from "npm:pino-pretty@10";

import type { PinoPretty as PinoPrettyNs } from "npm:pino-pretty@10";

export const logger = pino(
  (PinoPretty as unknown as () => PinoPrettyNs.PrettyStream)(),
);
