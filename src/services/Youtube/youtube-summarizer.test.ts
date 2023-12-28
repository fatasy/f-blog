import { describe, expect, it } from "bun:test";
import { youtubeSummarizerWithAi } from "./youtube-summarizer";

describe("Youtube Summarizer", () => {
	it("youtube summarizer", async () => {
		const summary = await youtubeSummarizerWithAi(
			"https://www.youtube.com/watch?v=0mvUehmK6e4",
		);
		console.log({ summary });
		expect(summary).toBeString();
	});
});
