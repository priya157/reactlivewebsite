import React from 'react';
// import web from "../src/Images/img10.jpg";
import Sdata from './Sdata';

import Card from './Card';

const Service = () => {
  return (
    <>
   
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                     {
                         Sdata.map((item,i)=>{
                            return (
                            <>
                                <Card key={i}
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

export default Service;