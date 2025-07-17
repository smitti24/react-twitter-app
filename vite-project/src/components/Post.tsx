import classes from './Post.module.css'

export const Post = ({author, text}: {author: string, text: string}) => {
    return (
        <li className={classes.post}>
            <h1 className={classes.author}>{author}</h1>
            <p className={classes.text}>{text}</p>
        </li>
    )
}