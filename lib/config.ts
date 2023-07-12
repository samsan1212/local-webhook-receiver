import * as yup from "https://cdn.skypack.dev/yup@^1.1?dts";
import { load } from "https://deno.land/std@0.193.0/dotenv/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.193.0/path/mod.ts";

await load({
  envPath: fromFileUrl(new URL("../.env", import.meta.url)),
  export: true,
  examplePath: null,
});

const envSchema = yup.object({
  PORT: yup.number().transform((val) => isNaN(val) ? undefined : val).default(
    9889,
  ),
});

export const config = await envSchema.validate({
  PORT: Deno.env.get("PORT"),
}).catch((err) => {
  throw new Error(err.message);
});
