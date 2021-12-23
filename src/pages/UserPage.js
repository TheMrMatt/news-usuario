import React, { useContext, useEffect } from 'react'
import UserInfo from '../components/User/Info/UserInfo'
import UserPublicaciones from '../components/User/Publicaciones/UserPublicaciones'
import UserRedes from '../components/User/Redes/UserRedes'
import UserPortada from '../components/User/UserPortada'
import { UserContext } from '../Store/context/UserContext'
import { NotasContext } from '../Store/context/NotasContext'
import Content from '../components/Partes/Content/Content'

const UserPage = () => {

    useEffect(() => {
        populateNotas()
    }, [])

    const { notas, populateNotas } = useContext(NotasContext)

    const { user, notasA } = useContext(UserContext)

    const aut = notas.filter(n => n.autor === user._id)


    return (
        <>
            <UserPortada user={user} />
            <UserInfo user={user} />

            <UserPublicaciones notas={aut} user={user} />

        </>
    )
}

export default UserPage
