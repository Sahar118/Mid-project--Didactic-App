import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GlossaryComponent = () => {
    const [term, setTerm] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        const loadTerms = async () => {
            const response = await axios.get('https://640646ba77c1a905a0d82f41.mockapi.io/glossaryTerms/search');
            setTerm(response.data)
        }
        loadTerms()
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = term.filter((search) => {
                const regex = new RegExp(`${text}`, "gi");
                return search.name.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }
    return (
        <div>
            <label> חפש:</label>
            <input type='text'
                value={text}
                onChange={e => onChangeHandler(e.target.value)}
            // onBlur={() => {
            //     setTimeout(() => {
            //         setSuggestions([])
            //     }, 100)
            // }}
            />
            <div>{text}</div>

            {suggestions && suggestions.map((suggestion, i) => {
                return (
                    <div key={i} className='suggestion'
                    // onClick={() => onSuggestHandler(suggestion.name)}
                    >
                        <h1 > {suggestion.name}</h1>
                        <p> {suggestion.description}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default GlossaryComponent