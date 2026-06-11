import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './app.routes'
import { useSelector } from 'react-redux'
import { useAuth } from '../Features/hook/useAuth'
import { useEffect } from 'react'


function App() { 
  const user = useSelector(state => state.auth.user)

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App