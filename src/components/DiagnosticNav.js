import React from 'react'
import { Link } from 'react-router-dom'

const DiagnosticNav = () => {
    return (
        <>
            <div className='layout p-1'>
                <div className="header bg-white p-2 flex justify-between items-center">

                    <Link to='/new-didactic-diagnosis'>
                        <h4> אבחון חדש</h4>
                    </Link>

                    <Link to='/diagnosis-archive'>
                        <h4> היסטורית אבחונים</h4>
                    </Link>

                    <Link to='/calculator-scores'>
                        <h4>מחשבון ציונים</h4>
                    </Link>

                    <Link to='/glossary'>
                        <h4>מילון מושגים</h4>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default DiagnosticNav