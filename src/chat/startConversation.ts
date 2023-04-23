import type { ConversationChain } from "langchain/chains";

async function startConversation(chain: ConversationChain) {
  return chain.call({
    input: "Initialize conversation",
  });
}

export default startConversation;
