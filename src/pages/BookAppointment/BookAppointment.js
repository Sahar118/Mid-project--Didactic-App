import { async } from '@firebase/util';
import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { showLoader } from '../../redux/loaderSlice';
import { GetDiagnosicById } from '../../apicalls/Diagnosic'

const BookAppointment = () => {
    const [date, setDate] = useState("")
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

    const getSlotsData = () => {
        return
        <>

        </>

    }

    useEffect(() => {
        getData()
    }, [id])

    return (
        diagnostic && (
            <div className='bg-white p-2 my-1'>
                <h1>
                    <b>
                        {diagnostic.firstName}{diagnostic.lastName}
                    </b>       </h1>
                <hr />

                <div className="w-400 flex flex-col gap-1 my-1">

                    <div className="flex justify-between w-full book-info">
                        <h3><b>ניסיון תעסוקתי:</b></h3>
                        <h3> {diagnostic.experience} שנים</h3>
                    </div>

                    <div className="flex justify-between w-full book-info">
                        <h3><b> דואר אלקטרוני:</b></h3>
                        <h3> {diagnostic.email}</h3>
                    </div>

                    <div className="flex justify-between w-full book-info">
                        <h3><b> טלפון</b></h3>
                        <h3> {diagnostic.phone}</h3>
                    </div>

                    <div className="flex justify-between w-full book-info">
                        <h3><b> כתובת</b></h3>
                        <h3> {diagnostic.address}</h3>
                    </div>

                    <div className="flex justify-between w-full book-info">
                        <h3><b> מחיר עבור אבחון </b></h3>
                        <h3> {diagnostic.fee} ש"ח</h3>
                    </div>
                </div>
                <hr />

                {/* slot */}
                <div className="flex flex-col gap-1 my-2">
                    <div className="flex gap-2 w-400 items-end">
                        <div>
                            <span>נא לבחור תאריך  </span>
                            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <button className='outlined-btn'>חפש </button>
                    </div>
                    {getSlotsData()}

                </div>
            </div>

        )

    )
}

export default BookAppointment