import { async } from '@firebase/util';
import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { showLoader } from '../../redux/loaderSlice';
import { GetDiagnosicById } from '../../apicalls/Diagnosic'

const BookAppointment = () => {
    const [diagnostic, setDiagnostic] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(showLoader(true));
            const response = await GetDiagnosicById(id)
            if (response.success) {
                setDiagnostic(response.data)
            } else {
                message.error(response.message)
            }
            dispatch(showLoader(false))
        } catch (error) {
            message.error(error.message)
            dispatch(showLoader(false))
        }
    };

    useEffect(() => {
        getData()
    }, [id])

    return (
        diagnostic && (
            <div className='bg-white p-2 my-1'>
                <h1>
                    {diagnostic.firstName}{diagnostic.lastName}
                    <hr />
                    .w-400
                </h1>
            </div>
        )

    )
}

export default BookAppointment