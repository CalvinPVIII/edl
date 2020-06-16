import React from 'react';
import { Link } from 'react-router-dom'


function NavBar() {
    return (
      <div className="navbarWrap">
          <div className="navbarLeftSide">
          <Link to={"/books"}><h4>Books</h4></Link>
          <Link to={"/about"}><h4>About</h4></Link>
          </div>
          <div className="navbarMiddle">
          <Link to={'/'}><h2 className="title">Ellie Derrick Lewis</h2></Link>

          </div>
          <div className="navbarRightSide">

          <Link to={"/gallery"}><h4>Gallery</h4></Link>
          <Link to={"/contact"}><h4>Contact</h4></Link>

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
          `}</style>
      </div>
    );
  }
  export default NavBar;