import { z } from 'zod';

export const schema = z.object({
    author: z.string().min(1, 'Author is required'),
    body: z.string().min(1, 'Post content is required')
})

export type FormData = z.infer<typeof schema>

