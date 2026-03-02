import "@std/dotenv/load";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.number().int().default(7777),
});

export const config = await envSchema.parseAsync({
  PORT: Number.parseInt(Deno.env.get("PORT") ?? ""),
}).catch((err: z.ZodError) => {
  throw new Error(err.message);
});
