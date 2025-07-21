import { NewPost } from "./NewPost"
import { Post } from "./Post"
import classes from './PostList.module.css'
import { Modal } from "./Modal"
import { useCreatePost, usePosts } from "../hooks/usePosts"

export const PostList = ({isModalOpen, closeModal}: {isModalOpen: boolean, closeModal: () => void}) => {
    const { data, isLoading, error } = usePosts()
    const posts = data?.posts ?? []
    const { mutate: createPost, isPending } = useCreatePost()

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
        {
            isModalOpen && (
                <Modal onModalClose={closeModal}>
                    <NewPost onSubmit={createPost} onClose={closeModal} />
                </Modal>
            )
        }
        {
            isLoading || isPending ? (
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