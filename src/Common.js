import React from 'react';
import { NavLink } from "react-router-dom";
import web from "../src/Images/img1.png";


const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg bg-light">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 left_section">
                                <h1>{props.name}<strong  className="brand-name"> ReactApp</strong></h1>
                                <h2 className="my-3">We are the team of talented developer making website</h2>
                                <div className="mt-3">
                                    <NavLink to="{visit}" className="btn-get-started btn btn-primary">{props.btnName}
                                    </NavLink>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 header-img">
                                <img className="first_img" src={props.imgsrc}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Common;