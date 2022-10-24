import randomColor from 'randomcolor';
import { useEffect, useState  } from 'react'
import ChoreForms from './ChoreForms';

const Hook = () => {
    //Counter
    let [count, setCount] = useState(0);

    function increment() {
        setCount(Count => Count + 1);
    };

    function decrement() {
        setCount(Count => Count - 1);
    };

    //Timer
    let [seconds, setSeconds] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [color, setColor] = useState("");
    let [itemName, setItemName] = useState("");
    let [items, setItems] = useState([]);

    let toggle=()=>{
        setIsActive(!isActive);
    };
    useEffect(() =>{
        let interval = null;
        if(isActive){
        interval = setInterval(()=>{
            setSeconds(seconds => seconds + 1)
        }, 1000)} else if(!isActive && seconds !== 0){
            clearInterval(interval)}
        return () => clearInterval(interval)
    },[isActive, seconds])
    
    let buttonClick = !isActive === false ?`Pause`: `Start`;

    let reset = () => {
      setSeconds(0);
      setIsActive(false);
    };

    const [username, setUsername] = useState();

    useEffect(() => {
      setColor(randomColor())
    }, [seconds])

    let addItem = (e) => {
      e.preventDefault();
      setItems([...items, {
        id: items.length,
        name: itemName,
      }])
      setItemName("");
    };
    

    // const [buttonText, setButtonText] = useState('Start');
    // function buttonClick() {
    //     setButtonText('Pause');
    // };
      return (
    <div>
      <h2>Hooks Example</h2>

      <ChoreForms/>
      <h2>List of THings</h2>
      <p id="show"></p>
      <form onSubmit={addItem}>
        <input type="text" name="item" value={itemName} onChange={e => setItemName(e.target.value)}/>
      </form>

        <div>
          <ul>
            {items.map(item => <li style={{listStyle: "none"}} key={item.id}>{item.name}</li>)}
          </ul>
        </div>

      <h1>Hi! This is {username}</h1>
      <input type="text" name="username" value={username} onChange={(event)=>{
        setUsername(event.target.value);
      }}/>

      <p>You clicked {count} times</p>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>

      <p>Timer Example</p>
      <div style={{color:color}}>{seconds}</div>
      <div>
        <button onClick={toggle}>{buttonClick}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Hook
