import { createPostService } from "@blog/services/Post/create-post-service";
import { makePostWithAIService } from "@blog/services/Post/make-post-with-ai-service";
import { cron } from "@elysiajs/cron";

export const createPostWithAICron = cron({
	name: "cron-create-post-with-ai",
	pattern: "*/20 * * * * *",
	async run() {
		const post = await makePostWithAIService(
			"make one posts about a column teaching how to make a dish",
		);
		createPostService({ ...post, authorId: 1 });
	},
});
