import React from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import aboutImg from "../images/aboutImg.jpg"

function About() {
    return (
      <div className="">
          <Fade bottom duration={1500}>
         <h1 className="header">About Me</h1>
         <div className="aboutSection">
            <img src={aboutImg} className="aboutImg"/>
            <p className="aboutText">I have always had an excitement for writing. I don't know if it started during high school
            journalism class, or writing term papers. Before the days of texting, I liked writing letters as well. A
            Thesaurus was a book I always had near me. With an active life of working full time and raising my
            children, I had little time to even consider writing a book. The day finally came though, when I
            retired and could settle down at the computer.
            <br/>
            I grew up in Portland, Oregon, and have lived in the West most of my life. It seems only
            natural my stories would be about farming, ranching, rodeos, county fairs, and homesteading. I
            like that type of life and enjoy writing about it. I belong to the organizations Women Writing the
            West, Chrysalis Women's Writers, and the Northwest Independent Writers Association .</p>
         </div>
         <style jsx>{`
            .header{
                text-align: center;
                font-size: 60px;
                margin-top: 5%;
            }
            .aboutSection{
                display: flex;
                flex-flow: row wrap;
                margin-top: 5%;
                margin-bottom: 3%;
            }
            .aboutImg{
                height: 600px;
                width: 450px;
                margin-left: 15%;
            }
            .aboutText{
                text-align: center;
                width: 700px;
                margin-left: 5%;
            }
         `}</style>
         </Fade>
      </div>
    );
  }
  export default About;