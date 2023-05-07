import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import data from './Data/data';
import {Route, Switch} from 'react-router-dom'
import AddStudents from './components/Addstudent';
import UpdateStudents from './components/Updatestudents';



function App() {
  const [students, setStudents] = useState(data);

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/'>
        <Student
          students={students}
          setStudents={setStudents}
          />
        </Route>

        <Route path="/add" >
          <AddStudents
          students={students}
          setStudents={setStudents}
          />
        </Route>

        <Route path='/edit/:id'>
          <UpdateStudents
          students={students}
          setStudents={setStudents}
          />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
