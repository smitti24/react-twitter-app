
import classes from './NewPost.module.css'

export const NewPost = (props: {onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void, onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {

    
    return (
        <form className={classes.form}>
              <div>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" required onChange={props.onAuthorChange}/>
            </div>

            <button type="submit">Add Post</button>
        </form>
    )
}