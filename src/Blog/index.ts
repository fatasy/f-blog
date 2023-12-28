import { posts } from "@blog/http/posts";
import Elysia from "elysia";

export const blog = new Elysia().use(posts);
