import { Post } from "./Post"
import classes from './PostList.module.css'
import { usePosts } from "../hooks/usePosts"

export const PostList = () => {
    const { data, isLoading, error } = usePosts()
    const posts = data?.posts ?? []


    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
        {
            isLoading ? (
                <h1 className={classes.emptyPosts}>Loading Posts...</h1>
            ): (
                posts.length > 0 ? (
                    <ul className={classes.posts}>
                        {posts.map((post, index) => (
                            <Post key={index} author={post.author} text={post.body}/>
                        ))}
                    </ul>
                ) : (
                    <h1 className={classes.emptyPosts}>No Posts Found</h1>
                )
            )
        }
        </>
    )
}