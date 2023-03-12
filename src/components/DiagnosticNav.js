import React from 'react'
import { Link } from 'react-router-dom'

const DiagnosticNav = () => {
    return (
        <>
            <div className='layout p-1'>
                <div className="header bg-white p-2 flex justify-between items-center">

                    <Link to='/new-didactic-diagnosis'>
                        <h2> אבחון חדש</h2>
                    </Link>

                    <Link to='/diagnosis-archive'>
                        <h2> היסטורית אבחונים</h2>
                    </Link>

                    <Link to='/calculator-scores'>
                        <h2>מחשבון ציונים</h2>
                    </Link>

                    <Link to='/glossary'>
                        <h2>מילון מושגים</h2>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default DiagnosticNav