import React, {useEffect, useState} from 'react';
import LikesForPost  from "./Component/likes";
import './App.css';

function App() {
  const[likes , setlikes] =useState(); 

  // useEffect(async ()=>{
  //     //let a =await fetch("/likes").then((obj)=>{ return obj.json()}).then((actual) =>{console.log(actual)});
  //     const res = await fetch("/likes");
  //     const data = await res.json();
  //     //console.log(data);
  //     setlikes(data);
  // },[])
  const[url_input_field ,setinputfield ]  = useState({url:""});
  const handlechange = (e)=>{
    setinputfield({url: e.target.value});
  }

   const handleclick =async ()=>{

      if(url_input_field.url){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(url_input_field)
          };
         await fetch('/find', requestOptions)
          .then(response => response.json())
          .then(data => setlikes(data));
      }
      else{
          alert("yay!!!");
      }

  }

  //console.log(likes);
  return (
    <div className="App">
      <div className="inputtagbox" >
        <input value={url_input_field.url} placeholder="Enter Public url" onChange={handlechange}></input>
     
      <button id="btn" onClick ={handleclick}>Submit</button>
      </div>

      <LikesForPost likes={likes}/>
    </div>
  );
}

export default App; 
