import React, { useContext, createContext, useReducer } from 'react'
import UserReducer from '../Reducers/UserReducers'
import axios from 'axios'
import { NotasContext } from './NotasContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    user: {},
    users: [

    ],
    auth: false,
    notasA: [

    ],
    userSearch: {

    },
    errorUser: {},
    loadingUser: true

}

const url = 'https://news-server-context.herokuapp.com';

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const { notas } = useContext(NotasContext)

    async function populateNotas(notas) {
        const notasUser = notas.filter(nota => nota.autor === initialState.user.nombreYapellido)

        dispatch({
            type: 'GET_NOTAS',
            payload: notasUser
        });
        try {

        } catch (err) {

        }
    }

    async function getUsers() {
        try {
            const res = await axios.get(`${url}/register`);


            dispatch({
                type: 'GET_USERS',
                payload: res.data.data
            });
        } catch (err) {
            console.log(err)
        }
    }

    async function getUser(userId) {
        // trae el usuario para cargar informacion necesaria de otro usuario
        try {
            const res = await axios.get(`${url}/user/${userId}`);



            dispatch({
                type: 'GET_USER',
                payload: res.data.data
            });

        } catch (err) {
            console.log(err)
            dispatch({
                type: 'GET_USER',
                payload: undefined
            });
        }
    }

    async function register(user) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        }

        try {
            const res = await axios.post(`${url}/register`, user, config)

            dispatch({
                type: 'REGISTER',
                payload: res.data.data
            });
        } catch (err) {
            console.log('algo salio mal')
        }
    }

    async function login(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        }
        try {
            const res = await axios.post(`${url}/login`, user, config)
            console.log(res)
            localStorage.setItem('data', JSON.stringify(res.data))
            dispatch({
                type: 'LOGIN',
                payload: res.data.user
            });
        } catch (err) {
            console.log('algo salio mal login')
        }
    }

    async function loginFacebook(redirect) {

        try {
            const res = await axios.get('/auth/facebook')
            console.log(res)

        } catch (err) {

        }
    }

    async function logout() {

        try {
            const res = await axios.get(`${url}/logout`)

            dispatch(
                {
                    type: 'LOGOUT',
                    payload: res.data.user
                })
            localStorage.clear()
            toast.success('Hasta luego!', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })

        } catch (err) {
            console.log('algo salio mal logout')
        }
    }

    function isLoggedIn(userp) {

        try {

            dispatch({
                type: 'LOGIN',
                payload: userp.user
            });
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            users: state.users,
            userSearch: state.userSearch,
            notasA: state.notasA,
            auth: state.auth,
            loadingUser: state.loadingUser,
            populateNotas,
            isLoggedIn,
            getUser,
            getUsers,
            register,
            login,
            logout,
            loginFacebook
        }}>
            {children}
        </UserContext.Provider>
    )
}