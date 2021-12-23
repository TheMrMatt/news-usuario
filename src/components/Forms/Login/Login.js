import React, { useRef, useContext, useEffect } from 'react'
import { Container, Wrapper, FormulatioTitular, Formulario, ButtonSubmit, ButtonsWrapper, InputsWrapper } from './Elements'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Inputs from '../Inputs';
import { UserContext } from '../../../Store/context/UserContext'

const Login = () => {
    const { user, users, login } = useContext(UserContext)



    return (
        <>
            <Container>
                <Wrapper>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .required("Required"),
                            password: Yup.string()
                                .min(8, "Must be 8 characters or more")
                                .required("Required"),
                        })}
                        onSubmit={values => {



                            const log = {
                                email: values.email,
                                password: values.password,
                            }

                            login(log, users)
                        }

                        }
                    >
                        {(formik) => (<Formulario className="form-cont" encType="multipart/form-data">
                            <FormulatioTitular>Ingresa con tu cuenta</FormulatioTitular>
                            <InputsWrapper>
                                <Inputs
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="log"
                                />
                                <Inputs
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="contraseña"
                                    className="log"
                                />
                            </InputsWrapper>

                            <ButtonsWrapper>
                                <ButtonSubmit type="submit">Iniciar Sesion</ButtonSubmit>
                            </ButtonsWrapper>
                        </Formulario>)
                        }

                    </Formik>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login
