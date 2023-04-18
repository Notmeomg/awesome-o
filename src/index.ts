// import { OpenAI } from "langchain/llms/openai";
// import { BufferMemory } from "langchain/memory";
// import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";
import { config } from "dotenv";
// import chalk from "chalk";
// import { getUserInput } from "./utils/getUserInput";

const { OPENAI_API_KEY } = config().parsed || {};

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

const chat = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

const run = async () => {
  const response = await chat.generatePrompt([
    await chatPrompt.formatPromptValue({
      input_language: "English",
      output_language: "French",
      text: "I love programming.",
    }),
  ]);

  console.dir(response, { depth: null });
};

run();

// const model = new OpenAI({ modelName: "gpt-3.5-turbo" });
// const memory = new BufferMemory();
// const chain = new ConversationChain({ llm: model, memory });

// console.log({ model, memory, chain });

// async function main() {
//   let greeting = chalk.gray("Hello there, how can I help you?");
//   let response;
//   while (true) {
//     const input = await getUserInput(response || greeting);
//     const res = await chain.call({
//       input,
//     });

//     console.log(res);

//     response = chalk.gray(res.response);
//   }
// }

// main();
