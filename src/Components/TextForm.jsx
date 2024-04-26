import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
    //   console.log("uppercase clicked");
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handleLoClick=()=>{
          let newText=text.toLowerCase();
          setText(newText);
        }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
      }
    const[text,setText]= useState('Enter your Text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
        </div>
    </div> 
    <div className="container">
        <h1>your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length}character</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}
