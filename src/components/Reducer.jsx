import { useState } from "react";

const Reducer = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddClick = (text) => {
    setTasks(
      [
        ...initialTasks,
        {
          id: nextId++,
          text: text,
          done : false
        }
      ]
    );
  }

  const handleEdit = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id)
          return task;
        else
          return t;
      })
    );
  }

  const handleDelete = (taskId) => {
    setTasks(
      tasks.filter(x => x.id !== taskId)
    );
  }

  return (
    <div>
      <h1>Prague itineary</h1>
      <AddTask handleAddClick={ handleAddClick } />
      <TaskList tasks = {initialTasks} onEditHandler={handleEdit} onDeleteHandler = { handleDelete } />
    </div>
  );
}


const AddTask = ({ onAdd, handleAddClick }) => {
  const [text, setText] = useState('');
  return (
    <section>
      <input type="text" />
      <button onClick={handleAddClick}> Add </button>
    </section>
  );
}


const TaskList = ({ tasks, onEditHandler, onDeleteHandler }) => {
  return (
  <ul>
    {
      tasks.map((task, index, arr) => {
      return (<li key={task.id}>
        <input type="checkbox" checked= { task.done } />
        <span> { task.text } </span>
        <button type="button" onClick={onEditHandler}> Edit </button>
        <button type="button" onClick={onDeleteHandler}> Delete </button>
      </li>
      )
      })
    }
  </ul>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export default Reducer;
