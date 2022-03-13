import React from 'react'   ;
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <>
            <footer className="w-100 bg-light text-center">
{/*         
<footer class="page-footer font-small blue pt-4"> */}

  <div class="container-fluid text-center text-md-left">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>

        </div>
  
        <hr class="clearfix w-100 d-md-none pb-3"/>

        <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
                <li>
                    <NavLink to="#!">Link 1</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 2</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 3</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 4</NavLink>
                </li>
            </ul>

        </div>

        <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
                <li>
                    <NavLink to="#!">Link 1</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 2</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 3</NavLink>
                </li>
                <li>
                    <NavLink to="#!">Link 4</NavLink>
                </li>
            </ul>

        </div>


    </div>
 

  </div>
  
  <div class="footer-copyright text-center py-3">© 2020 React App. All Right Reserved | Terms and Condition</div>
                {/* <p> © 2021 React App. All Right Reserved | Terms and Condition</p> */}
            </footer>
        </>
    )
}

export default Footer