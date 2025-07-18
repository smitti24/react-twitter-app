import { useState } from "react"
import { NewPost } from "./NewPost"
import { Post } from "./Post"
import classes from './PostList.module.css'
import { Modal } from "./Modal"
import type { FormData } from "../schemas/post.schema"

export const PostList = ({isModalOpen, closeModal}: {isModalOpen: boolean, closeModal: () => void}) => {
    const [enteredBody, setEnteredBody] = useState<string[]>([]) 
    const [enteredAuthor, setEnteredAuthor] = useState<string[]>([]) 

    const postCreatedHandler = ({author, body}: FormData) => {
        setEnteredBody([...enteredBody, body])
        setEnteredAuthor([...enteredAuthor, author])
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
        enteredAuthor.length > 0 ? (
            <ul className={classes.posts}>
            {
                enteredAuthor.map((author, index) => (
                    <Post author={author} text={enteredBody[index]}/>
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