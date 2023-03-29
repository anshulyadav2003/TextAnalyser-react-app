import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (e)=>{
    // console.log(e)
    setText(e.target.value)
  }

  const handleClickUpp = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase","success");
  }
  const handleClickLow = ()=>{
    setText(text.toLowerCase())
    props.showAlert("Converted to lowercase","success");
  }
  const speak = ()=>{
    let mssg = new SpeechSynthesisUtterance();
    mssg.text = text;
    window.speechSynthesis.speak(mssg);
  }
  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
      <div className='contanier'>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <label htmlFor="myTextBox" className="form-label"></label>
              <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} placeholder="start typing your text . . ." ></textarea>
          </div>
          <button className='btn btn-primary' onClick={handleClickUpp}>Convert to uppercase</button>
          <button className='btn btn-primary mx-4' onClick={handleClickLow}>Convert to lowercase</button>
          <button className='btn btn-primary mx-4' onClick={speak}>Speak</button>
      </div>
      <div className='container my-4'>
        <h3>Your text summary</h3>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} minutes of time to read </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
} 


