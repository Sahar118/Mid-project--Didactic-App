import { async } from '@firebase/util'
import { message, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllDiagnosic, UpdateDiacnosic } from '../../apicalls/Diagnosic'
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



    const changeStatus = async (payload) => {
        try {
            dispatch(showLoader(true));
            const response = await UpdateDiacnosic(payload);
            dispatch(showLoader(false));
            if (response.success) {
                message.success(response.message);
                getData();
            } else {
                throw new Error(response.message)
            }
        } catch (error) {

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
        {
            title: "פעולות",
            dataIndex: 'actions',
            render: (text, record) => {
                if (record.status === 'pending') {
                    return (
                        < div className='flex gap-1' >
                            <span className='underline cursor-pointer'
                                onClick={() => changeStatus({
                                    ...record,
                                    status: "rejected",
                                })}

                            > לדחות</span>

                            <span className='underline cursor-pointer'
                                onClick={() => changeStatus({
                                    ...record,
                                    status: "approved",
                                })}
                            >לאשר </span>
                        </div >
                    );
                }
                if (record.status === 'approved') {
                    return (
                        < div className='flex gap-1' >
                            <span className='underline cursor-pointer'
                                onClick={() => changeStatus({
                                    ...record,
                                    status: "blocked",
                                })}
                            > לחסום</span>
                        </div >
                    )
                }

                if (record.status === 'blocked') {
                    return (
                        < div className='flex gap-1' >
                            <span className='underline cursor-pointer'

                                onClick={() => changeStatus({
                                    ...record,
                                    status: "unblocked",
                                })}> בטל חסימה</span>
                        </div >
                    )
                }

            }
        }


    ]
    return (
        <div>
            <Table columns={columns} dataSource={diagnosic} />

        </div>
    )
}

export default DiagnosticList