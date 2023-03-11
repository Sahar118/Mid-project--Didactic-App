import { message, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllDiagnosic } from '../../apicalls/Diagnosic'
import { showLoader } from '../../redux/loaderSlice'

const DiagnosticList = () => {
    const [diagnosic, setDiagnosic] = useState([])

    const dispatch = useDispatch()
    const getData = async () => {
        try {
            dispatch(showLoader(true))
            const response = await getAllDiagnosic()
            dispatch(showLoader(false))
            if (response.success) {
                setDiagnosic(response.data)
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
            title: "שם פרטי",
            dataIndex: 'firstName'
        },
        {
            title: "שם משפחה",
            dataIndex: 'lastName'
        },
        {
            title: "דואר אלקטרוני",
            dataIndex: 'email'
        },
        {
            title: "מספר טלפון",
            dataIndex: 'phone'
        },

        {
            title: "סטטוס",
            dataIndex: 'status'
        },

    ]
    return (
        <div>
            <Table columns={columns} dataSource={diagnosic} />

        </div>
    )
}

export default DiagnosticList