import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React,{useState} from 'react';
// import About from './About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode ,setmode] =useState('light');

  const clicktochange =()=>{
   if(mode==='light'){
     setmode('dark');
     document.body.style.backgroundColor='black';
     document.title='TEXTUTILS - Dark Mode';
   }else{
     setmode('light');
     document.body.style.backgroundColor='white';
     document.title='TEXTUTILS - Light Mode';
    }
  };
  return (
  
   
     <>
     <Navbar title ="TEXTUTILS" mode ={mode} change={clicktochange} />
     
    <TextForm mod={mode} />
       </>
   );
}

export default App;
