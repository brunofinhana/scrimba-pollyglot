import React, {useState} from 'react'

export default function Main() {
    let languages = ["French 🍷", "Spanish 🐂", "Japanese 🍣"]
    const [selectedOption, setSelectedOption] = useState('french');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="main">
            <p>Text to translate 👇</p>
            <textarea 
                name="text-input" 
                id="text-input" 
                className="text-input"
                placeholder="Hello! How are you?"
            ></textarea>
            <p>Select language 👇</p>
            <div>
                <label>
                    <input 
                        type="radio"
                        name="language01"
                        value="french"
                        checked={selectedOption === 'french'}
                        onChange={handleOptionChange}
                    />
                        {languages[0]}
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        name="language02"
                        value="spanish"
                        checked={selectedOption === 'spanish'}
                        onChange={handleOptionChange}
                    />
                        {languages[1]}
                </label>
                <p>Selected: {selectedOption}</p>
            </div>
            
        </div>
    )
}