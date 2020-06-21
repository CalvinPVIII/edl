import React from 'react';
import { Link } from 'react-router-dom'


function Footer(props) {
    let footerContent = [(<><Link to={`/books`}><p className="book">All</p></Link></>)]
    console.log(props);
    
    props.bookList.forEach((book)=>{
        if(book === props.currentBook){
            footerContent.push((<Link to={`/${book.split(" ").join("")}`}><p className="currentBook">{book}</p></Link>))
        }else{
            footerContent.push((<Link to={`/${book.split(" ").join("")}`}><p className="book">{book}</p></Link>))
        }

    })
    return (
     <div className="footerWrap">
        <div className="footerList">
          {footerContent}
           <style jsx>{`
            .footerList{
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                color: grey;
                font-size: 30px;
                width: 40vw;
                
            }
            
            .book{
                
            }
            
            .currentBook{
                color: black;
                
            }

            .footerWrap{
                width: 40vw;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            `}</style>
        </div>
      </div>
    );
  }
  export default Footer;