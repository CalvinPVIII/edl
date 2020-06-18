import React from 'react';
import { Link } from 'react-router-dom'

import sandAndSage from '../images/sandandsagefront.PNG'
import reddingWriter from '../images/reddingfront.jpg'
import profile from "../images/profile.jpg"

function Home() {
    return (
      <div className="">
         <h1 className="homeTitle">Official Website for Oregon Author</h1>
         <h1 className="homeTitle">Ellie Derrick Lewis</h1>
         <style jsx>{`
            .homeTitle{
                text-align: center;
                font-size: 6vh;
             }
        `}</style>
        <div className="bookSection">
             <Link to={'/sandandsagebrush'}>
                 <div className="bookImage">
                    <img className="book" src={sandAndSage}/>
                     <div className="bookTitle">Sand and Sage Brush</div>
                 </div>
             </Link>
             <Link to={'/reddingwritter'}>
                 <div className="bookImage">
                    <img className="book" src={reddingWriter}/>
                    <div className="bookTitle">Redding Writer</div>
                 </div>
             </Link>
        </div>
        <style jsx>{`
            .bookSection{
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                min-width: 430px;
            }
            .bookImage{
                height: 600px;
                width: 430px;
                margin: 10vw;
                background-color: grey
                position: absolute;
                z-index: -1;
            }
            .book{
                height: 600px;
                width: 430px;
            }
            .book:hover{
                opacity: 0.6;
            }
            .bookTitle{
                font-size: 55px;
                display: flex;
                justify-content: center;
                color: white;
                text-align: center;
                width: 400px;
                position: relative;
                z-index: 1;
                margin-top: -80%;
                opacity: 0;
            }
            
            .bookImage:hover .bookTitle{
                opacity: 1;
            }
            
        `}</style>
        <div className="profile">
            <img className="profileImg"src={profile}/>
            <div className="aboutMe"> About Me</div>
        </div>
        <style jsx>{`
            .profileImg{
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: 70vh;
                width: 25vw;
                position: relative;
                z-index: -1;
            }
            .aboutMe{
                background-color: green;
                width: 10vw;
                height: 5vh;
                
            }
        `}
        </style>
      </div>
    );
  }
  export default Home;