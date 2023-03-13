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
import DiagnosticNav from './DiagnosticNav';


const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDiagnosic, setIsDiagnosic] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();



    const checkTypeOfUser = async () => {
        try {
            dispatch(showLoader(true));
            const response = await GetUserById(user.id)
            dispatch(showLoader(false));
            if (response.success && response.data.role === "admin") {
                setIsAdmin(true)
            }
            if (response.success && response.data.role === "diagnosic") {
                setIsDiagnosic(true)
            }

        } catch (error) {
            dispatch(showLoader(false));
            message.error(error.message)
        }
    }
    useEffect(() => {
        checkTypeOfUser();
        //eslint-disable-next-line
    }, [])


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            navigate('/login')
        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='layout p-1'>
                <div className="header bg-white p-2 flex justify-between items-center">

                    <h3
                        className='cursor-pointer logo-p'
                        onClick={() => navigate('/')}>
                        <img src={logo} className='logo' alt='logo' />
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
                            <button className='cursor-pointer btn'>מעבר לדף ניהול משתמשים</button>
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
                {isDiagnosic || isAdmin ? <DiagnosticNav /> : null
                }

                {!isDiagnosic &&
                    <div className='layout p-1 bg-white para'>
                        <h2> ברוכים הבאים :  </h2>
                        <h3> להלן הסבר על איך לתפעל את האתר:</h3>
                        <p>
                            <ul>
                                <li> קהל היעד הורים ומאבחנים דידקטיים </li>
                                <li> אם הינך הורה, ניתן לחפש מאבחן דידקטי ללחוץ על השם שלו על מנת לצפות בכרטיס הביקור שלו </li>
                                <li> אם הינך מאבחן דידקטי, ומעוניין בגישה לאיזור של המאבחנים הדידקטיים, <br></br>
                                    <span> המאפשר לך:</span>
                                    <li>
                                        כתיבת דוח אבחון חדש
                                    </li>
                                    <li> צפיה בהסטורית האבחונים שנעשו</li>
                                    <li>  חישוב ציוני תקן אוטומטי בעת הזנת ציוני גלם </li>
                                    <li>  מילון מושגים  </li>


                                </li>

                            </ul>

                        </p>

                    </div>
                }
                <div className="content my-1">{children} </div>
            </div>
        </>

    )
}

export default ProtectedRoute