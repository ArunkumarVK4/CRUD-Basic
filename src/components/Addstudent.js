import { useState } from "react";
import Base from "../base/Base";
import { useHistory } from "react-router-dom";


function AddStudents ({students, setStudents}){
  
    const history =useHistory()
     
    const [name, setName] = useState('')
    const [batch, setBatch] = useState('')
    const [gender, setGender] = useState('')
    const [qualification, setQualification] = useState('')



const createStudent =()=>{
    const newStudents = {
        name,
        batch,
        gender,
        qualification,
    }
        setStudents([...students, newStudents])
        history.push("/")
   

}

return (
  <Base>
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

        <button onClick={createStudent}>Add students</button>


    </div>
  </Base>
)
}
export default AddStudents