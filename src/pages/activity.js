import React from 'react'
import PersonnelListTable from '../components/PersonnelTable';
import BoardData from '../components/BoardData';
import BulletinBoard from '../components/BulletinBoard';
import ExpenseTracker from '../components/expenseTracker';

const Activity = () => {
  let boardComponents = BoardData.map(board => {
    return(
      <BulletinBoard 
      id = {board.id} 
      category = {board.category} 
      post = {board.post}/>
      )});
  return (
      <header>
      <PersonnelListTable/>
      <ExpenseTracker/>
      {boardComponents}
      </header>
  )   
};

export default Activity
