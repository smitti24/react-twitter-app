import classes from './Modal.module.css'
import { type ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onModalClose: () => void
}

export const Modal = ({ children, onModalClose }: ModalProps) => {
    return (
        <>
            <div className={classes.backdrop} onClick={onModalClose}>

           </div>
           <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}