import { db } from "../../db";
import { CreatePostBodyType } from "../../http/posts/create-posts";

export const createPostService = async (
    { tags, categories, ...data }: CreatePostBodyType
) => {
    return await db.post.create({
        data: {
            ...data,
            tags: {
                connectOrCreate: tags?.map(({ name }) => ({
                    where: { name },
                    create: { name }
                })),

            },
            categories: {
                connectOrCreate: categories?.map(({ name }) => ({
                    where: { name },
                    create: { name }
                })),
            }
        }
    })
}