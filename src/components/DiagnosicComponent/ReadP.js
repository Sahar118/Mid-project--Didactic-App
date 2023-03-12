import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const DiagnosticHistoryTable = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph')
            .then((getData) => {
                setApiData(getData.data)
            })
    }, [])

    const setData = (id, name, birthDate, grade, school, address, letters, vowels, dottiedWord, unDottiedWord, dottiedText, unDottiedText, unworthyWord) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name);
        localStorage.setItem('birthDate', birthDate);
        localStorage.setItem('grade', grade);
        localStorage.setItem('school', school);
        localStorage.setItem('address', address);
        localStorage.getItem('letters', letters);
        localStorage.getItem('vowels', vowels);
        localStorage.getItem('dottiedWord', dottiedWord);
        localStorage.getItem('unDottiedWord', unDottiedWord);
        localStorage.getItem('dottiedText', dottiedText);
        localStorage.getItem('unDottiedText', unDottiedText);
        localStorage.getItem('unworthyWord', unworthyWord);
    }

    const getData = () => {
        axios.get(`https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph`)
            .then((getData) => {
                setApiData(getData.data)
            })
        console.log('clicked');
    }

    const onDelete = (id) => {
        axios.delete(`https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph/${id}`)
            .then(() => {
                getData()
            })
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>שם נבדק</Table.HeaderCell>
                        <Table.HeaderCell>ת.ז</Table.HeaderCell>
                        <Table.HeaderCell>תאריך לידה</Table.HeaderCell>
                        <Table.HeaderCell>כיתה</Table.HeaderCell>
                        <Table.HeaderCell>בית ספר</Table.HeaderCell>
                        <Table.HeaderCell>כתובת </Table.HeaderCell>
                        <Table.HeaderCell>אפשרויות נוספות</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.newId}</Table.Cell>
                                <Table.Cell>{data.birthDate}</Table.Cell>
                                <Table.Cell>{data.grade}</Table.Cell>
                                <Table.Cell>{data.school}</Table.Cell>
                                <Table.Cell>{data.address}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/concludingParagraph/editDiagnosis'>
                                        <Button color="green"
                                            onClick={() =>
                                                setData(data.id,
                                                    data.name,
                                                    data.birthDate,
                                                    data.grade,
                                                    data.school,
                                                    data.address,
                                                    data.letters,
                                                    data.vowels,
                                                    data.dottiedWord,
                                                    data.unDottiedWord,
                                                    data.dottiedText,
                                                    data.unDottiedText,
                                                    data.unworthyWord)}> עדכן</Button>
                                    </Link>
                                    <Button color="red" onClick={() => onDelete(data.id)}>מחק</Button>
                                    <Button color="gray" >הדפס</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
export default DiagnosticHistoryTable;
