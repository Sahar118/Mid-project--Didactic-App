import { Col, message, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAllDiagnosic } from '../apicalls/Diagnosic'
import { showLoader } from '../redux/loaderSlice'


const Home = () => {
    const [diagnosics, setDiagnosics] = useState([])
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            dispatch(showLoader(true))
            const response = await getAllDiagnosic();
            if (response.success) {
                setDiagnosics(response.data)
            } else {
                message.error(response.message)
            }
            dispatch(showLoader(false))
        } catch (error) {
            message.error(error.message)
            dispatch(showLoader(false))

        }

    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, []);

    const navigate = useNavigate()
    return (
        <div>

            <div className="flex justify-between">
                <div>
                    <input placeholder='חפש מאבחן דידקטי' className='w-400 my-1'></input>
                </div>
                <button
                    className='outlined-btn my-1'
                    onClick={() => navigate('/apply-Diagnostic')}
                >  הגשת מועמדות למאבחן דידקטי</button>
            </div>
            <Row
                gutter={[16, 16]}
                className='my-1'
            >
                {diagnosics.map((diagnosics) => {
                    return <Col span={8}>
                        <div className='bg-white p-1 flex flex-col gap-1 cursor-pointer'
                            onClick={() => navigate(`/book-appointment/${diagnosics.id}`)}
                        >
                            <div className='flex justify-between w-full'>
                                <h2>{diagnosics.firstName}{diagnosics.lastName}</h2>
                            </div>
                            <hr />
                            <div className='flex justify-between w-full'>
                                <h4>
                                    <b>ניסיון תעסוקתי: </b>
                                </h4>
                                <h4>{diagnosics.experience} שנים</h4>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h4>
                                    <b>דואר אלקטרוני : </b>
                                </h4>
                                <h4>{diagnosics.email}</h4>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h4>
                                    <b>טלפון:</b>
                                </h4>
                                <h4>{diagnosics.phone}</h4>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Home