import { aiPostSchemeDto } from "../../dto/ai-post-dto";
import { CreatePostBodyType } from "../../http/posts/create-posts";
import { useChatCompletion } from "../AI/use-chat-completion";


export const makePostWithAIService = async (
    prompt: string
): Promise<CreatePostBodyType> => {
    const data = await useChatCompletion(prompt, {
        functions: [{ name: 'set_post', parameters: aiPostSchemeDto }],
        function_call: { name: 'set_post' }

    });
    return JSON.parse(data.choices[0].message.function_call?.arguments || '{}') as unknown as CreatePostBodyType
}