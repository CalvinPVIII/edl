import React from 'react';

function PurchaseButtons(props) {
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
      <div className="">
        <div className="storeLinks">
            {purchaseLink}
            {amazonLink}
            {barnesAndNobleLink}
          </div>
          <style jsx>{`
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
  export default PurchaseButtons;