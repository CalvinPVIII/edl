import React from 'react';
import Fade from 'react-reveal/Fade';

import sandAndSage from '../images/sandandsagefront.PNG'
import redding from "../images/reddingfront.jpg"
import Book from './Book'

function BookList() {
  const books = [
    {
    title: "Sand and Sagebrush",
    cover: {sandAndSage},
    published: 'July 2019',
    description: 'In 1914, a young married couple leaves the lush Willamette Valley to participate in the last land give-away in the US. The newspaper headlines and tales of success lead them to the harsh desert valley of southern Oregon.',
    link: '/sandandsagebrush',
    purchaseLink: 'https://www.liferichpublishing.com/Bookstore/BookDetail.aspx?BookId=SKU-001239008',
    amazonLink: "https://www.amazon.com/dp/1489724249/ref=sr_1_1?keywords=sand+and+sagebrush+a+desert+journey&qid=1564273412&s=gateway&sr=8-1",
    barnesAndNobleLink: 'https://www.barnesandnoble.com/w/sand-and-sagebrush-ellie-derrick-lewis/1132694269?ean=9781489724243',
  },
  {
    title: "Redding Writer",
    cover: {redding},
    published: 'June 2020',
    description: `A young couple from Sacramento in the 1950's decide to move to a ranch in Shasta County near Redding, California. She sees it as a chance to peruse her dreams to be a writer, and he wants to be a rancher. They are unprepared for the changes this will make in their lives.`,
    link: '/reddingwriter',
    purchaseLink: 'https://www.liferichpublishing.com/Bookstore/BookDetail.aspx?BookId=SKU-001278427',
    amazonLink: 'https://www.amazon.com/Redding-Writer-Ellie-Derrick-Lewis/dp/1489729615/ref=sr_1_1?dchild=1&keywords=ellie+derrick+lewis&qid=1595812504&sr=8-1',
    barnesAndNobleLink: 'https://www.barnesandnoble.com/w/redding-writer-ellie-derrick-lewis/1137234950?ean=9781489729613',
  }
]
    return (
      <div className="">
        <Fade top duration={1000}>
          <h1 className="header">Books</h1>
        </Fade>
         <div className="bookList">
          {books.map((book, index)=>
            <Book
              title={book.title}
              cover={book.cover}
              published={book.published}
              description={book.description}
              link={book.link}
              purchaseLink={book.purchaseLink}
              amazonLink={book.amazonLink}
              barnesAndNobleLink={book.barnesAndNobleLink}
          />)}
        </div>
          <style jsx>{`
            .header {
              text-align: center;
              font-size: 60px;
              margin-top: 5%;
            }
          `}</style>
      </div>
    );
  }
  export default BookList;