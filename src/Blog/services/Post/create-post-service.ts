import { db } from "@/db/prisma";
import { CreatePostBodyType } from "@blog/dto/post/create-post-body-dto";

export const createPostService = async ({
	tags,
	categories,
	...data
}: CreatePostBodyType) => {
	return await db.post.create({
		data: {
			...data,
			tags: {
				connectOrCreate: tags?.map(({ name }) => ({
					where: { name },
					create: { name },
				})),
			},
			categories: {
				connectOrCreate: categories?.map(({ name }) => ({
					where: { name },
					create: { name },
				})),
			},
		},
	});
};
