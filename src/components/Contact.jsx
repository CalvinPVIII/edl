import React, { useState } from 'react';
import { Link } from 'react-router-dom'


function Contact() {
    const [emailSubject, setEmailSubject] = useState("")

    const changeEmailSubject = (event) =>{
        console.log(event);
        
    }

    return (
      <div className="">
         <h1 className="header">Stay in touch <br/> Follow my social media</h1>
         <div className="socialLinksWrap">
            <div className="socialLinks">
                <a href="mailto:elliederricklewis@gmail.com"><p className="mailLink">✉</p></a>
                <a href="https://www.facebook.com/elliederricklewis46" target="_blank"><p className="facebookLink">f</p></a>
                <h1>{emailSubject}</h1>
            </div>
         </div>
        <div className="emailSection">
            <p className="conactInfo">Reach out to me on social media, or send me an email using the form below or by emailing elliederricklewis@gmail.com</p>
            <form action={`mailto:elliederricklewis@gmail.com?subject=${emailSubject}`} method="get">
                <p className='formItems'>Email:</p>
                <br/>
                <input type="text" name="email"/>
                <br/>
                <p className='formItems'>Subject</p>
                <br/>
                <input type="text" name="subject" onChange={console.log('test')
                }/>
                <br/>
                <p className='formItems'>Message:</p>
                <br/>
                <textarea name="body" rows="4" cols="40"/>
                <br/>
                <button type="submit">Send</button>
                
            </form>
        </div>
    <style jsx>{`
        .header{
            text-align: center;
            font-size: 6vh;
            margin-top: 10%;
        }

        .socialLinks{
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            width:100px;
            font-size: 40px;
            font-weight: bold;
            color: grey;
        }

        .socialLinksWrap{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100px;
        }

        a:visited {
            color: grey;
        }

        a:hover{
            color: black;
        }

        .message{
            width: 400px;
            height: 100px; 
        }

        .emailSection{
            text-align: center;
        }

        .formItems{
            margin-bottom: -0.5%;
        }
    `}</style>
      </div>
    );
  }
  export default Contact;