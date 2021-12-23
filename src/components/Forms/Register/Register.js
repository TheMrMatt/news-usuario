import React, { useRef, useContext, useEffect, useState } from 'react'
import { Container, Wrapper, FormulatioTitular, Formulario, ButtonSubmit, ButtonsWrapper, InputsWrapper, Wrap, FileInput, FileLabel, InputContainer } from './Elements'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Inputs from '../Inputs';
import { UserContext } from '../../../Store/context/UserContext'
import { toast } from 'react-toastify';

const Register = () => {
    const { users, register, getUsers } = useContext(UserContext)
    const [imgPerfil, setImgPerfil] = useState("")
    const [imgPortada, setImgPortada] = useState("")

    useEffect(() => {
        getUsers();
    }, [])

    const verify = (user) => {
        let b = false;
        users.map(us => {
            if (us.email === user.email) {
                b = true;
            }
        })
        console.log(user)
        if (b === false) {
            register(user)
            toast.success('Usuario registrado con exito', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
        } else {
            toast.error('Un usuario ya existe con ese email', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
        }
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Formik
                        initialValues={{
                            nombre: "",
                            apellido: "",
                            imagenPerfil: "",
                            imagenPortada: "",
                            descripcion: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={Yup.object({
                            nombre: Yup.string()
                                .required("Required"),
                            apellido: Yup.string()
                                .required("Required"),

                            descripcion: Yup.string(),
                            email: Yup.string()
                                .required("Required"),
                            password: Yup.string()
                                .min(8, "Must be 8 characters or more")
                                .required("Required"),
                        })}
                        onSubmit={values => {
                            console.log('perfil', imgPerfil);
                            console.log('portada', imgPortada);
                            const nombreYapellido = `${values.nombre} ${values.apellido}`;
                            const tipoUsuario = 'Normal';
                            const redes = {
                                facebook: 'https://www.facebook.com/matiasE98',
                                twitter: 'https://twitter.com/Matiaserojas98',
                                instagram: 'https://www.instagram.com/matiase98/',
                                youtube: 'https://www.youtube.com/channel/UCUabdF8aGA6vkZEe-fcEPXw',
                            }
                            let data = new FormData();
                            data.append("nombreYapellido", nombreYapellido)
                            data.append('tipoUsuario', tipoUsuario)
                            data.append("imagenPerfil", imgPerfil)
                            data.append("imagenPortada", imgPortada)
                            data.append("descripcion", values.descripcion)
                            data.append("email", values.email)
                            data.append("password", values.password)
                            data.append("redes", redes)


                            verify(data)

                        }

                        }
                    >
                        {(formik) => (<Formulario className="form-cont" encType="multipart/form-data">

                            <InputsWrapper>
                                <Wrap>
                                    <Inputs
                                        label="Nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre"
                                        className="reg"
                                    />
                                    <Inputs
                                        label="Apellido"
                                        name="apellido"
                                        type="text"
                                        placeholder="Apellido"
                                        className="reg"
                                    />
                                </Wrap>

                                <InputContainer>
                                    <FileLabel for='imagenPerfil'>Imagen de perfil</FileLabel>
                                    <FileInput type="file" label="Imagen de perfil" id='imagenPerfil' name="imagenPerfil" onChange={(event) => { setImgPerfil(event.target.files[0]) }} />
                                </InputContainer>

                                <InputContainer>
                                    <FileLabel for='imagenPortada'> Imagen de portada </FileLabel>
                                    <FileInput type="file" label="Imagen de portada" id='imagenPortada' name="imagenPortada" onChange={(event) => { setImgPortada(event.target.files[0]) }} />
                                </InputContainer>

                                <Inputs
                                    label="Descripcion"
                                    name="descripcion"
                                    type="text"
                                    placeholder="descripcion"
                                    className="regi"
                                />
                                <Inputs
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="regi"
                                />
                                <Inputs
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="contraseña"
                                    className="regi"
                                />
                            </InputsWrapper>

                            <ButtonsWrapper>
                                <ButtonSubmit type="submit">Registrate</ButtonSubmit>
                            </ButtonsWrapper>
                        </Formulario>)
                        }

                    </Formik>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register
