import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Features/shared/components/Navbar'

const AppLayout = () => {
    return (
        <>
       <Navbar/>
            <Outlet/>
        </>

    )
}

export default AppLayout