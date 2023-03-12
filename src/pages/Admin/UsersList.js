
import { message, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../apicalls/users'
import { showLoader } from '../../redux/loaderSlice'

const UsersList = () => {
    const [users, setUsers] = useState([])

    const dispatch = useDispatch()
    const getData = async () => {
        try {
            dispatch(showLoader(true))
            const response = await getAllUsers()
            dispatch(showLoader(false))
            if (response.success) {
                setUsers(response.data)
            } else {
                throw new Error(response.message)
            }

        } catch (error) {
            dispatch(showLoader(false))
            message.error(error.message)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const columns = [
        {
            title: "קוד אישי",
            dataIndex: 'id'
        },
        {
            title: "שם משתמש ",
            dataIndex: 'name'
        },

        {
            title: "דואר אלקטרוני",
            dataIndex: 'email'
        },
        {
            title: "תפקיד",
            dataIndex: 'role',
        }
    ]
    return (
        <div>
            <Table columns={columns} dataSource={users} />

        </div>
    )
}

export default UsersList;