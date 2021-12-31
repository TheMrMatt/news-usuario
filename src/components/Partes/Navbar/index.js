import React, { useState, useContext, useEffect } from 'react'
import { NavbarContainer, Logo, Categorias, CategoriaLink, Log, HamburgerMenu, Nav, User, Uicon, OpenM, UserImg, Desplegable, FaIcon, GoIcon, usuarioContainer } from './NavElements'
import { Wrapper, Texto, Wrap, ButtonF, ButtonG, Wrap2, Text, Inicio, Email, Password, Reg } from '../../../components/Modal/ModalLogin/Elements'

import { Contenedor, UserInfo, Username, EmailUser, Acciones, Micuenta, CerrarSesion } from '../../../components/Modal/ModalCuenta/Elements'
import Modal from '../../../components/Modal/Modal'
import { UserContext } from '../../../Store/context/UserContext'
import Login from '../../../components/Forms/Login/Login'
import Register from '../../../components/Forms/Register/Register'
import ModalCuenta from '../../../components/Modal/ModalCuenta/ModalCuenta'
import ToastNotification from '../../../components/Toast/ToastNotification'
import { useNavigate } from 'react-router-dom'
import { PortadaContext } from '../../../Store/context/PortadaContext'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [register, setRegister] = useState(false)
    const [click, setClick] = useState(false);
    const { user, auth, logout, isLoggedIn, loginFacebook } = useContext(UserContext)
    const { startLoading } = useContext(PortadaContext);
    let history = useNavigate();
    const handleClick = () => { console.log(click); setClick(!click); }
    useEffect(() => {
        const loggedInUser = localStorage.getItem("data");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);

            isLoggedIn(foundUser)
        }
    }, []);

    const close = () => {
        setIsOpen(false)
        setIsOpen2(false)
        setRegister(false)
    }
    const cerrarSesion = () => {
        history('/', { replace: true })
        setIsOpen(false)
        setIsOpen2(false)
        setRegister(false)
        logout()
    }
    const href = 'http://localhost:5000/auth/facebook';
    return (
        <>
            <NavbarContainer>
                <Nav>
                    <HamburgerMenu onClick={() => handleClick()} />
                    <Logo to='/' exact='true' onClick={() => { startLoading() }}>Contexto</Logo>
                    <Categorias className='nav-menu'>
                        <CategoriaLink to='/espectaculos' exact='true' onClick={() => { startLoading() }}>Espectaculo</CategoriaLink>
                        <CategoriaLink to='/deportes' exact='true' onClick={() => { startLoading() }}>Deportes</CategoriaLink>
                        <CategoriaLink to='/policiales' exact='true' onClick={() => { startLoading() }}>Policiales</CategoriaLink>
                        <CategoriaLink to='/tecnologia' exact='true' onClick={() => { startLoading() }}>Tecnologia</CategoriaLink>


                    </Categorias>
                    {auth === false ?
                        <OpenM onClick={() => setIsOpen(true)}><Uicon /></OpenM> :
                        <User onClick={() => setIsOpen2(true)}><UserImg src={user.imagenPerfil[0].url} /></User>

                    }
                    {auth === false ?
                        <Modal open={isOpen} onClose={() => close()}>
                            {register ?
                                <Wrapper>
                                    <Texto>Completa tus datos para registrarte</Texto>
                                    <Register />
                                    <Reg onClick={() => setRegister(false)}>Volver</Reg>
                                </Wrapper>
                                :
                                <Wrapper>
                                    <Texto>Ingresa con tu cuenta de Facebook o Google</Texto>
                                    <Wrap>
                                        <ButtonF onClick={() => window.location = href}><FaIcon />Facebook</ButtonF>
                                        <ButtonG><GoIcon />Google</ButtonG>
                                    </Wrap>
                                    <Wrap2>
                                        <Login />
                                        <Reg onClick={() => setRegister(true)}>Registrate</Reg>
                                    </Wrap2>
                                </Wrapper>}
                        </Modal> : <ModalCuenta open={isOpen2} onClose={() => close()}>
                            <Contenedor>
                                <UserInfo>
                                    <Username>{user.nombreYapellido}</Username>
                                    <EmailUser>{user.email}</EmailUser>
                                </UserInfo>
                                <Acciones>
                                    <Micuenta to='/user' exact='true' onClick={() => { close() }}>Mi Cuenta</Micuenta>
                                    <CerrarSesion onClick={() => cerrarSesion()}>Cerrar Sesion</CerrarSesion>
                                </Acciones>
                            </Contenedor>
                        </ModalCuenta>
                    }

                </Nav>

                <Desplegable className={click ? 'act' : 'desact'}>
                    <Categorias className='desple'>
                        <CategoriaLink to='/espectaculos' exact='true' className='desple' onClick={handleClick}>Espectaculo</CategoriaLink>
                        <CategoriaLink to='/deportes' exact='true' className='desple' onClick={handleClick}>Deportes</CategoriaLink>
                        <CategoriaLink to='/policiales' exact='true' className='desple' onClick={handleClick}>Policiales</CategoriaLink>
                        <CategoriaLink to='/policiales' exact='true' className='desple' onClick={handleClick}>Policiales</CategoriaLink>
                        <CategoriaLink to='/tecnologia' exact='true' className='desple' onClick={handleClick}>Tecnologia</CategoriaLink>


                    </Categorias>
                </Desplegable>


            </NavbarContainer>
        </>
    )
}

/*
    
*/

export default Navbar
