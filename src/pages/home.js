import React, { useRef, useState, useEffect } from 'react';
import TaskList from '../components/TaskList';

let infoSavedList = localStorage.getItem("tasks") ?
JSON.parse(localStorage.getItem("tasks")) : [];

const ToDo = () => {

  let date = useRef("");
  let task = useRef("");
  let [isDone, setIsDone] = useState("Incomplete");
  let [id, setId] = useState(Date.now());
  let [taskList, setTaskList] = useState(infoSavedList);

  let handleRemove = (e) => {
    let num = parseInt(e.target.id);
    const remove = [...taskList].filter((item) => {
      return item.id !== num;
    })
    setTaskList(remove)
  };

  let handleComplete = (e) => {
    let num = parseInt(e.target.id);
    const update = () => {
      const newStatus = taskList.map(task => {
        if(task.id === num) {
          return {...taskList, isdone: "Complete"};
        }
        return task;
      })
      
    }
   };

  let removeAll = () => {
    setTaskList([]);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: id,
      date: date.current.value,
      task: task.current.value,
      isDone: isDone,
    };

    setTaskList([...taskList, info])
    setId(Date.now);
    task.current.value="";
}

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(taskList))
},[taskList])

  return (
    <main>
      <h2>Task List</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label for="date">Date: </label>
        <input type="date" name="date" id='date'
        required tabIndex={1} ref={date}/>
        <br/>
        <label for="task">Task: </label>
        <input type="text" name="task" id='task'
        required tabIndex={2} ref={task}/>
        <br/>
        <button type="submit">Add Task</button>
      </form>
      <TaskList data={taskList} remove={handleRemove} removeAll={removeAll} complete={handleComplete}/>
    </main>
  )
}

export default ToDo