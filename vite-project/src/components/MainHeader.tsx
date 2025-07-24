import classes from './MainHeader.module.css'
import { MdMessage, MdPostAdd } from 'react-icons/md'
 import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.logo}>
                    <MdMessage/>
                    My Posts
                </h1>
                <p >
                    <Link className={classes.button} to='/create-posts'>
                        <MdPostAdd size={16}/>
                        Add New Post
                    </Link>
                </p>
            </header>
        </>
    )
}