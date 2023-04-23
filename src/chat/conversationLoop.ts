import type { ConversationChain } from "langchain/chains";
import getUserInput from "../utils/getUserInput.js";
import continueConversation from "./continueConversation.js";

async function conversationLoop(chain: ConversationChain) {
  try {
    while (true) {
      const userInput = await getUserInput();
      await continueConversation(chain, userInput);
    }
  } catch (error) {
    console.log({ error });
  }
}

export default conversationLoop;
