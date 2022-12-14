// import { useState } from 'react'
import Init from './pages/Init'
import Chat_name from './pages/Chat_name'
import {
  createBrowserRouter,
  RouterProvider,
}  from 'react-router-dom'
import {UserProvider,useUserContext} from './context/user.context'
import Chat_open from './pages/Chat_open'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Init/>,
  },
  {
    path: "/chat",
    element: <Chat_name/>,
  },
  {
    path: "/chat/open",
    element: <Chat_open/>,
  },
])



function App() {
  return <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
}

export default App
