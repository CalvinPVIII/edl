import React from 'react';
import { Link } from 'react-router-dom'


function BookPage(props) {
  console.log(props);
  
    return (
      <div className="">
         <h1>{props.title}</h1>
      </div>
    );
  }
  export default BookPage;