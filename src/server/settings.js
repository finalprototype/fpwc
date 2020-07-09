const env = require("env-var");

const LOCAL = "local";
const TEST = "test";
const DEVELOPMENT = "development";
const PRODUCTION = "production";

const ENV_NAME = env
  .get("ENV_NAME")
  .required()
  .asEnum([LOCAL, TEST, DEVELOPMENT, PRODUCTION]);

const DEPLOYED = ENV_NAME === DEVELOPMENT || ENV_NAME === PRODUCTION;

module.exports = {
  ENV_NAME,
  DEPLOYED,
};
