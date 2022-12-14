import { Link } from "react-router-dom"
import { useUserContext } from "../context/user.context"



export default function init() {
    const {setUserData} = useUserContext()
    function Name_me(e) {
        e.preventDefault()
        setUserData({name:e.target.name.value})
    }

    return (
        <>
            <form onSubmit={Name_me}>
                <input type="text" name="name" />
                <button>Select</button>
            </form>
            <Link to={'/chat'}>Link</Link>
        </>
    )
}
