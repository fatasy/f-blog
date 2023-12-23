import { cron } from '@elysiajs/cron';
import { createPostService } from '../services/Post/create-post-service';
import { makePostWithAIService } from '../services/Post/make-post-with-ai-service';

export const createPostWithAICron = cron({
    name: 'cron-create-post-with-ai',
    pattern: '*/20 * * * * *',
    async run() {
        console.log('running cron-create-post-with-ai');
        const post = await makePostWithAIService("make one posts about a column teaching how to make a dish")
        console.log({ post });
        createPostService({ ...post, authorId: 1 })
    }
})