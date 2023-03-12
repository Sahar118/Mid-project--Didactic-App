import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const DiagnosticHis = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getDiagnosisHistory = async () => {
            try {
                const response = await axios.get(
                    "https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph"
                );
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        getDiagnosisHistory()
    }, []);

    return (
        <div className='products-container'>
            {data.map((post) => (
                <div className='product-div'>
                    <h2 key={post.newId}> <span> שם המאובחן:</span>  {post.name} </h2>
                    <p><span>ת.ז </span> {post.newId} </p>
                    <p><span>כתובת: </span>  {post.address} </p>
                    <div className='edit-container'>
                    </div>
                    <Link to='/concludingParagraph/editDiagnosis'>
                        <Button>עדכן </Button>
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default DiagnosticHis;