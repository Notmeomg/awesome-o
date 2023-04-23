import type { ConversationChain } from "langchain/chains";
import basicChatModel from "./basicChatModel.js";
import startConversation from "./startConversation.js";
import conversationLoop from "./conversationLoop.js";
import checkOpenAIKey from "../utils/checkOpenAIKey.js";

async function awesomeO() {
  checkOpenAIKey();

  const chain = basicChatModel();

  await startConversation(chain);

  await conversationLoop(chain);

  return;
}

export default awesomeO;
