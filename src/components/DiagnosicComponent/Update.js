
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Update() {
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
            navigate.push('/diagnosis-archive')
        })
    }
    useEffect(() => {
        setNewId(localStorage.getItem('newId'))
        setName(localStorage.getItem('name'))
        setBirthDate(localStorage.getItem('birthDate'));
        setGrade(localStorage.getItem('grade'));
        setSchool(localStorage.getItem('school'));
        setAddress(localStorage.getItem('address'))
        setLetters(localStorage.getItem('letters'))
        setVowels(localStorage.getItem('vowels'));
        setDottiedWord(localStorage.getItem('dottiedWord'));
        setUnDottiedWord(localStorage.getItem('unDottiedWord'));
        setDottiedText(localStorage.getItem('dottiedText'));
        setUnDottiedText(localStorage.getItem('unDottiedText'));
        setUnworthyWord(localStorage.getItem('unworthyWord'));

    }, [])

    return (
        <div>
            <Form>
                <h1> פרטים אישיים </h1>
                <Form.Field>
                    <label><span> שם הנבדק/ת </span></label>
                    <input
                        placeholder='שם פרטי ומשפחה'
                        value={name}
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
                        value={newId}
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
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> כיתה:</span></label>
                    <input
                        placeholder='כיתה'
                        name='grade'
                        value={grade}
                        required="שדה חובה"
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> בית ספר:</span></label>
                    <input
                        placeholder="בית ספר"
                        name='school'
                        value={school}
                        required="שדה חובה"
                        onChange={(e) => setSchool(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> כתובת:</span></label>
                    <input
                        placeholder='כתובת'
                        name='address'
                        value={address}
                        required="שדה חובה"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Field>


                <h1> סיכום פסקאות הקריאה</h1>
                <Form.Field>
                    <label><span> קריאת אותיות</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        value={letters}
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
                        value={vowels}
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
                        value={dottiedWord}

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
                        value={unDottiedWord}

                        onChange={(e) => setUnDottiedWord(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> טקסט מנוקד</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        value={dottiedText}

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
                        value={unDottiedText}

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
                        value={unworthyWord}

                        onChange={(e) => setLetters(e.target.value)}
                    />
                </Form.Field>

                <Link to='/diagnosis-archive'>
                    <Button color='brown' type='submit' onClick={sendDataToAPI}>שמור</Button>
                </Link>
            </Form>


        </div>
    )
}