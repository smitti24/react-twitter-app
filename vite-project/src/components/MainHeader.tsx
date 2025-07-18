import classes from './MainHeader.module.css'
import { MdMessage, MdPostAdd } from 'react-icons/md'

export const MainHeader = ({ onCreatePost }: {onCreatePost: () => void}) => {
    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.logo}>
                    <MdMessage/>
                    My Posts
                </h1>
                <p >
                    <button className={classes.button} onClick={onCreatePost}>
                        <MdPostAdd size={16}/>
                        Add New Post
                    </button>
                </p>
            </header>
        </>
    )
}