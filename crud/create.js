import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
function Create() {

    const [id,setId] =useState("");
    const [name,setName] =useState("");
    const [place,setPlace] =useState("");
    const [phone,setPhone] =useState("");
    const[validation,setvalidation]=useState(false);

    const navigate=useNavigate();

    const handleSubmit= (e)=>{
      e.preventDefault();
      const studentData ={id,name,phone,place};
      console.log(studentData);
      fetch('http://localhost:8000/students',{
        method:'POST',
        headers:{
          "content-type":'application/json'
      },
        body:JSON.stringify(studentData)
    
    }
      )
      .then((res)=>{
        alert("Data Created Successfully");
        navigate('/');
      })
      .catch((err) => console.log(err.message));

    }



  return (
    <div className="container">
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" required value={id} onChange={e => setId(e.target.value)} onMouseDown={()=>setvalidation(true)}></input>
        {id.length ===0 && validation && <span className="errMsg"> Please Enter Your Id</span>}

         <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"  required value={name} onChange={e => setName(e.target.value)} onMouseDown={()=>setvalidation(true)}></input>
        {name.length ===0 && validation && <span className="errMsg"> Please Enter Your Name</span>}

         <label htmlFor="place">Place</label>
        <input type="text" id="place" name="place"  required value={place} onChange={e => setPlace(e.target.value)} onMouseDown={()=>setvalidation(true)}></input>
        {place.length ===0 && validation &&  <span className="errMsg"> Please Enter Your Place</span>}

         <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone"  required value={phone} onChange={e => setPhone(e.target.value)} onMouseDown={()=>setvalidation(true)}></input>
        {phone.length ===0 && validation && <span className="errMsg"> Please Enter Your Phone</span>}

        <div><button className="btn btn-save">Save</button>
        <Link to="/" className="btn btn-back">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default Create;