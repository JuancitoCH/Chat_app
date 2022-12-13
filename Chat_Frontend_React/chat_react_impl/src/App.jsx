// import { useState } from 'react'
import Init from './pages/Init'
import {
  createBrowserRouter,
  RouterProvider,
}  from 'react-router-dom'
import {UserProvider,useUserContext} from './context/user.context'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Init/>,
  },
])



function App() {
  return <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
}

export default App
