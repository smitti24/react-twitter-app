import { useState } from "react"
import { NewPost } from "./NewPost"
import { Post } from "./Post"
import classes from './PostList.module.css'
import { Modal } from "./Modal"
import type { FormData } from "../schemas/post.schema"

export const PostList = ({isModalOpen, closeModal}: {isModalOpen: boolean, closeModal: () => void}) => {
    const [posts, setPosts] = useState<FormData[]>([]) 

    const postCreatedHandler = (data: FormData) => {
        setPosts([...posts, data])
    }

    return (
        <>
        {
            isModalOpen && (
                <Modal onModalClose={closeModal}>
                    <NewPost onSubmit={postCreatedHandler} onClose={closeModal} />
                </Modal>
            )
        }
       { 
        posts.length > 0 ? (
            <ul className={classes.posts}>
            {
                posts.map((post, index) => (
                    <Post key={index} author={post.author} text={post.body}/>
                ))
            }
            
        </ul>
        ) : (
            <h1 className={classes.emptyPosts}>No Posts Found</h1>
        )
       }
       
        </>
    )
}