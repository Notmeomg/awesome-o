import type { ConversationChain } from "langchain/chains";

async function continueConversation(chain: ConversationChain, input: string) {
  return chain.call({
    input,
  });
}

export default continueConversation;
