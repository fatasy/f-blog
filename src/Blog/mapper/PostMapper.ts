import { Post } from "@prisma/client";

export class PostMapper {
	public static toDTO(post: Post) {
		return {
			id: post.id,
			title: post.title,
			content: post.content,
			published: post.published,
		};
	}

	public static toEntity(post: any) {}
}
