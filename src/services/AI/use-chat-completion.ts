import OpenAI from "openai";
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/completions";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const useChatCompletion = async (prompt: string, options = {
    model: 'gpt-3.5-turbo',
} as Omit<ChatCompletionCreateParamsNonStreaming, 'messages' | 'model'>) => await openai.chat.completions.create({
    model: `gpt-3.5-turbo`,
    messages: [{ role: "user", content: prompt }],
    ...options
});