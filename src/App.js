import React, { useState } from 'react';

import { Counter } from './components';

function App() {
  const [name, setName] = useState('Rajesh');
  const PI = 3.14;

  const students = [
    {
      name: 'Rajesh',
      age: 26
    },
    {
      name: 'Punith',
      age: 26
    },
    {
      name: 'Darshan',
      age: 24
    }
  ]

  const updateName = () => {
    setName(val => val === 'Rajesh' ? 'Punith' : 'Rajesh')
  }
  let a = <div className="App">
    <p>name is : {name}</p>
    <button onClick={updateName}>Update Name</button>
    {name === 'Rajesh' ? <Counter name={name} PI={PI} /> : 'something else'}

    {students.map((eachStudent) => {
      return <div key={eachStudent.age}>
        <span>{eachStudent.name}</span>
        <span>{eachStudent.age}</span>
      </div>
    })}



  </div>
  console.log('a', a)
  return (
    a
  );
}

export default App;
