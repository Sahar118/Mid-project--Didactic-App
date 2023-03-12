
import { Table } from 'semantic-ui-react';
import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import '../../styles/Table.css'
const ScoreTable = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('ההדפסה הצליחה')
    })
    const [letterRowScore, setLetterRowScore] = useState(null)
    const [letterRegulatoryGrade, setLetterRegulatoryGrade] = useState(null)

    const [vowelRowScore, setVowelRowScore] = useState(null)
    const [vowelRegulatoryGrade, setVowelRegulatoryGrade] = useState(null)

    const [dottedWordsRowScore, setDottedWordsRowScore] = useState(null)
    const [dottedWordsRegulatoryGrade, setDottedWordsRegulatoryGrade] = useState(null)

    const [unDottedWordsRowScore, setUnDottedWordsRowScore] = useState(null)
    const [unDottedWordsRegulatoryGrade, setUnDottedWordsRegulatoryGrade] = useState(null)

    const [dottedTextRowScore, setDottedTextRowScore] = useState(null)
    const [dottedTextRegulatoryGrade, setDottedTextRegulatoryGrade] = useState(null)

    const [unDottedTextRowScore, setUnDottedTextRowScore] = useState(null)
    const [unDottedTextRegulatoryGrade, setUnDottedTextRegulatoryGrade] = useState(null)

    const [unworthyWordsRowScore, setWorthyWordsRowScore] = useState(null)
    const [unworthyWordsRegulatoryGrade, setUnworthyWordsRegulatoryGrade] = useState(null)



    const letterHandleSecondsChange = (event) => {
        const value = event.target.value;
        setLetterRowScore(value);
        setLetterRegulatoryGrade(Math.floor((value / 29) * 100));
    }

    const vowelHandleSecondsChange = (event) => {
        const value = event.target.value;
        setVowelRowScore(value);
        setVowelRegulatoryGrade(((value / 10) * 100));
    }

    const dottedWordsHandleSecondsChange = (event) => {
        const value = event.target.value;
        setDottedWordsRowScore(value);
        setDottedWordsRegulatoryGrade(((value - 21.8) / 9.7));
    }

    const unDottedWordsHandleSecondsChange = (event) => {
        const value = event.target.value;
        setUnDottedWordsRowScore(value);
        setUnDottedWordsRegulatoryGrade(((value - 21.8) / 9.7));
    }

    const dottedTextHandleSecondsChange = (event) => {
        const value = event.target.value;
        setDottedTextRowScore(value);
        setDottedTextRegulatoryGrade(((value - 66) / 19.6));
    }

    const unDottedTextHandleSecondsChange = (event) => {
        const value = event.target.value;
        setUnDottedTextRowScore(value);
        setUnDottedTextRegulatoryGrade(((value - 56) / 19.6));
    }

    const unworthyWordsHandleSecondsChange = (event) => {
        const value = event.target.value;
        setWorthyWordsRowScore(value);
        setUnworthyWordsRegulatoryGrade(((value / 24) * 100));
    }



    return (
        <section className='score-table-section'>

            <div ref={componentRef} style={{ width: '100%', heigth: window.innerHeight }} className='score-table-container' >

                <Table style={{ width: '50%' }}>

                    <Table.Header>
                        <Table.Row>

                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell>שם המטלה </Table.HeaderCell>
                            <Table.HeaderCell>ציון גלם</Table.HeaderCell>
                            <Table.HeaderCell> ציון תקן</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>

                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell> קריאת אותיות </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={letterRowScore}
                                    onChange={letterHandleSecondsChange} /> </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={letterRegulatoryGrade}
                                    onChange={letterHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell> קריאת תנועות </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={vowelRowScore}
                                    onChange={vowelHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={vowelRegulatoryGrade}
                                    onChange={vowelHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell> מילים מנוקדות </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={dottedWordsRowScore}
                                    onChange={dottedWordsHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={dottedWordsRegulatoryGrade}
                                    onChange={dottedWordsHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>


                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell> מילים לא מנוקדות </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={unDottedWordsRowScore}
                                    onChange={unDottedWordsHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={unDottedWordsRegulatoryGrade}
                                    onChange={unDottedWordsHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>


                        <Table.Row>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>טקסט מנוקד</Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={dottedTextRowScore}
                                    onChange={dottedTextHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={dottedTextRegulatoryGrade}
                                    onChange={dottedTextHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>



                        <Table.Row>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>טקסט לא מנוקד  </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={unDottedTextRowScore}
                                    onChange={unDottedTextHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={unDottedTextRegulatoryGrade}
                                    onChange={unDottedTextHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>


                        <Table.Row>
                            <Table.Cell>7</Table.Cell>
                            <Table.Cell> מילות תפל </Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון גלם"
                                    value={unworthyWordsRowScore}
                                    onChange={unworthyWordsHandleSecondsChange} /></Table.Cell>
                            <Table.Cell>
                                <input
                                    type="number"
                                    placeholder="ציון תקן"
                                    value={unworthyWordsRegulatoryGrade}
                                    onChange={unworthyWordsHandleSecondsChange}

                                />
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
                <button variant="success" onClick={handlePrint}>הדפס  </button>
            </div>
        </section>


    )
}

export default ScoreTable


