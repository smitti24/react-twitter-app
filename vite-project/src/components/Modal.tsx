import classes from './Modal.module.css'
import { type ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
    return (
        <>
            <div className={classes.backdrop}>

           </div>
           <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}