import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import BookPage from './components/BookPage'
import BookList from './components/BookList'
import Home from './components/Home'
import About from './components/About'
import sandAndSage from './images/sandandsagefront.PNG'
import reddingWriter from './images/reddingfront.jpg'

function App() {

  const booksInfo = [
    {
      title: 'Sand and Sagebrush',
      fullTitle: "Sand and Sagebrush: a Desert Journey",
      description: 'In 1914, a young married couple leaves the lush Willamette Valley to participate in the last land give-away in the US. The newspaper headlines and tales of success lead them to the harsh desert valley of southern Oregon.',
      excerpt: 'On the third day of the journey, the landscape abruptly changed from pine forests to an immense juniper desert. Miles and miles of sagebrush grew everywhere. Small cabins and wooden shacks dotted the harsh desert terrain. An edgy worry began to enter Loie’s thoughts. She remembered the lakes and rivers of Wisconsin where she had grown up. It was lush, green countryside with farms covering the land. Even their home in Oregon City had tall, green trees and bubbling streams to fish in. This barren land had none of those elements.',
      purchaseLink: 'https://www.liferichpublishing.com/Bookstore/BookDetail.aspx?BookId=SKU-001239008',
      amazonLink: "https://www.amazon.com/dp/1489724249/ref=sr_1_1?keywords=sand+and+sagebrush+a+desert+journey&qid=1564273412&s=gateway&sr=8-1",
      barnesAndNobleLink: 'https://www.barnesandnoble.com/w/sand-and-sagebrush-ellie-derrick-lewis/1132694269?ean=9781489724243',
      published: 'July 26, 2019',
      image: sandAndSage
    },
    {
      title: 'Redding Writer',
      fullTitle: 'Redding Writer',
      description: `A young couple from Sacramento in the 1950's decide to move to a ranch in Shasta County near Redding, California.  She sees it as a chance to peruse her dreams to be a writer, and he wants to be a rancher.  They are unprepared for the changes this will make in their lives.`,
      excerpt: `The cabin was less than a day's ride from the main house but gave him and ranch hands a shelter for the night if the herd couldn't make the final stretch to the pasture at the ranch. In one room he put down six-foot planks for bunk beds, one set on each side of the room. In his room, however, he moved in a bed frame and wire coil mattress. The main room had a small kitchen area with space for an oblong table he also made. A small sitting area was at the opposite end of the room along with a rock fireplace. There were two windows in the cabin, one on each end of the main room.
      When Patsy saw the cabin she immediately wanted it as her sanctuary to peacefully write her stories. It was away from the business of running a ranch and the chores that were part of it.

      "Let me put a woman's touch to it," she begged Jim. He frowned at first, but her pleading eyes caused him to chuckle. "I can write here while you are gone, and then cook you a hot breakfast when you return.” It was an offer he couldn't refuse.`,
      purchaseLink: false,
      amazonLink: false,
      barnesAndNobleLink: false,
      published: 'Coming Soon',
      image: reddingWriter
    }
  ]

  const bookTitleList = ['Sand and Sagebrush', 'Redding Writer']


  return (
    <div>
     <NavBar/>
     <Switch>
      <Route path='/books' component={BookList}/>
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About}/>
      {booksInfo.map((book)=>
        <Route path={`/${book.title.split(" ").join("")}`}  render={(props)=>
          <BookPage
            title = {book.title}
            fullTitle = {book.fullTitle}
            description = {book.description}
            excerpt = {book.excerpt}
            purchaseLink = {book.purchaseLink}
            amazonLink = {book.amazonLink}
            barnesAndNobleLink = {book.barnesAndNobleLink}
            published = {book.published}
            image = {book.image}
         />}
      />)}
     </Switch>
    </div>
  );
}

export default App;
