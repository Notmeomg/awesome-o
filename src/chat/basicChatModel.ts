import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import chalk from "chalk";

function basicChatModel() {
  // This is a basic chat model that uses the OpenAi GPT-3.5 Turbo model and streams the output to the console.
  const chat = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
    streaming: true,
    callbacks: [
      {
        handleLLMStart() {
          process.stdout.write(chalk.green.bgBlack("🤖 awesome-O: "));
        },
        handleLLMNewToken(token: string) {
          process.stdout.write(chalk.green.bgBlack(token));
        },
        handleLLMEnd() {
          process.stdout.write("\n");
        },
      },
    ],
  });

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
    ),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  const chain = new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
    prompt: chatPrompt,
    llm: chat,
  });

  return chain;
}

export default basicChatModel;
