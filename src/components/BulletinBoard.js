import React from 'react'

const BulletinBoard = (props) => {

    let ID = (props.id == null) ? "" : "ID: ";
    let Category = (props.category == null) ? "" : "Bulletin Board: ";
    let Post = (props.post == null) ? "" : "Post: ";
  return (
    <div>
       <h3>{ID} {props.id}</h3>
        <h3>{Category} {props.category}</h3>
        <h3>{Post} {props.post}</h3>
    </div>
  )
}

export default BulletinBoard;
