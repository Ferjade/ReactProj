import React, { useEffect, useState } from 'react'
import ChoreList from '../components/ChoreList'

let choreList = localStorage.getItem("chores") ?
JSON.parse(localStorage.getItem("chores")) : [];

const ChoreForms = () => {


const [choreName, setChoreName] = useState("");
const [choreDesc, setChoreDesc] = useState("");
const [choreDate, setChoreDate] = useState("");
const [choreData, setChoreData] = useState(choreList);

let handleSubmit = (e) => {
    e.preventDefault();
    let choreLog = {
        id: choreData.length,
        name: choreName, 
        desc: choreDesc, 
        date: choreDate};
    setChoreData([...choreData, choreLog]);
}
useEffect(() => {
    localStorage.setItem("chores", JSON.stringify(choreData))
},[choreData])

  return (
    <form onSubmit = {e => handleSubmit(e)}>
        <label>Chore Name</label>
        <input type="text" name="choreName" value={choreName}
        onChange={(e) => setChoreName(e.target.value)}/>
        <br/>
        <label>Description</label>
        <input type="text" name="choreDesc" value={choreDesc}
        onChange={(e) => setChoreDesc(e.target.value)}/>
        <br/>
        <label>Date</label>
        <input type="date" name="choreDate" value={choreDate}
        onChange={(e) => setChoreDate(e.target.value)}/>
        <br/>
        <input type="submit" name="submit" value="Submit"/>
        <ChoreList data={choreData}/>
        {/* <div>
        {choreData.map (chore => {
            return(
                <ul>
                    <li key={chore.id}>{chore.name}</li>
                    <li key={chore.id}>{chore.desc}</li>
                    <li key={chore.id}>{chore.date}</li>
                </ul>
            )})}
        </div> */}
        
    </form>
  )
}

export default ChoreForms
