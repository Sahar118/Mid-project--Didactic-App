import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Create = () => {
    let navigate = useNavigate();
    const [newId, setNewId] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [address, setAddress] = useState('');
    const [letters, setLetters] = useState('');
    const [vowels, setVowels] = useState('');
    const [dottiedWord, setDottiedWord] = useState('');
    const [unDottiedWord, setUnDottiedWord] = useState('');
    const [dottiedText, setDottiedText] = useState('');
    const [unDottiedText, setUnDottiedText] = useState('');
    const [unworthyWord, setUnworthyWord] = useState('');

    const sendDataToAPI = () => {
        axios.post('https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph', {
            newId,
            name,
            birthDate,
            grade,
            school,
            address,
            letters,
            vowels,
            dottiedWord,
            unDottiedWord,
            dottiedText,
            unDottiedText,
            unworthyWord
        }).then(() => {
            navigate('/diagnosis-archive')
        })
    }

    return (
        <div className='add-new-product'>
            <Form onSubmit={(e) => e.preventDefault()}>
                <div className='personal-info-div'>
                    <h1> פרטים אישיים </h1>
                    <Form.Field>
                        <label><span> שם הנבדק/ת </span></label>
                        <input
                            placeholder='שם פרטי ומשפחה'
                            name='name'
                            required="שדה חובה"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label><span> ת.ז</span></label>
                        <input
                            placeholder='ת.ז'
                            name="Id"
                            type='number'
                            required="שדה חובה"
                            onChange={(e) => setNewId(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label><span>תאריך לידה : </span></label>
                        <input
                            placeholder='תאריך לידה:'
                            name='birthDate'
                            type='date'
                            required="שדה חובה"
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label><span> כיתה:</span></label>
                        <input
                            placeholder='כיתה'
                            name='grade'
                            required="שדה חובה"
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label><span> בית ספר:</span></label>
                        <input
                            placeholder="בית ספר"
                            name='school'
                            required="שדה חובה"
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label><span> כתובת:</span></label>
                        <input
                            placeholder='כתובת'
                            name='address'
                            required="שדה חובה"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Field>
                </div>

                <h1>מסקנה כללית לגבי תפקוד התלמיד ביחס למצופה מבני גילו:</h1>
                <Form.Field>
                    <label><span> קריאת אותיות</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" קריאת אותיות "
                        name='letters'
                        onChange={(e) => setLetters(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> קריאת תנועות</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" קריאת תנועות "
                        name='vowels'
                        onChange={(e) => setVowels(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> מילים מנוקדות</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" מילים מנוקדות "
                        name='dottiedWord'
                        onChange={(e) => setDottiedWord(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> מילים לא מנוקדות</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" מילים לא מנוקדות "
                        name='unDottiedWord'
                        onChange={(e) => setUnDottiedWord(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> טקסט מנוקד</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" טקסט מנוקד"
                        name='dottiedText'
                        onChange={(e) => setDottiedText(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> טקסט לא מנוקד</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder="טקסט לא מנוקד  "
                        name='unDottiedText'
                        onChange={(e) => setUnDottiedText(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> מילות תפל</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" מילות תפל"
                        name='letters'
                        type='text'
                        onChange={(e) => setUnworthyWord(e.target.value)}
                    />
                </Form.Field>


                <Button color='brown' type='submit' onClick={sendDataToAPI}>שמור</Button>

            </Form>
        </div>
    )
}

export default Create;


