import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import { Overlay, ModalContainer, Button, Header, Logo, Div } from './Elements'


const Modal = ({ open, children, onClose }) => {
    const [afuera, setAfuera] = useState(false)

    useEffect(() => {
        window.addEventListener('click', function (e) {
            const ele = document.querySelector('.afuera');

            if (e.target.matches('.afuera')) {

                setAfuera(true)
            } else {
                setAfuera(false)
            }

        })
    }, [])



    if (!open || afuera) return null
    return ReactDom.createPortal(

        <>
            <Overlay className={'afuera'} />

            {
                open && (
                    <>
                        <ModalContainer
                            initial={{ y: -700, x: "-50%" }}
                            animate={{
                                y: "-50%",
                            }}
                            exit={{ y: 700, x: "-50%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}

                        >
                            <Header>
                                <Div />
                                <Logo>Contexto</Logo>
                                <Button onClick={onClose}>X</Button>
                            </Header>

                            {children}
                        </ModalContainer>
                    </>
                )
            }


        </>,
        document.getElementById('portal')

    )
}

export default Modal
