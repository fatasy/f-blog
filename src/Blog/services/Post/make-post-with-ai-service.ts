import { aiPostSchemeDto } from "@blog/dto/post/ai-post-dto";

import { useChatCompletion } from "@/services/AI/use-chat-completion";
import { CreatePostBodyType } from "@blog/dto/post/create-post-body-dto";

export const makePostWithAIService = async (
	prompt: string,
): Promise<CreatePostBodyType> => {
	const data = await useChatCompletion(prompt, {
		functions: [{ name: "set_post", parameters: aiPostSchemeDto }],
		function_call: { name: "set_post" },
	});
	return JSON.parse(
		data.choices[0].message.function_call?.arguments || "{}",
	) as unknown as CreatePostBodyType;
};
