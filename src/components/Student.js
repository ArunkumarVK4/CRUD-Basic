import React, { useState } from "react";
import Base from "../base/Base";
import { useHistory } from "react-router-dom";

function Student({students,setStudents}) {
  const history =useHistory()
  // Delete students functionality
  const deleteStudent = (studId) => {
    const remainingStudents = students.filter((stud, idx) => idx !== studId);
    setStudents(remainingStudents);

  };

  return (
    <Base
      title={"Student Dashboard"}
      description={"The page contains all students data"}
    >
      
      <div className="card-container">
        {students.map((stud, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <h3>{stud.name}</h3>
              <p>{stud.batch}</p>
              <p>{stud.gender}</p>
              <p>{stud.qualification}</p>
            </div>

            <div className="control">
              <button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>
              <button onClick={() => deleteStudent(idx)}>delete</button>
            </div>
          </div>
        ))}
      </div>
     
    </Base>
  );
}

export default Student;
