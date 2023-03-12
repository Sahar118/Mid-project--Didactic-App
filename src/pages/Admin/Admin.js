import { async } from '@firebase/util'
import { message, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetUserById } from '../../apicalls/users'
import { showLoader } from '../../redux/loaderSlice'
import DiagnosticList from './DiagnosticList'
import UsersList from './UsersList'

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();


    const checkIsAdmin = async () => {
        try {
            dispatch(showLoader(true));
            const response = await GetUserById(user.id)
            dispatch(showLoader(false));
            if (response.success && response.data.role === "admin") {
                setIsAdmin(true)
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
    return (
        isAdmin && <div className='bg-white p-1'>
            <Tabs>
                <Tabs.TabPane tab="משתמשים" key='1'>
                    <UsersList />
                </Tabs.TabPane>

                <Tabs.TabPane tab="מאבחנים דידקטיים" key='2'>
                    <DiagnosticList />
                </Tabs.TabPane>

            </Tabs>
        </div>
    )
}

export default Admin