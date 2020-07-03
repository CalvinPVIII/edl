import React from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


import sandAndSage from '../images/sandandsagefront.PNG'
import reddingWriter from '../images/reddingfront.jpg'
import profile from "../images/profile.jpg"

function Home() {
    return (
      <div className="">
         <Fade top duration={1000}>
            <h1 className="homeTitle">Official Website for Oregon Author</h1>
            <h1 className="homeTitle">Ellie Derrick Lewis</h1>
         </Fade>
         <style jsx>{`
            .homeTitle{
                text-align: center;
                font-size: 6vh;
        `}</style>
        <div className="bookSection">
             <Link to={'/sandandsagebrush'}>
                 <div className="bookImage">
                    <img className="book" src={sandAndSage}/>
                     
                 </div>
             </Link>
             <Link to={'/reddingwriter'}>
                 <div className="bookImage">
                    <img className="book" src={reddingWriter}/>
                   
                 </div>
             </Link>
        </div>
        <style jsx>{`
            .bookSection{
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                min-width: 350px;
                animation: fadeIn 2s;
            }

            @keyframes fadeIn{
                0% {opacity: 0%;}
                100% {opacity: 100%}
           }
            .bookImage{
                height: 550px;
                width: 350px;
                margin: 10vw;
                background-color: black
                position: absolute;
                z-index: -1;
                box-shadow: 5px 10px;
            }
            .book{
                height: 550px;
                width: 350px;
            }
            .book:hover{
                opacity: 0.6;
                border: 2px solid black;
            }
            .bookTitle{
                font-size: 55px;
                display: flex;
                justify-content: center;
                color: white;
                text-align: center;
                width: 350px;
                position: relative;
                z-index: 1;
                margin-top: -90%;
                display: none;
            }
            
            
        `}</style>
        <Fade top duration={1000}>
        <Link to={"/about"}>
        <div className="profile">
            <img className="profileImg"src={profile}/>
            <span className="aboutMe">About Me </span>
        </div>
        </Link>
        <style jsx>{`
            .profileImg{
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: 600px;
                width: 450px;
                position: relative;
                z-index: -1;
                margin-bottom: 2%;
            }
            .aboutMe{
                display: block;
                margin-left: 55%;
                margin-right: auto;
                margin-top: -110%;
                font-size: 40px;
                background-color: teal;
                width: 200px;
                color: white;
                text-align: centter;
                padding: 20px;
                
            }
            
            .profile{
                height: 600px;
                width: 450px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }

            .profile:hover{
                border: 3px solid black;
            }
            



        `}
        </style>
        </Fade>
      </div>
    );
  }
  export default Home;