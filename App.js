
import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {
  const [data , Setdata] = useState("")
  const [alldata , Setalldata] = useState([])
  const [show , Setshow ] = useState (false)
  const [editidex , Seteditindex] = useState()

  const handlesubmit =()=>{
    
    if(data.length !==0){
      Setalldata((newdata)=>[...newdata,data])
      Setdata("")
    }
    
  }
  const handledelete =(i)=>{
    alldata.splice(i,1)
    Setalldata([...alldata])
  }
  const handleedit =(i)=>{
    Setdata(alldata[i])
    Setshow(true)
    Seteditindex(i)

  }
  const handleupdate =() =>{
    alldata.splice(editidex,1,data)
    Setalldata([...alldata])
    Setdata("")
    Setshow(false)


  }
  return (
   <>
   <div className='input-div'>
   <h1> CURD OPERATION </h1>
     
     <input type='text' className='input-fill' value={data} onChange={(e)=>Setdata(e.target.value)}/>
     {!show ? <button className='add-button' onClick={handlesubmit}>Add</button> :
     <button className='Update-button' onClick={handleupdate}>Update</button> }
   
     {alldata.map((val,i)=>
     <div>
      <h2>{val}</h2>
      <button className='Edit' onClick={()=>handleedit(i)}>Editing</button>
      <button className='Delete' onClick={()=>handledelete(i)}>Delete</button>

      </div>
    
     
     )}


     </div>
     
     <br/>
     <br/>
     <br/>

     
     

   </>
  );
}

export default App;
