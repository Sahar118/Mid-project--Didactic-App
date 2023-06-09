import React, { useEffect } from 'react'
import { Form, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../apicalls/users';
import { useDispatch } from 'react-redux';
import { showLoader } from '../redux/loaderSlice';



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinsh = async (values) => {
        try {
            dispatch(showLoader(true))
            const response = await LoginUser(values);
            dispatch(showLoader(false))

            if (response.success) {
                message.success(response.message)
                localStorage.setItem("user", JSON.stringify({
                    ...response.data,
                    password: '',
                }))
                navigate('/')
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
        //eslint-disable-next-line
    }, [])

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <Form layout='vertical' className='w-400 bg-white p-2'
                onFinish={onFinsh}
            >
                <strong>
                    <h1 className='title my-1'> התחבר</h1>
                </strong>
                <hr />
                <br />
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

                <button className='contained-btn my-1 bg-primary w-full' type='submit'>התחבר</button>

                <Link to='/register' className='underline'>
                    <strong>  משתמש חדש? </strong>לחץ כאן
                </Link>
            </Form>
        </div>
    )
}

export default Login