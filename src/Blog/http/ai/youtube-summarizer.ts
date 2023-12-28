import { youtubeSummarizerWithAi } from "@blog/services/Youtube/youtube-summarizer";
import { Elysia, t } from "elysia";

export const youtubeSummarizer = new Elysia().post(
	"youtube-summarizer",
	async ({ body: { video } }) => await youtubeSummarizerWithAi(video),
	{
		body: t.Object({
			video: t.String(),
		}),
	},
);
