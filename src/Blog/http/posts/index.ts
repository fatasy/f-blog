import { Elysia } from "elysia";

import { CreatePostBody } from "@blog/dto/post/create-post-body-dto";
import { GetPostQuery } from "@blog/dto/post/get-post-query-dto";
import { createPostService } from "@blog/services/Post/create-post-service";
import { getPostsWithPagination } from "@blog/services/Post/get-post-with-pagination";

export const posts = new Elysia({ prefix: "/posts" })
	.get("", async ({ query }) => await getPostsWithPagination(query), {
		query: GetPostQuery,
	})
	.post("", ({ body }) => createPostService(body), {
		body: CreatePostBody,
	});
