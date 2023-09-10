import React, {useState} from "react";


export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleOnChange = (e)=>{
        console.log('onChange')
        setText(e.target.value);
    }

    const [text, setText] = useState('');
    return (
    <>
    <div className="container"> 
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text} onChange={handleOnChange} placeholder="Enter your text here"
          style={{color : props.mode === 'dark' ? 'white' : 'grey'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
    </div>
    <div className="container my-5">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length.toFixed(4)} minutes to read the words</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
