import React from 'react'
import '../assets/expenseTracker.css'

const ContactList = ({infos, handleRemove, removeAll, update}) => {

  return (
    <div>
      <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Message</th>
        <th colSpan={2}>Action</th>
      </tr>
      {infos.map(info => {
        return(
          <tbody className='tableBody'>
            <tr>
              <td key={info.id}>{info.firstName}</td>
              <td key={info.id}>{info.lastName}</td>
              <td key={info.id}>{info.email}</td>
              <td key={info.id}>{info.message}</td>
              <td><button type="button" id={info.id} onClick={handleRemove}>Remove</button></td>
              <td><button type="button" id={info.id} onClick={update}>Update</button></td>
            </tr>
          </tbody>
        )
      })}
     </table>
     <button type="button" onClick={removeAll}>Remove All</button>
    </div>
  )
}

export default ContactList
