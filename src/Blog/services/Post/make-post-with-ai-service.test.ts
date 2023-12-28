import { describe, expect, it } from "bun:test";
import { makePostWithAIService } from "./make-post-with-ai-service";

describe("Make Post With AI Service", () => {
	it("return a valid post", async () => {
		const post = await makePostWithAIService(
			"make one posts about a column teaching how to make a dish",
		);
		expect(post).toHaveProperty("title");
		expect(post).toHaveProperty("content");
		expect(post).toHaveProperty("published");
	});
});
