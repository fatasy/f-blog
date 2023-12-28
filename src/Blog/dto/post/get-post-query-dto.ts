import { Static, t } from "elysia";

export const GetPostQuery = t.Object(
	{
		page: t.Optional(t.Numeric({ default: 1 })),
		pageSize: t.Optional(t.Numeric({ default: 10 })),
	},
	{
		default: {
			page: 1,
			pageSize: 10,
		},
	},
);

export type GetPostQueryType = Static<typeof GetPostQuery>;
