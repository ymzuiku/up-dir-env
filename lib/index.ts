import { config as envConfig } from "dotenv";
import * as fs from "node:fs";
import { resolve } from "node:path";

const cwd = process.cwd();

export const config = () => {
  if (process.env.VERCEL == "1") {
    return;
  }
  if (process.env.IGNOE_DOTENV == "1") {
    return;
  }
  const envs = [
    "./.env",
    "../.env",
    "../../.env",
    "../../../.env",
    "../../../../.env",
    "../../../../../.env",
  ];

  const envPath = envs.find((v) => {
    if (fs.existsSync(resolve(cwd, v))) {
      return v;
    }
  });

  if (!envPath) {
    throw Error("No found .env in " + cwd);
  }

  envConfig({ path: resolve(cwd, envPath) });
};
