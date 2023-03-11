import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
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