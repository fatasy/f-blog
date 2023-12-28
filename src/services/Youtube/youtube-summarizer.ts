import { openai } from "../AI/use-chat-completion";
import { youtubeTranscriptText } from "./youtube-transcript";

const systemPrompt =
	"I want you to act as a Life Coach that can create good summaries!";
const languageCode = "português";
export async function youtubeSummarizerWithAi(video: string) {
	const transcript = await youtubeTranscriptText(video);
	const prompt = `Summarize the following text in ${languageCode}.
    Text: ${transcript}

    Add a title to the summary in ${languageCode}. 
    Include an INTRODUCTION, BULLET POINTS if possible, and a CONCLUSION in ${languageCode}.`;
	const summary = await openai.chat.completions.create({
		model: `gpt-3.5-turbo`,
		messages: [
			{ role: "system", content: systemPrompt },
			{ role: "user", content: prompt },
		],
		temperature: 1,
	});

	return summary;
}
