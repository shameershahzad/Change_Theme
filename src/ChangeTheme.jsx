import React from "react";
import { useState,useEffect } from 'react'
import './ChangeTheme.css'


function ChangeTheme({button1,button2,button3,button4,button5,button6,button7,button8}) {


const redBtn = () => {setBg('red')}
const yellowBtn = () => {setBg('yellow')}
const greenBtn = () => {setBg('green')}
const blueBtn = () => {setBg('blue')}
const blackBtn = () => {setBg('black')}
const pinkBtn = () => {setBg('pink')}
const orangeBtn = () => {setBg('orange')}
const grayBtn = () => {setBg('gray')}
const [bg,setBg] = useState("white")

useEffect(() => {
  const bodyT = document.getElementById('bdyTag').style;
  bodyT.backgroundColor = bg;
},[bg])

  return (
    <>
    <div id = "navbarDiv" >
      <button onClick = {redBtn} 
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"red"}} >
        {button1} </button>
      <button onClick = {yellowBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"yellow"}} >
         {button2} </button>
      <button onClick = {greenBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"green"}}>
         {button3} </button>
      <button onClick = {blueBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"blue"}}>
         {button4} </button>
      <button onClick = {blackBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"black"}}> 
        {button5} </button>
      <button onClick = {pinkBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"pink"}}>
        {button6} </button>
      <button onClick = {orangeBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"orange"}}>
         {button7} </button>
      <button onClick = {grayBtn}
       style = {{height:"30px",width:"60px", borderRadius: '10px' ,cursor: 'pointer', border: 'none', color:"white", backgroundColor:"gray"}}>
         {button8} </button>
         </div>
   
  
    
    </>
  )
}

export default ChangeTheme
