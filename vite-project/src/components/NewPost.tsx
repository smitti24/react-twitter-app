
import { useForm } from 'react-hook-form';
import classes from './NewPost.module.css'
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type FormData } from '../schemas/post.schema';

interface NewPostProps {
    onSubmit: (data: FormData) => void
    onClose: () => void
}

export const NewPost = ({ onSubmit, onClose }: NewPostProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const handleFormSubmit = (data: FormData) => {
        onSubmit(data)
        onClose()
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(handleFormSubmit)}>
             <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" required {...register('author')}/>
                {errors.author && <span className="error">{errors.author.message}</span>}
            </div>

              <div>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} {...register('body')}/>
                {errors.body && <span className="error">{errors.body.message}</span>}
            </div>
           

            <button type="button" onClick={onClose}>Close</button>
            <button>Add Post</button>
        </form>
    )
}