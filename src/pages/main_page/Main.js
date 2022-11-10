import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
    
    <div className="main--container">

      {/* container effects */}
      <div className="header--container--side"></div>
      <div className="light-effect-mid"></div>
      <div className="light-effect-right"></div>

      {/* header section */}
      <div className="header mt-3 mx-5">
        <p className="logo--text">MR.</p>
        <ul className="header-tabs">
          <li>Home</li>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>
            <button className="btn btn-outline-light">Log in</button>
          </li>
          <li>
            <button className="btn btn-outline-light">Sign up</button>
          </li>
        </ul>
      </div>

      <div className="prop">
        <div className="row mx-5 mt-5">
          <div className="col-md-6 d-flex flex-column g-3 d-none">
            <p className="font--style">Insights. Ideas. Inspiration</p>
            <div className="flex--props ml-sm-0 ml-md-5">
              <img
                className="image--style"
                src="img/undraw_profile_1.svg"
                alt=""
              />
              <p>
                we blend insights and strategies to create digital products for
                forward-thinking organisations.
              </p>
            </div>
            <div className="d-flex align-items-center play--button ml-5 ml-md-auto">
              <img className="image--style ml-md-0" src="img/play-button.png" alt="" />
              <p>How it works</p>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src="img/person-image-1.png" alt="" />
          </div>
        </div>
      </div>


    </div>

    <h2>another one</h2>
    </>
  );
};

export default Main;

// colors : #5c20ff  #9a7ddb
