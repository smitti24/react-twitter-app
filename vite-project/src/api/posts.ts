import type { FormData } from '../schemas/post.schema'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export const postsApi = {
    getPosts: async (): Promise<{ posts: FormData[] }> => {
        const response = await fetch(`${API_BASE_URL}/posts`)
        if (!response.ok) {
            throw new Error('Failed to fetch posts')
        }
        return response.json()
    },

    createPost: async (post: FormData): Promise<FormData> => {
        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        })
        if (!response.ok) {
            throw new Error('Failed to create post')
        }
        return response.json()
    },
}