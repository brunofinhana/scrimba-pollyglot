import React, {useState} from 'react'
import OpenAI from "openai"

export default function Main() {
    const languages = ["French 🍷", "Spanish 🐂", "Japanese 🍣"]

    // Managing language choice
    const [selectedOption, setSelectedOption] = useState('french');
    const handleOptionChange = (event) => { setSelectedOption(event.target.value); }

    // Managing "Translate" button
    const [clickedTranslate, setClickedTranslate] = useState(false)
    const [inputText, setInputText] = useState("")
    const [outputText, setOutputText] = useState("")

    // Translation button functionality
    async function translate() {
        if(inputText === !"") {
            // Switching fields labesl and capturing current input as output
            setClickedTranslate(prev => !prev)
        
            // Initialize OpenAI client
            const openai = new OpenAI({
                dangerouslyAllowBrowser: true
            })
        
            const input = [
                {
                    role: "system",
                    content: "You are a professional translator."
                },
                {
                    role: "user",
                    content: `Translate the following text to ${selectedOption}: ${inputText}`
                }
            ]
        
            try {
                const response = openai.chat.completions.create({
                    model: "gpt-4",
                    messages: input,
                    temperature: 1.1
                })
                setOutputText(response.choices[0].messages.content)
            } catch (error) {
                console.error("Translate error: ", error)
                setOutputText("Error translating text")
            }
        } else {
            alert("Please, fill the field :)")
        }
    }

    console.log("TESTING CONSOLE")

    return (
        <div className="main">

            {/* Text input */}
            <p>{clickedTranslate ? "Text to translate 👇" : "Original text 👇"}</p>
            <textarea 
                name="contentInput" 
                className="content-display"
                id="contentInput" 
                placeholder="Hello! How are you?"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            ></textarea>

            {/* Output - Begin */}
            <p>{clickedTranslate ? "Select language 👇" : "Your translation 👇"}</p>

            {/* Language selection */}
            <div className="language-selection-wrapper">
                <label>
                    <input
                        type="radio"
                        className="language-selection-options"
                        name="language01"
                        value="french"
                        checked={selectedOption === 'french'}
                        onChange={handleOptionChange}
                    />
                        {languages[0]}
                </label>
                <label>
                    <input
                        type="radio"
                        className="language-selection-options"
                        name="language02"
                        value="spanish"
                        checked={selectedOption === 'spanish'}
                        onChange={handleOptionChange}
                    />
                        {languages[1]}
                </label>
                <label>
                    <input
                        type="radio"
                        className="language-selection-options"
                        name="language02"
                        value="japanese"
                        checked={selectedOption === 'japanese'}
                        onChange={handleOptionChange}
                    />
                        {languages[2]}
                </label>
            </div>

            {/* Translation output */}
            <textarea 
                name="contentOutput"
                className="content-display"
                style={clickedTranslate ? {display: 'none'} : {display: 'block'}}
                id="contentOutput"
                disabled
                value={outputText}
                readOnly
            />

            <button 
                className="btn-main" 
                id="btnMain" 
                onClick={translate}
            >
                {clickedTranslate ? "Translate" : "Start Over"}
            </button>
            
        </div>
    )
}