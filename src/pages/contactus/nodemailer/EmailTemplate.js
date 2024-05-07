import React, { useEffect, useRef, useState } from 'react';

import "../../../emailjs/SendEmail.css";

const EmailTemplate = () => {
  const [recipient, setRecipient] = useState("");
  const [attachment, setAttachment] = useState("");
  const [file, setFile] = useState("");
  const [msgBody, setMsgBody] = useState("");
  const [subject, setSubject] = useState("");



  const form = useRef();


  useEffect(()=> {

    const name = new Date().getTime() + file.type;
    //var path = (window.URL || window.webkitURL).createObjectURL(file);
    //console.log('path', path);
    
    setAttachment(name)

  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    
    //nodeEmailSender(senderEmail, receiverEmail, clientEmailSubject, clientEmailMessage);
    const tenglobal = { recipient, msgBody, subject };

    fetch("http://localhost:8080/sendMail", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(tenglobal)
  }).then(()=> {
      console.log(tenglobal);
      console.log("Email is sent successfully");
  }).catch((error)=> {
    console.log(error);
  });

  }
    

  return (
    <div className='send-email-container'>
      <p>Need more help? send us an email bellow</p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label><br></br>
      <input type="email" name="user_name" onChange={(e)=> setRecipient(e.target.value)} required/><br></br>
      <label>Subject</label><br></br>
      <input type="text" name="email_subject" onChange={(e)=> setSubject(e.target.value)}/><br></br>
      <br></br>
      <label>Message</label><br></br>
      <textarea name="message" onChange={(e)=> setMsgBody(e.target.value)}/><br></br>
      <div>
      <label htmlFor="file">
        </label>
        
      <input 
          className="add-course-input"
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "display", 
          border: "none",
          background: "#e5e5e5", display:"none" }} />
          <div className='button-container'>
      <input type="submit" value="Submit"
            style={{background: "rgb(30, 143, 255)",
                    color: "#ffffff"}} />
      </div>
      </div>
    </form>
    <p>picture Url: {attachment}</p>
    </div>
  );
};


export default EmailTemplate;
