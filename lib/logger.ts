import * as Colours from "https://deno.land/std@0.193.0/fmt/colors.ts";

export const logger = {
  log: (...args: unknown[]) => {
    console.log(Colours.blue("[info]"), ...args);
  },
  warn: (...args: unknown[]) => {
    console.log(Colours.yellow("[warn]"), ...args);
  },
  error: (...args: unknown[]) => {
    console.log(Colours.red("[error]"), ...args);
  },
  success: (...args: unknown[]) => {
    console.log(Colours.green("[success]"), ...args);
  },
};
