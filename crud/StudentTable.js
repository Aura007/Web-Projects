import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
function StudentTable() {

  const [students,setStudents]= useState("");
  const navigate= useNavigate();

  const displaydetails=(id)=>{
    navigate("/student/view/"+id);
  }

  useEffect( ()=>{
    fetch('http://localhost:8000/students')
    .then((res)=> res.json())
    .then((data) =>{
      setStudents(data)
    }).catch((err) =>{
      console.log(err.message);
    })
  },[])

  const editDetails=(id)=>{
    navigate("/student/edit/"+id);
  }

   const deleteDetails=(id)=>{
    if(window.confirm("Are you sure want to delete?")){
      fetch('http://localhost:8000/students/'+id,{
        method:'DELETE',
    
    }
      )
      .then((res)=>{
        alert("Data deleted Successfully");
        window.location.reload();
        navigate('/');
      })
      .catch((err) => console.log(err.message));
    }
  }




  return (
    <div className="container">
      <h2>Student Records</h2>
      <div className="table-container">
        <Link to="/student/create" className="btn btn-add" >Add New Student</Link>
        <table>
          <thead>
            <tr>

            <th>SI No</th>
            <th>Name</th>
            <th>Place</th>
            <th>Phone</th>
            <th>Actions</th>
            </tr>

          </thead>
          <tbody>
            {
              students && students.map((item,index)=>(

                  <tr key={item.id}>
              <td>{index+1}</td> 
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.phone}</td>
              <td className=''>
                <button onClick={()=>displaydetails(item.id)} className="btn btn-view">View</button>
                <button onClick={()=>editDetails(item.id)} className="btn btn-edit">Edit</button>
                <button onClick={()=>deleteDetails(item.id)}className="btn btn-delete">Delete</button>
              </td>
            </tr>

              ))
            }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default StudentTable;
