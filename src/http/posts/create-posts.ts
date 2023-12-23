import { Elysia, Static, t } from "elysia";
import { createPostService } from "../../services/Post/create-post-service";


export const CreatePostBody = t.Object({
    title: t.String(),
    content: t.String(),
    published: t.Boolean(),
    authorId: t.Number(),
    categories: t.Optional(t.Array(
        t.Object({
            name: t.String()
        })
    )),
    tags: t.Optional(t.Array(
        t.Object({
            name: t.String()
        })
    )),
})


export type CreatePostBodyType = Static<typeof CreatePostBody>;


export const createPost = new Elysia().post("/posts", ({ body }) => {
    return createPostService(body)
}, {
    body: CreatePostBody
})
