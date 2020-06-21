import React from 'react';
import { Link } from 'react-router-dom'


function Book(props) {
  console.log(props);
  
  let purchaseLink;
  let amazonLink;
  let barnesAndNobleLink;

  if (props.purchaseLink){
    purchaseLink = (
      <a href={props.purchaseLink} target="_blank" className="mainPurchaseButton">Purchase</a>
    )
  }  

  if (props.amazonLink){
    amazonLink = (
      <a href={props.amazonLink} target="_blank" className="secondaryPurchaseButton">Amazon</a>
    )
  }  

  if (props.barnesAndNobleLink){
    barnesAndNobleLink = (
      <a href={props.barnesAndNobleLink} target="_blank" className="secondaryPurchaseButton">Barnes and Noble </a>
    )
  }  

    return (
      <div className="bookWrap">
         <Link to={props.link}>
           <img className="bookCover" src={props.cover.sandAndSage || props.cover.redding}/>
          </Link>
         <div className="infoSection">
          <h2 className="title">{props.title}</h2>
          <h3 className="published">{props.published}</h3>
          <p className="description">{props.description}</p>
          <div className="storeLinks">
            {purchaseLink}
            {amazonLink}
            {barnesAndNobleLink}
          </div>
         </div>
        <style jsx>{`
          .bookWrap{
            margin: 10%;
            display: flex;
            flex-flow: row wrap;
          }

          .infoSection{
            margin-left: 5%;
            width: 700px;
          }

          .bookCover{
            width: 419px;
            height: 594px;
          }

          .storeLinks{
            display: flex;
            flex-direction: column;
          }

          .mainPurchaseButton{
            border: 2px solid #00bac7;
            width: 200px;
            border-radius: 300px;
            text-align: center;
            padding: 20px;
            color: #00bac7;
            margin-top: 3%;
            font-weight: bold;
          }
          .mainPurchaseButton:visited{
            color: #00bac7;
          }

        `}</style>
      </div>
    );
  }
  export default Book;