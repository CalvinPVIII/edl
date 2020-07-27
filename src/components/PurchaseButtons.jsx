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
      <a href={props.amazonLink} target="_blank" className="amazonPurchaseButton">Amazon</a>
    )
  }  

  if (props.barnesAndNobleLink){
    barnesAndNobleLink = (
      <a href={props.barnesAndNobleLink} target="_blank" className="barnesAndNoblePurchaseButton">Barnes and Noble </a>
    )
  }  

    return (
      <div className="">
        <div className="storeLinks">
            {purchaseLink}
            {barnesAndNobleLink}
            {amazonLink}
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

          .mainPurchaseButton:hover{
              color: white;
              background-color: #00bac7
          }

          .amazonPurchaseButton{
            border: 2px solid black;
            width: 100px;
            border-radius: 300px;
            text-align: center;
            padding: 13px 26px;
            margin-top: 1%;
            font-weight: bold;
            font-size: 14px;
            color:black;
            margin-top: 3vh;
          }

          .barnesAndNoblePurchaseButton{
            border: 2px solid black;
            width: 125px;
            border-radius: 300px;
            text-align: center;
            padding: 13px 26px;
            margin-top: 1%;
            font-weight: bold;
            font-size: 14px;
            color:black;
            margin-top: 3vh;
          }

          .barnesAndNoblePurchaseButton:visited, .amazonPurchaseButton:visited{
            color: black;
        }


          .barnesAndNoblePurchaseButton:hover, .amazonPurchaseButton:hover{
              background-color: black;
              color: white;
          }

        `}</style>
      </div>
    );
  }
  export default PurchaseButtons;