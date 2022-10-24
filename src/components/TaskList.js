import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form} from 'react-bootstrap';

const TaskList = ({data, remove, removeAll, complete}) => {
  return (
    <div>
      <table>
      <tr>
        <th>Date</th>
        <th>Task</th>
        <th>Completion Status</th>
        <th>Complete Task</th>
        <th>Remove Task</th>
      </tr>
      {data.map(task => {
        return(
          <tbody className='tableBody'>
            <tr>
              <td>{task.date}</td>
              <td>{task.task}</td>
              <td>{task.isDone}</td>
              <td><button type="button" id={task.id} onClick={complete}>✓</button></td>
              <td><button type="button" id={task.id} onClick={remove}>☓</button></td>
            </tr>
          </tbody>
        )
      })}
     </table>
     <button type="button" onClick={removeAll}>Remove All</button>
    </div>
  )
}

export default TaskList
