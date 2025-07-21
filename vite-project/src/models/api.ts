import type { FormData } from "../schemas/post.schema"

export interface PostsResponse {
    posts: FormData[]
}

export interface ApiError {
    message: string
    code?: string
}