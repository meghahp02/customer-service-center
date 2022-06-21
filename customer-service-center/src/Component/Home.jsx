import React from "react";
import img1 from "./Images/img1.jpg";


function Home(){
    return(
        <>
        <div className="d1">
    <div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
            <a class="nav-link btn btn-outline-primary bt1 lk" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link btn btn-outline-primary bt1 lk" href="#">Login</a>
            </li>
            <li class="nav-item">
            <a class="nav-link btn btn-outline-primary bt1 lk" href="#">Customer</a>
            </li>
            <li class="nav-item">
            <a class="nav-link btn btn-outline-primary bt1 lk" href="#">Operator</a>
            </li>
        </ul>
    </div>
        <div className="container ct1">
  <div className="row">
    <div className="col">
      <h2 className="head1">Online Customer Service Center.</h2>
      <h4 className="head2">We are always available for you.</h4>
      <button type="button" className="btn btn-outline-success bt1">Get Started</button>
    </div>
    <div class="col">
    <img src={img1} alt="Header Image" className="pic"/>
    </div>
  </div>
  </div>
  </div>
        </>
    );
}

export default Home;