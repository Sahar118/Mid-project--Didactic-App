import React, { useState, useEffect } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router'
import { RiLogoutBoxLine } from "react-icons/ri";
import logo from '../assest/logo.ico'
import { useDispatch } from 'react-redux';
import { showLoader } from '../redux/loaderSlice';
import { GetUserById } from '../apicalls/users';
import { message } from 'antd';
import { Link } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();



    const checkIsAdmin = async () => {
        try {
            dispatch(showLoader(true));
            const response = await GetUserById(user.id)
            dispatch(showLoader(false));
            if (response.success && response.data.role === "admin") {
                setIsAdmin(true)
                console.log(isAdmin)
            } else {
                throw new Error(' משתמש לא מורשה')
            }

        } catch (error) {
            dispatch(showLoader(false));
            message.error(error.message)
        }
    }
    useEffect(() => {
        checkIsAdmin();
        // if (!user || user.role !== "admin") {
        //     window.location.href = '/';
        // }
    }, [])


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
                {isAdmin &&
                    <Link to='/admin'>
                        <button>מעבר לדף ניהול משתמשים</button>
                    </Link>
                }
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