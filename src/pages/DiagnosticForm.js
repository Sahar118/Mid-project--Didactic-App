import { async } from '@firebase/util'
import { Form, Row, Col, message } from 'antd'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { AddDiagnosic, checkIfDigAccountIsApplied, GetDiagnosicById } from '../apicalls/Diagnosic'
import { showLoader } from '../redux/loaderSlice'

const DiagnosticForm = () => {
    const [days, setDays] = useState([]);
    const [alreadyApplied, setAlreadyApplied] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        try {
            dispatch(showLoader(true))
            const payload = {
                ...values,
                days,
                userId: JSON.parse(localStorage.getItem("user")).id,
                status: 'pending',
                role: 'diagnosic'
            }
            const response = await AddDiagnosic(payload);
            if (response.success) {
                message.success(response.message)
                navigate('/profile')
            } else {
                message.error(response.message)
            }
            dispatch(showLoader(false))
        } catch (error) {
            dispatch(showLoader(false))
            message.error(error.message)
        }
    }

    const checkIfAlreadyApplied = async (values) => {
        try {
            dispatch(showLoader(true))
            const response = await checkIfDigAccountIsApplied(JSON.parse(localStorage.getItem("user")).id)
            if (response.success) {
                setAlreadyApplied(true)
            }
            dispatch(showLoader(false))

        } catch (error) {
            dispatch(showLoader(false))
            message.error(error.message)
        }
    }
    useEffect(() => {
        checkIfAlreadyApplied()
    }, []);

    return (
        <div className='bg-white p-1'>
            {!alreadyApplied && (<>
                <h2 className='my-1'>
                    הגשת מועמדות לקבלת חשבון מאבחן דידקטי
                </h2>
                <hr />

                <Form
                    layout='vertical' className='my-1'
                    onFinish={onFinish}
                >
                    <Row
                        gutter={[16, 16]}
                    >

                        {/* Personal Information */}
                        <Col span={24}>
                            <hr />
                            <h2> <b> :פרטים אישיים</b></h2>
                            <hr />
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label='שם פרטי'
                                name='firstName'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='text' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label='שם משפחה'
                                name='lastName'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='text' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="דואר אלקטרוני"
                                name='email'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='email' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="מספר טלפון"
                                name='phone'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='number' />
                            </Form.Item>
                        </Col>

                        {/* <Col span={8}>
                        <Form.Item
                            label="אתר אינטרנט"
                            name='website'
                            rules={[
                                {
                                    required: true,
                                    message: "שדה נדרש"
                                }
                            ]}
                        >
                            <input type='text' />
                        </Form.Item>
                    </Col> */}

                        <Col span={24}>
                            <Form.Item
                                label="כתובת"
                                name='address'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <textarea type='text' className='w-full' />
                            </Form.Item>
                        </Col>

                        {/* Professional Information */}
                        <Col span={24}>
                            <hr />
                            <h2> <b> :פרטים אודות השכלה</b></h2>
                            <hr />
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="שנות ניסיון "
                                name='experience'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='number' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="הכשרה"
                                name='qualification'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='text' />
                            </Form.Item>
                        </Col>
                        <hr />


                        {/* work hours */}
                        <Col span={24}>
                            <hr />
                            <h2> <b> :שעות עבודה</b></h2>
                            <hr />
                        </Col>


                        <Col span={8}>
                            <Form.Item
                                label="שעת התחלה"
                                name='startTime'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='time' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="שעת סיום "
                                name='endTime'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='time' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="מחיר אבחון דידקטי פרטי"
                                name='fee'
                                rules={[
                                    {
                                        required: true,
                                        message: "שדה נדרש"
                                    }
                                ]}
                            >
                                <input type='number' />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <div className='flex gap-2'>
                                {['ראשון', "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"].map((day, index) => (
                                    <div className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            key={index}
                                            value={day}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setDays([...days, e.target.value])
                                                } else {
                                                    setDays(days.filter((item) => item !== e.target.value))
                                                }
                                            }}
                                        />
                                        <label>{day}</label>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>

                    <div className="flex justify-end gap-2">
                        <button type='submit' className="contained-btn padding"> שמור</button>
                        <button type='button' className="outlined-btn padding"> ביטול</button>
                    </div>
                </Form >
            </>)}
            {alreadyApplied &&
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='text-2xl'>כבר הגשת בקשה לגישה לאיזור המאבחנים הדידקטיים
                        נא להמתן עד שהמנהל יאשר את בקשתך
                    </h3>
                </div>
            }
        </div >
    )
}

export default DiagnosticForm