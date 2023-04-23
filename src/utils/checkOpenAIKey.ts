import { config } from "dotenv";

function checkOpenAIKey() {
  const { OPENAI_API_KEY } = config().parsed || {};

  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not defined");
  }
}

export default checkOpenAIKey;
