import { useState } from "react"
import { NewPost } from "./NewPost"
import { Post } from "./Post"
import classes from './PostList.module.css'
import { Modal } from "./Modal"

export const PostList = () => {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredBody(event.target.value)
    }

    const handleAuthorChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAuthor(event.target.value)
    }
    
    return (
        <>
        <Modal>
            <NewPost onBodyChange={handleBodyChange} onAuthorChange={handleAuthorChange} />
        </Modal>
       
        <ul className={classes.posts}>
            <Post author={enteredAuthor} text={enteredBody}/>
            <Post author='Smith' text={enteredAuthor}/>
        </ul>
        </>
    )
}