import React from 'react';
import '../assets/expenseTracker.css'

// class ExpenseTracker extends React.Component {
    
//     render() {
//         return (
//         <div>
//             <div><b>Item:</b>Laptop</div>
//             <div><b>Amount:</b>70000</div>
//             <div><b>Spend Date:</b>10/17/2022</div>
//             <div><b>Category:</b>Computer</div>
//         </div>
//     )};
// };

let ExpenseTracker = () => {
    const itemStyle2 = {
        color:"pink",
        fontSize:"24px"
    };
    return (
    <div style = {{color:"pink", fontSize:"24px"}}>
        <div><b>Item :</b> Laptop</div>
        <div><b>Amount :</b> 70000</div>
        <div><b>Spend Date :</b> 10/17/2022</div>
        <div><b>Category :</b> Computer</div>
    </div>
)
};


export default ExpenseTracker;