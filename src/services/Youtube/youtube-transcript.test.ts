import { describe, expect, it } from "bun:test";
import { youtubeTranscript, youtubeTranscriptText } from "./youtube-transcript";

describe("Youtube Transcript", () => {
	it("return a valid transcript", async () => {
		const transcript = await youtubeTranscript(
			"https://www.youtube.com/watch?v=0mvUehmK6e4",
		);
		expect(transcript).toBeArray();
	});

	it("return a valid transcript text", async () => {
		const transcript = await youtubeTranscriptText(
			"https://www.youtube.com/watch?v=0mvUehmK6e4",
		);
		expect(transcript).toBeString();
	});
});
