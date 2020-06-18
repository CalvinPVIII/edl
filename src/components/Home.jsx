import React from 'react';
import { Link } from 'react-router-dom'

import sandAndSage from '../images/sandandsagefront.PNG'
import reddingWriter from '../images/reddingfront.jpg'
import profile from "../images/profile.jpg"
import bannerImg from "../images/banner.png"

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
                min-width: 350px;
            }
            .bookImage{
                height: 550px;
                width: 350px;
                margin: 10vw;
                background-color: grey
                position: absolute;
                z-index: -1;
            }
            .book{
                height: 550px;
                width: 350px;
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
                width: 350px;
                position: relative;
                z-index: 1;
                margin-top: -90%;
                display: none;
            }
            
            .bookImage:hover .bookTitle{
                display: flex;
            }
            
        `}</style>
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
            }
            .aboutMe{
                display: block;
                margin-left: 55%;
                margin-right: auto;
                margin-top: -25%;
                font-size: 40px;
                background-color: teal;
                width: 200px;
                color: white;
                text-align: centter;
                padding: 20px;
                
            }
        `}
        </style>
      </div>
    );
  }
  export default Home;