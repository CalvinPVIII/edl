import React from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import homestead1 from '../images/homesteader_reunion/1.jpg'
import homestead2 from '../images/homesteader_reunion/2.jpg'
import homestead3 from '../images/homesteader_reunion/3.jpg'
import homestead4 from '../images/homesteader_reunion/4.jpg'
import homestead5 from '../images/homesteader_reunion/5.jpg'
import nwWriters1 from '../images/northwest_writers/1.jpg' 
import nwWriters2 from '../images/northwest_writers/2.jpg' 
import nwWriters3 from '../images/northwest_writers/3.jpg' 


function Gallery() {

    const homesteadImages = [homestead1, homestead2, homestead3, homestead4, homestead5,]
    const nwWritersImages = [nwWriters1, nwWriters2, nwWriters3]

    return (
      <div className="">
          <Fade bottom={1000}>
        <h1 className='header'>Gallery</h1>
        </Fade>
        <div className='section'>
            <div className='sectionInfo'>
                <p className="sectionTitle">Northwest Independant Writers Association</p>
                <p className="sectionDate">October 4 2019</p>
                <div className="sectionImages">
                    {nwWritersImages.map((image)=>
                        <img className="image" src={image}/>
                    )}

                </div>
            </div>
            
        </div>
        <div className='section'>
            <div className='sectionInfo'>
                <p className="sectionTitle">Fort Rock Homesteader Reunion </p>
                <p className="sectionDate">September 7 2019</p>
                <div className="sectionImages">
                    {homesteadImages.map((image)=>
                        <img className="image" src={image}/>
                    )}

                </div>
            </div>
        </div>
      <style jsx>{`
        .header{
            text-align: center;
            font-size: 6vh;
            margin-top: 5%;
        }

        .section{
            margin: 10%;
            animation: fadeIn 2s;
        }

        @keyframes fadeIn{
            0% {opacity: 0%;}
            100% {opacity: 100%}
       }
        
        .sectionImages{
            display: flex;
            flex-flow: row wrap;
            
        }
        .image{
            width: auto;
            height: 300px;
            padding: 1%;
        }
      `}</style>
      </div>
    );
  }
  export default Gallery;