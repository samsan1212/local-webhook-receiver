import { serve } from "https://deno.land/std@0.193.0/http/server.ts";

import { logger } from "~/lib/logger.ts";
import { config } from "~/lib/config.ts";
import { convertRequestBody } from "~/utils/convert_request_body.ts";

const handler = async (req: Request): Promise<Response> => {
  logger.info(`Request received: ${req.url}`);
  let file: Deno.FsFile | undefined;
  if (!Deno.env.get("NO_LOG_FILE")) {
    const logFileUrl = new URL("../server.log", import.meta.url).pathname;
    file = await Deno.open(logFileUrl, {
      create: true,
      write: true,
      append: true,
    });
  }

  const headers = Object.fromEntries(req.headers.entries());
  const headerMessage = `Request headers:\n\n${
    JSON.stringify(headers, null, 2)
  }\n`;
  logger.info(headerMessage);

  await file?.write(new TextEncoder().encode(headerMessage)).catch((err) => {
    logger.error("Fail to write logfile: %s", err.message);
  });

  if (req.body) {
    const body = await convertRequestBody(req);
    const bodyMessage = `Request body:\n\n${JSON.stringify(body, null, 2)}\n`;
    logger.info(bodyMessage);
    await file?.write(new TextEncoder().encode(bodyMessage)).catch((err) => {
      logger.error("Fail to write logfile: %s", err.message);
    });
  }

  file?.close();

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
    logger.info(`Server running on port ${port}`);
  },
});
