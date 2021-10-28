import React,{useState} from 'react';


function TextForm(props){

const[text,setText] =useState("");

const changedtext=(event)=>{
   setText(event.target.value);
};

const changetoup=()=>{
    let newtext =text.toUpperCase();
    setText(newtext);
 };

 const changetolp=()=>{
    let newtext =text.toLowerCase();
    setText(newtext);
 };
 const cleartext=()=>{
   let newtext =" ";
   setText(newtext);
};

// dark mode 



    return (
     
       <div className="container" >
         <div className={`mb-3 text-${props.mod==='light'?'dark':'light'}`}>
         <h1 >ENTER YOUR TEXT</h1>
            <textarea className="form-control"  value={text} onChange={changedtext} style={{backgroundColor:props.mod==='light'?'white':'grey',color:props.mod==='light'?'black':'white'}}  id="exampleFormControlTextarea1" rows="3"></textarea><br/>
            <button className={`btn btn-primary mx-2 text-${props.mod==='light'?'light':'dark'}`} style={{backgroundColor:props.mod==='light'?'blue':'white'}}  onClick={changetoup}>convert to uppercase</button> 
        
            <button className={`btn btn-primary mx-2 text-${props.mod==='light'?'light':'dark'}`} style={{backgroundColor:props.mod==='light'?'blue':'white'}}    onClick={changetolp}>convert to lowercase</button>
         
            
        </div>
        </div>
       
        
    )
}
export default TextForm;