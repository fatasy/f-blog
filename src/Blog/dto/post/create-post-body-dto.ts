import { Static, t } from "elysia";

export const CreatePostBody = t.Object({
	title: t.String(),
	content: t.String(),
	published: t.Boolean(),
	authorId: t.Number(),
	categories: t.Optional(
		t.Array(
			t.Object({
				name: t.String(),
			}),
		),
	),
	tags: t.Optional(
		t.Array(
			t.Object({
				name: t.String(),
			}),
		),
	),
});

export type CreatePostBodyType = Static<typeof CreatePostBody>;
