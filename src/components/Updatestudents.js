import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const UpdateStudents = ({students,setStudents}) =>{

    const history = useHistory()
    const {id} = useParams()
    const editStudent = students[id]
    const [name, setName] = useState('')
    const [batch, setBatch] = useState('')
    const [gender, setGender] = useState('')
    const [qualification, setQualification] = useState('')

    useEffect(()=>{
      setName(editStudent.name)
      setBatch(editStudent.batch)
      setGender(editStudent.gender)
      setQualification(editStudent.qualification)
      

    }, [editStudent])

   
    function updateStudent (){
        const updatedObject = {
          name : name,
          batch : batch,
          gender : gender,
          qualification : qualification,
        }
        students[id] = updatedObject;
        setStudents([...students])
        history.push("/")

    }

  return (
    <div>
    <input 
    placeholder="Enter Name"
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    >
    </input>
    
    <input 
    placeholder="Enter Batch"
    type="text"
    value={batch}
    onChange={(e)=>setBatch(e.target.value)}
    >
    </input>

    <input 
    placeholder="Enter Gender"
    type="text"
    value={gender}
    onChange={(e)=>setGender(e.target.value)}
    >
    </input>

    <input 
    placeholder="Enter Qualification"
    type="text"
    value={qualification}
    onChange={(e)=>setQualification(e.target.value)}
    >
    </input>

    <button onClick={updateStudent}>Update student</button>


</div>
  )
}

export default UpdateStudents