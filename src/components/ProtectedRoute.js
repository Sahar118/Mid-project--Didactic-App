import React, { useEffect } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router'
import { RiLogoutBoxLine } from "react-icons/ri";
import logo from '../assest/logo.ico'
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='layout p-1'>
            <div className="header bg-white p-2 flex justify-between items-center">

                <h3
                    className='cursor-pointer logo-p'
                    onClick={() => navigate('/')}>
                    <img src={logo} className='logo' />
                    המדריך למאבחנים דידקטיים
                </h3>

                {user && (
                    <div className='flex gap-1 items-center'>
                        <AiOutlineUser />

                        <h4
                            className='cursor-pointer underline'
                            onClick={() => navigate('/profile')}
                        >  שלום {user.name}</h4>
                    </div>
                )}
                <div
                    className='cursor-pointer'
                    onClick={() => {
                        localStorage.removeItem('user')
                        navigate('/login')
                    }}>
                    <RiLogoutBoxLine />

                </div>



            </div>
            <div className="content my-1 bg-white">{children} </div>
        </div>
    )
}

export default ProtectedRoute