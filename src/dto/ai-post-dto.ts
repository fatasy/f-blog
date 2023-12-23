export const aiPostSchemeDto = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "description": "Post title"
        },
        "content": {
            "type": "string",
            "description": "Post content"
        },
        "published": {
            "type": "boolean",
            "description": "Indicates whether the post is published"
        },
        "categories": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Category name"
                    }
                },
                "required": ["name"]
            },
            "description": "Array of objects representing post categories with a 'name' property"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Tag name"
                    }
                },
                "required": ["name"]
            },
            "description": "Array of objects representing post tags with a 'name' property"
        }
    }
}
