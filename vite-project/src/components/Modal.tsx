import { useNavigate } from 'react-router-dom'
import classes from './Modal.module.css'
import { type ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
}

export const Modal = ({ children}: ModalProps) => {
    const navigate =  useNavigate()

    function closeHandler() {
        navigate('..') //Parent route
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}>

           </div>
           <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}