
import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { showLoader } from '../../redux/loaderSlice';
import { GetDiagnosicById } from '../../apicalls/Diagnosic'
import moment from 'moment/moment';


const BookAppointment = () => {
    const [date, setDate] = useState("")
    const [diagnostic, setDiagnostic] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        const day = moment(date).format("dddd");
        if (!diagnostic.days.includes(day)) {
            return (
                <h3> המאבחן אינו פנוי ב {moment(date).format("DD-MM-YYYY")} </h3>
            )
        }
        let startTime = moment(diagnostic.startTime, "HH:mm");
        let endTime = moment(diagnostic.endTime, "HH:mm");
        let slotDuration = 240 /* min*/
        const slots = [];

        while (startTime < endTime) {
            slots.push(startTime.format("HH:mm"));
            startTime.add(slotDuration, "minutes")
        }
        return slots.map((slot) => {
            return (
                <div className='bg-white p-1 cursor-pointer'
                    onClick={() => setSelectedSlot(slot)}
                    style={{
                        border: selectedSlot === slot ? '2px solid green' : '2px solid gray',

                    }}
                >
                    <span>
                        {moment(slot, "HH:mm A").format("HH:mm A")} - {moment(slot, "HH:mm A").add(slotDuration, "minutes").format("HH:mm")}
                    </span>
                </div>
            )
        })
    }

    // const onBookAppointment = async () => {
    //     try {
    //         dispatch(showLoader(true))
    //         const payload = {
    //             diagnosicId: diagnostic.id,
    //             userId: JSON.parse(localStorage.getItem("users")).id,
    //             date,
    //             slot: selectedSlot,
    //             diagnosticName: `${diagnostic.firstName} ${diagnostic.lastName}`,
    //             userName: JSON.parse(localStorage.getItem("user")).name,
    //             bookedOn: moment().format("DD-MM-YYYY HH:mm A")
    //         }
    //         const response = await BookDiagnosicAppointment(payload);
    //         if (response.success) {
    //             message.success(response.message)
    //             navigate("/profile")
    //         } else {
    //             message.error(response.message)
    //         }
    //         dispatch(showLoader(false))
    //     } catch (error) {
    //         message.error(error.message);
    //         dispatch(showLoader(false))
    //     }
    // }
    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [id])
    return (
        diagnostic && (
            <div className='bg-white p-2 my-1'>
                <h1>
                    <b>
                        {diagnostic.firstName}{" "}{diagnostic.lastName}
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

                    <div className="flex justify-between w-full book-info">
                        <h3><b>בחר תאריך:  </b></h3>
                        <h3> {diagnostic.days} </h3>
                    </div>
                </div>
                <hr />

                {/* slot */}
                <div className="flex flex-col gap-1 my-2">
                    <div className="flex gap-2 w-400 items-end">
                        <div>
                            <span>נא לבחור תאריך  </span>
                            <input
                                type='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                min={moment().format("YYYY-MM-DD")}
                            />
                        </div>
                        <button className='outlined-btn'>חפש </button>
                    </div>
                    <div className='flex gap-2'>
                        {date && getSlotsData()}
                    </div>

                    {selectedSlot &&
                        <div className='flex gap-2'>
                            <button
                                className='outlined-btn btn-book justify-center'
                                onClick={() => {
                                    navigate('/');
                                }}
                            > ביטול</button>
                            <button
                                className='contained-btn btn-book justify-center'
                            // onClick={onBookAppointment}
                            > הזמן תור </button>
                        </div>}
                </div>
            </div>

        )

    )
}

export default BookAppointment