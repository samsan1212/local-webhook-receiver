import { serve } from "https://deno.land/std@0.193.0/http/server.ts";

import { logger } from "~/lib/logger.ts";
import { config } from "~/lib/config.ts";

const handler = async (req: Request): Promise<Response> => {
  logger.log(`Request received: ${req.url}`);

  if (req.body) {
    const body = await req.json();
    logger.log(`Request body: ${JSON.stringify(body)}`);
  }

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

await serve(handler, {
  port: config.PORT,
  hostname: "0.0.0.0",
  onListen: ({ port }) => {
    logger.log(`Server running on port ${port}`);
  },
});
