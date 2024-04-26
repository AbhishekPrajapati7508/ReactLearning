import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
      console.log("uppercase clicked");
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
      }
    const[text,setText]= useState('Enter your Text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
        </div>
    </div> 
  )
}
