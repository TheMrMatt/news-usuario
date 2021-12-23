import React, { useRef, useContext, useState } from 'react'
import { Container, Wrapper, FormulatioTitular, Formulario, ButtonCancel, ButtonSubmit, ButtonsWrapper, FileInput, FileLabel, InputContainer } from './Elements'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Inputs from '../Inputs';
import { NotasContext } from '../../../Store/context/NotasContext'
import { useNavigate } from 'react-router-dom'

const EditarNota = ({ nota, notas }) => {
    const { updateNota } = useContext(NotasContext)
    const [url, setUrl] = useState("")
    let history = useNavigate();
    const editorRef = useRef(null);
    console.log('img de la nota', nota.img[0].filename);
    return (
        <>
            <Container>
                <Wrapper>
                    <Formik
                        initialValues={{
                            titulo: `${nota.titulo}`,
                            categoria: `${nota.categoria}`,
                            subCategoria: `${nota.subCategoria ? nota.subCategoria : undefined}`,
                            img: `${nota.img[0].filename}`,
                            descripcion: `${nota.descripcion}`,

                        }}
                        validationSchema={Yup.object({
                            titulo: Yup.string()
                                .max(40, "Must be 40 characters or less")
                                .required("Required"),
                            categoria: Yup.string()
                                .required("Required"),
                            subCategoria: Yup.string(),
                            descripcion: Yup.string()
                                .required("Required"),


                        })}
                        onSubmit={values => {
                            let data = new FormData();
                            data.append("titulo", values.titulo)
                            data.append("categoria", values.categoria)
                            data.append("subCategoria", values.subCategoria)
                            data.append("descripcion", values.descripcion)
                            data.append("img", url)
                            data.append("contenido", editorRef.current.getContent())


                            const newNota = {
                                id: nota._id,
                                autor: nota.autor,
                                titulo: values.titulo,
                                categoria: values.categoria,
                                subCategoria: values.subCategoria,
                                img: values.img,
                                descripcion: values.descripcion,
                                contenido: editorRef.current.getContent()
                            }

                            updateNota(nota._id, data, () => history.push('/dashboard/publicaciones'))

                        }

                        }
                    >
                        {(formik) => (<Formulario className="form-cont" encType="multipart/form-data">
                            <FormulatioTitular>Editar Publicacion</FormulatioTitular>
                            <Inputs
                                label="Titulo"
                                name="titulo"
                                type="text"
                                placeholder="juanito97"
                            />

                            <Inputs label="Categoria"
                                name="categoria"
                                as="select"
                                placeholder="juanito97">
                                <option value={undefined} checked>Selecciones una Opcion</option>
                                <option value="Deportes">Deportes</option>
                                <option value="Espectaculos">Espectaculos</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Policiales">Policiales</option>

                            </Inputs>
                            <Inputs
                                label="Sub Categoria"
                                name="subCategoria"
                                as="select"
                                placeholder="juanito97"
                            >


                                <option value={undefined} checked>Selecciones una Opcion</option>

                                <option value="Futbol">Futbol</option>
                                <option value="Tenis">Tenis</option>
                                <option value="Rugby">Rugby</option>
                                <option value="MasDeportes">Mas deportes</option>
                                <option value="Cine">Cine</option>
                                <option value="Teatro">Teatro</option>
                                <option value="MasEspectaculos">Mas Espectaculos</option>
                            </Inputs>

                            <InputContainer>
                                <FileLabel for='img'>Imagen</FileLabel>
                                <FileInput type="file" label="img" id='img' name="img" onChange={(event) => { setUrl(event.target.files[0]) }} />
                            </InputContainer>
                            <Inputs
                                label="Descripcion"
                                name="descripcion"
                                type="text"
                                placeholder="juanito97"
                            />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                apiKey='nurxc5ela5l8uholgedkctj0mwmve9o9k730f6nm92s4zxti'
                                initialValue={nota.contenido}

                                init={{
                                    height: 500,
                                    width: 750,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <ButtonsWrapper>
                                <ButtonCancel>Cancel</ButtonCancel>
                                <ButtonSubmit type="submit">Publicar</ButtonSubmit>
                            </ButtonsWrapper>


                        </Formulario>)
                        }

                    </Formik>
                </Wrapper>
            </Container>
        </>
    )
}

export default EditarNota
