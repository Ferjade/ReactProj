import * as React from "react";

let currentTime = new Date().getHours();

let Greetings = (props) => {
    let fName = props.firstName;
    let lName = props.lastName;
    if (currentTime < 12){
        return (
            <h3>Good Morning! {fName} {lName}</h3>
        )
    } else if (currentTime > 12 && currentTime < 18){
        return (
            <h3>Good Afternoon! {fName} {lName}</h3>
        )
    } else {
        return (
            <h3>Good Evening! {fName} {lName}</h3>
        )
    }
};

export default Greetings;