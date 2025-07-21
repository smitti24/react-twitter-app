import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "../api/posts";
import type { FormData } from "../schemas/post.schema";

// Define the API response type
type PostsResponse = { posts: FormData[] }

export const usePosts = () => {
    // useQuery<TQueryFnData, TError, TData, TQueryKey>
    return useQuery<PostsResponse>({
        queryKey: ['posts'],
        queryFn: postsApi.getPosts,
        staleTime: 2 * 60 * 1000,
    })
}

export const useCreatePost = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: postsApi.createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })
}