import { YoutubeTranscript } from "youtube-transcript";

export async function youtubeTranscript(video: string) {
	return await YoutubeTranscript.fetchTranscript(video);
}

export async function youtubeTranscriptText(video: string) {
	const transcript = await youtubeTranscript(video);
	return transcript.map(({ text }) => text).join(" ");
}
