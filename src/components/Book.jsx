import React from 'react';
import { Link } from 'react-router-dom'

import PurchaseButtons from './PurchaseButtons'

function Book(props) {
    return (
      <div className="bookWrap">
         <Link to={props.link}>
           <img className="bookCover" src={props.cover.sandAndSage || props.cover.redding}/>
          </Link>
         <div className="infoSection">
          <h2 className="title">{props.title}</h2>
          <h3 className="published">{props.published}</h3>
          <p className="description">{props.description}</p>
          <PurchaseButtons
            purchaseLink = {props.purchaseLink}
            amazonLink = {props.amazonLink}
            barnesAndNobleLink = {props.barnesAndNobleLink}
          />
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
        `}</style>
      </div>
    );
  }
  export default Book;