import React from 'react';
import { Link } from 'react-router-dom'
import PurchaseButtons from './PurchaseButtons'


function BookPage(props) {
  console.log(props);

  
  
    return (
      <div className="">
        <div className="header">
          <h1 className="bookTitle">{props.fullTitle}</h1>
          <p className="description">{props.description}</p>
         </div>
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
      }
    `}</style>
      </div>

    );
  }
  export default BookPage;