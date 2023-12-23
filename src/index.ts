import { Elysia } from "elysia";
import { createPostWithAICron } from "./crons/create-post-with-ai-cron";
import { posts } from "./http/posts";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(posts)
  .use(createPostWithAICron)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
