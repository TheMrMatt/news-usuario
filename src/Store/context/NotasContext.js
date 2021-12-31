import React, { createContext, useReducer } from 'react'
import NotasReducer from '../Reducers/NotasReducers'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    nota: {

    },
    loading: true,
    notas: [

    ],

    notasA: [

    ],
    masRecientes: [

    ],
    error: '',
    notasTags: [

    ]

}

const url = 'https://news-server-context.herokuapp.com/';
//va a fallar los mas recientes seguramente, no hay acciones ni funciones que lo llenen https://news-server-context.herokuapp.com
export const NotasContext = createContext(initialState)

export const NotasProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotasReducer, initialState)

    async function populateNota(id, token) {

        try {


            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            }
            const res = await axios.get(`${url}/nota/${id}`, config);


            dispatch({
                type: 'GET_NOTA',
                payload: res.data.data
            });
        } catch (err) {
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });

        }

    }

    async function populateNotas() {

        //const notasAutor = initialState.notas.filter(nota => nota.autor === autor);
        //usar esta accion para llamar a todas las notas, filtrar desde el front 

        try {
            const res = await axios.get(`${url}/nota/all`)

            dispatch({
                type: 'GET_NOTAS',
                payload: res.data.data
            });
        } catch (err) {

            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
        }

    }

    async function MasRecientesNotas() {
        try {


            const res = await axios.get(`${url}/nota/last`)

            dispatch({
                type: 'GET_RECIENTES',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'NOTA_ERROR',
                payload: err.response.data.error
            });
            toast.error(err.response.data.error, { position: toast.POSITION.TOP_RIGHT, autoClose: false })
        }
    }

    function startLoading() {
        dispatch({
            type: 'START_LOADING'
        });
    }


    return (
        <NotasContext.Provider value={{
            nota: state.nota,
            notas: state.notas,
            notasA: state.notasA,
            loading: state.loading,
            masRecientes: state.masRecientes,
            notasTags: state.notasTags,
            populateNota,
            populateNotas,
            startLoading,
            MasRecientesNotas
        }}>
            {children}
        </NotasContext.Provider>
    )
}