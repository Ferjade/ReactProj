import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ContactList from '../components/ContactList';

let infoSavedList = localStorage.getItem("contactUs") ?
JSON.parse(localStorage.getItem("contactUs")) : [];

const ContactUs = () => {

  let firsRefName = useRef("");
  let lastRefName = useRef("");
  let emailRef = useRef("");
  let messageRef = useRef("");
  let [id, setId] = useState(Date.now());
  let [infoList, setInfoList] = useState(infoSavedList)

  let removeAll = () => {
    setInfoList([]);
  };

  let handleRemove = (e) => {
    let num = parseInt(e.target.id);
    const remove = [...infoList].filter((item) => {
      return item.id !== num;
    })
    setInfoList(remove)
  };
  
  let handleUpdate = (e) => {
    let num = parseInt(e.target.id);
    infoList.filter((item) => {
      return item.id == num;
    }).map((item) => {
      setId(item.id);
      firsRefName.current.value=item.firstName;
      lastRefName.current.value=item.lastName;
      emailRef.current.value=item.email;
      messageRef.current.value=item.message;
    })
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: id,
      firstName: firsRefName.current.value,
      lastName: lastRefName.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    let filter = infoList.filter((item) => {
      return item.id === info.id
    });
    if (filter.length == 0) {
      setInfoList([...infoList, info]);
    } else {
      infoList.forEach((item, index) => {
        if (item.id === info.id) {
          infoList.splice(index, 1, info);
          setInfoList(infoList);
        }
      });
    };

    setInfoList([...infoList, info])
    firsRefName.current.value="";
    lastRefName.current.value="";
    emailRef.current.value="";
    messageRef.current.value="";
    setId(Date.now);
  };


  useEffect(() => {
    localStorage.setItem("contactUs", JSON.stringify(infoList))
  },[infoList])

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label for="firstName">First Name: </label>
        <input type="text" name="firstName" id='firstName' 
        required tabIndex={1} ref={firsRefName}/>
        <br/>
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" id='lastName' 
        required tabIndex={2} ref={lastRefName}/>
        <br/>
        <label for="email">Email: </label>
        <input type="email" name="email" id='email' 
        required tabIndex={3} ref={emailRef}/>
        <br/>
        <label for="message">Message</label>
        <br/>
        <textarea name="message" id='message' tabIndex={4} 
        placeholder='Enter your message here' ref={messageRef}></textarea>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <ContactList infos={infoList} handleRemove={handleRemove} removeAll={removeAll} update={handleUpdate}/>
    </div>
  )
}

export default ContactUs
