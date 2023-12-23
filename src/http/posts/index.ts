import { Elysia } from "elysia";

import { createPost } from "./create-posts";
import { getPosts } from "./get-posts";


export const posts = new Elysia()
    .use(getPosts)
    .use(createPost)



