import React, { useEffect } from 'react'
import { async } from '@firebase/util';
import { Form, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { CreateUser } from '../apicalls/users';
import { useDispatch } from 'react-redux';
import { showLoader } from '../redux/loaderSlice';

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinsh = async (values) => {
        try {
            dispatch(showLoader(true))
            const response = await CreateUser({
                ...values,
                role: 'user',
            });
            dispatch(showLoader(false))

            if (response.success) {
                message.success(response.message)
                navigate('/login')
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            dispatch(showLoader(false))
            message.error(error.message)
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) navigate("/");
    }, [])
    return (
        <div className='flex justify-center items-center h-screen'>
            <Form layout='vertical' className='w-400 bg-white p-2'
                onFinish={onFinsh}
            >
                <strong>
                    <h1 className='title my-1'> הרשמה למשתמש חדש</h1>
                </strong>
                <hr />
                <br />
                <Form.Item
                    label='שם פרטי'
                    name="name"
                >
                    <input type='text' />
                </Form.Item>

                <Form.Item
                    label='איימיל ' name="email"
                >
                    <input type='email'
                    />
                </Form.Item>

                <Form.Item
                    label="סיסמה"
                    name="password"
                >
                    <input type='password' />
                </Form.Item>

                <button className='contained-btn my-1 w-full' type='submit'>הירשם</button>

                <Link to='/login' className='underline'>
                    <strong>  משתמש קיים? </strong>לחץ כאן
                </Link>
            </Form>
        </div>
    )
}

export default Register