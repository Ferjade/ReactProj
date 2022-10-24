import React from 'react'
import '../assets/expenseTracker.css'

const ChoreList = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      {props.data.map(chore => {
        return(
          <tbody>
            <tr>
              <td key={chore.id}>{chore.name}</td>
              <td key={chore.id}>{chore.desc}</td>
              <td key={chore.id}>{chore.date}</td>
            </tr>
          </tbody>
        )
      })}
     </table>
  )
}

export default ChoreList
