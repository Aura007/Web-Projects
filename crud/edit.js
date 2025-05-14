import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {

  const {studentId}=useParams();
  const [id,setId] =useState("");
  const [name,setName] =useState("");
  const [place,setPlace] =useState("");
  const [phone,setPhone] =useState("");
  const[validation,setvalidation]=useState(false);

  const navigate=useNavigate();
  // const[studentData,setStudentData]=useState({});
  useEffect(()=>{
    fetch("http://localhost:8000/students/"+studentId)
    .then((res)=>res.json())
    .then((data)=>{
      setId(data.id);
      setName(data.name);
      setPlace(data.place);
      setPhone(data.phone);
    })
    .catch((err)=>console.log(err.message));

  },[])

   const handleSubmit= (e)=>{
      e.preventDefault();
      const studentData ={id,name,phone,place};
      fetch('http://localhost:8000/students/'+studentId,{
        method:'PUT',
        headers:{
          "content-type":'application/json'
      },
        body:JSON.stringify(studentData)
    
    }
      )
      .then((res)=>{
        alert("Data Updated Successfully");
        navigate('/');
      })
      .catch((err) => console.log(err.message));

    }

  return (
    <div className="container">
      <h2>Edit Student Details</h2>
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

        <div><button className="btn btn-save">Update</button>
        <Link to="/" className="btn btn-back">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default Edit;
