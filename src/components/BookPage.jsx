import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import PurchaseButtons from './PurchaseButtons'
import Footer from './Footer'

function BookPage(props) {
    return (
      <div className="">
        <div className="header">
        <Fade top={1000}>
          <h1 className="bookTitle">{props.fullTitle}</h1>
          </Fade>
          <p className="description">{props.description}</p>
         </div>
         <Fade bottom={1000}>
         <img src={props.image} className="bookPic"/>
         <div className='quoteBlock'>
          <p className='excerpt'>"{props.excerpt}"</p>
          <p className="quotation">- Excerpt from {props.title}</p>
         </div>
         <div className="info">
          <p className='infoTitle'>{props.title}</p>
          <p className="infoPublished">{props.published}</p>
          <PurchaseButtons
            purchaseLink={props.purchaseLink}
            amazonLink={props.amazonLink}
            barnesAndNobleLink={props.barnesAndNobleLink}
          />
         </div>
         </Fade>
         <Footer 
          bookList = {props.bookList}
          currentBook = {props.title}
         />
      
    <style jsx>{`
      .header{
        text-align: center;
        display: flex; 
        flex-flow: column wrap;
      }

      .bookTitle{
        font-size: 60px;
      }

      .description{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;    
        line-height: 4vh;
        font-size: 20px;
        color: grey;
        animation: fadeIn 3s;
      }

      @keyframes fadeIn{
        0% {opacity: 0%;}
        100% {opacity: 100%}
      }
      
      .bookPic{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5%;
        width: 419px;
        height: 594px;
      }

      .quoteBlock{
        display:flex;
        flex-flow: column wrap;
        margin-left: auto;
        margin-right: auto;
      }

      .excerpt{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;    
        line-height: 4vh;
        font-size: 25px;
      }

      .quotation{
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: grey;
      }

      .info{
        margin-left: 10%;
        margin-bottom: 10%;
      }

      .infoTitle{
        font-size: 20px;
      }
    `}</style>
      </div>

    );
  }
  export default BookPage;