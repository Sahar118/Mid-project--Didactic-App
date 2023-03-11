import { Form, Row, Col, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddDiagnosic } from '../apicalls/Diagnosic'
import { showLoader } from '../redux/loaderSlice'

const DiagnosticForm = () => {
    const [days, setDays] = useState([])
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try {
            dispatch(showLoader(true))
            const payload = {
                ...values,
                days
            }

            const response = await AddDiagnosic(payload);
            if (response.success) {
                message.success(response.message)
            } else {
                message.error(response.message)
            }
            dispatch(showLoader(false))
        } catch (error) {
            dispatch(showLoader(false))
            message.error(error.message)
        }
    }
    return (
        <div className='bg-white p-1'>
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
                            label="ימי עבודה"
                            name='workDays'
                            rules={[
                                {
                                    required: true,
                                    message: "שדה נדרש"
                                }
                            ]}
                        >
                            <input type='date' />
                        </Form.Item>
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
                    <button type='button' className="outlined-btn padding"> ביטול</button>
                    <button type='submit' className="contained-btn padding"> שמור</button>
                </div>
            </Form >
        </div >
    )
}

export default DiagnosticForm