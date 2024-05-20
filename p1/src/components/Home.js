import React,{useState} from 'react';
import './Home.css';

export default function Home()
 {
  //set usestate
  const [text,tnext]=useState("Enter your Text Here -By Students");
    
  //UpperCase
    const up=()=>{
    let newText=text.toUpperCase();
    tnext(newText);

    };
//LowerCase
    const lw=()=>{
    let newText=text.toLowerCase();
    tnext(newText);
    };
//Clear Text
    const cltext=()=>{
    let newText="";
    tnext(newText);

    };
//Editable Textarea
    const f1=(event)=>{
        tnext(event.target.value);

    };
  return (
 
    <div>
      <h1>You Can Type Message Here</h1>
      <div className='container'>
      
        <div className='row'>
          <div className='col-md-12'>
            <center>
              <div>
              <textarea rows="12" cols="60" value={text} onChange={f1}></textarea><br></br>
              <input type="button" value="Clear Text" onClick={cltext} id="b1"></input>
              <input type="button" value="Upper Case" onClick={up} id="b1"></input>
              <input type="button" value="Lower Case" onClick={lw} id="b1"></input>
              </div>
              <br></br>
              <br></br>
              <div>
                <h2>Text Summary </h2>
                <p>You Type {text.split(" ").length} words and  {text.length} characters</p>
              </div>
              <div>
                <h2>Preview Text</h2>
                <p>{text}</p>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
   
  )
}
