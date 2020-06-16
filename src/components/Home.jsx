import React from 'react';
import { Link } from 'react-router-dom'

import sandAndSage from '../images/sandandsagefront.PNG'
import reddingWriter from '../images/reddingfront.jpg'
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
                 </div>
                 <div className="bookTitleWrap">
                     <div className="bookTitle">Sand and Sage Brush</div>
                 </div>
             </Link>
             <Link to={'/reddingwritter'}>
                 <div className="bookImage">
                    <img className="book" src={reddingWriter}/>
                 </div>
                 <div className="bookTitleWrap">
                    <div className="bookTitle">Redding Writer</div>
                 </div>
             </Link>
        </div>
        <style jsx>{`
            .bookSection{
                display: flex;
                flex-flow: row-wrap;
                justify-content: center;
            }
            .bookImage{
                height: 60vh;
                width: 20vw;
                margin: 10vw;
                background-color: grey
                position: absolute;
                z-index: -1;
            }
            .book{
                height: 60vh;
                width: 20vw;
            }
            .book:hover{
                opacity: 0.6;
            }
            .bookTitle{
                font-size: 3vw;
                display: flex;
                justify-content: center;
                color: white;
                text-align: center;
            }
            .bookTitleWrap{
                width: 20vw;
                position: absolute;
                z-index: 1;
                margin-top: -30%;
                margin-left: 10%;
                opacity: 0;
            }
            .bookImage:hover ~ .bookTitleWrap{
                opacity: 1;
            }
        `}</style>
      </div>
    );
  }
  export default Home;