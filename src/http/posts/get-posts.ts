import { Elysia } from "elysia";



export const getPosts = new Elysia()
    .get("", () => "Get all posts")
