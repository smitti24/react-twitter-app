import { useForm } from 'react-hook-form';
import classes from './NewPost.module.css'
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type FormData } from '../schemas/post.schema';
import { Modal } from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/usePosts';

export default function NewPost() {
    const navigation = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const { mutate: createPost } = useCreatePost()

    const handleFormSubmit = (data: FormData) => {
        createPost(data)
        navigation('..')
    }

    return (
        <Modal>
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
           

            <Link type="button" to='..'>Close</Link>
            <button>Add Post</button>
        </form>
        </Modal>
        
    )
}