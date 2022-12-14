import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/user.context'



export default function Chat() {
    const {setUserData} = useUserContext()
    const navigate = useNavigate()
    function nameUser(e) {
        e.preventDefault()
        setUserData({name:e.target.name.value})
        navigate('/chat/open')
        console.log("a")
    }
    return (
        <>
            <div>
                <form onSubmit={nameUser}>
                    <input type="text" name="name" placeholder='Elige Tu Nombre' />
                    <button >Enter</button>
                </form>
            </div>
        </>
    )
}
