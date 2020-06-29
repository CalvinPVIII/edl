import React from 'react';
import { Link, useLocation } from 'react-router-dom'


function NavBar() {
    const currentPath = useLocation().pathname
    let books;
    let about;
    let contact;
    let gallery;

    if (currentPath === '/books'){
        books = (
            <Link to={"/books"}><h4 className='currentPath'>Books</h4></Link>
        )
    }else{
        books = (
            <Link to={"/books"}><h4>Books</h4></Link>
        )
    }

    if (currentPath === '/about'){
        about = (
            <Link to={"/about"}><h4 className='currentPath' >About</h4></Link>
        )
    }else{
        about = (
            <Link to={"/about"}><h4 >About</h4></Link>
        )
    }
    
    if (currentPath === '/gallery'){
        gallery = (
            <Link to={"/gallery"}><h4 className='currentPath'>Gallery</h4></Link>
        )
    }else{
        gallery = (
            <Link to={"/gallery"}><h4>Gallery</h4></Link>
        )
    }

    if (currentPath === '/contact'){
        contact = (
            <Link to={"/contact"}><h4 className='currentPath'>Contact</h4></Link>
        )
    }else{
        contact = (
            <Link to={"/contact"}><h4>Contact</h4></Link>
        )
    }

    return (
      <div className="navbarWrap">
          <div className="navbarLeftSide">
          {books}
          {about}
          </div>
          <div className="navbarMiddle">
          <Link to={'/'}><h2 className="title">Ellie Derrick Lewis</h2></Link>

          </div>
          <div className="navbarRightSide">

          {gallery}
          {contact}

          </div>
          <style jsx>{`
            .navbarWrap{
                display: flex;
                justify-content: space-around;
            }

            .navbarLeftSide, .navbarMiddle, .navbarRightSide{
                display: flex;
                justify-content: space-between;
            }
            .navbarMiddle {
                text-align: center;
            }
            h4 {
                padding: 2vh;
            }

            .title{
                color: black;
            }

            a, a:visited {
                text-decoration: none;
                color: grey;
            }

            a:hover{
                color: black;
            }

            .currentPath {
                color: black;
            }
          `}</style>
      </div>
    );
  }
  export default NavBar;