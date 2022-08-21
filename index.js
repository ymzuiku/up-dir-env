const fs = require("fs");
const { resolve } = require("path");
const { config } = require("dotenv");

const cwd = process.cwd();

module.exports = {
  config: () => {
    const envs = ["./.env", "../.env", "../../.env", "../../../.env", "../../../../.env", "../../../../../.env"];

    const envPath = envs.find((v) => {
      if (fs.existsSync(resolve(cwd, v))) {
        return v;
      }
    });

    if (!envPath) {
      throw Error("No found .env in " + cwd);
    }

    config({ path: resolve(cwd, envPath) });
  },
};
