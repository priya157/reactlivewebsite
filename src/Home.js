import React from 'react';
import { NavLink } from "react-router-dom";
import web from "../src/Images/img1.png";
import Common from './Common';
import HomeCard from './HomeCard';
import Shomedata from './Shomedata';


const Home = () => {
  return (
    <>
       <Common 
       name="Grow Your Business with"
       imgsrc={web}
       visit="/service"
       btnName="Get Started"/>
       <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                     {
                         Shomedata.map((item,i)=>{
                            return (
                            <>
                                <HomeCard key={i}
                                imgsrc={item.imgsrc} 
                                title={item.title} 
                                />
                            </>
                            )
                        })
                     }                   
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;