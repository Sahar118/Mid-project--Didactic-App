import { async } from '@firebase/util'
import { message } from 'antd'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'


const Home = () => {
    const [diagnosics, setDiagnosics] = useState([])
    const dispatch = useDispatch()

    const getData = async () => {
        try {

        } catch (error) {
            message.error(error.message)
            dispatch()

        }

    }

    useEffect(() => {
        getData()
    }, []);

    const navigate = useNavigate()
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <input placeholder='חפש מאבחן דידקטי' className='w-400'></input>
                </div>
                <button
                    className='outlined-btn my-1'
                    onClick={() => navigate('/apply-Diagnostic')}
                >  הגשת מועמדות למאבחן דידקטי</button>
            </div>

        </div>
    )
}

export default Home