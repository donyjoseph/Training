import React, { useState } from 'react';
function Sample(){
const[text,settext]= useState("")
const onChange=(e)=>{
    settext(e.target.value);
  };
const submit=(e)=>{
alert(text)
}
return(
        <div>
            <input onChange={(e) => {onChange(e);}} type="text"></input>
            <button onClick={submit}>Submit</button>
            {text}
        </div>
      );
}
export default Sample;
    


















