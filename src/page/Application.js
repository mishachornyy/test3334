import React from "react";
import "../style/Application.css"
import Footer from "../component/Footer";
import {Link, Route, Routes} from "react-router-dom";

import circle from "../assests/circle.png";
import line from "../assests/cyrcle-line.png";


function Application() {
  return ( <>

    <div className="step">
      <div className="step-text">
        <h1>Step 1</h1>
        <h2>Step 2</h2>
        <h2>Step 3</h2>
        <h2>Step 4</h2>
        <h2>Step 5</h2>

      </div>
      <div className="circle-line">
      <div className="circle">
        <img src={circle} alt="circle "/>
      </div>
      <div className="line">
      </div>
        <div className="circle">
          <img src={line} alt="circle "/>
        </div>
        <div className="line">
        </div>
        <div className="circle">
          <img src={line} alt="circle "/>
        </div>
        <div className="line">
        </div>
        <div className="circle">
          <img src={line} alt="circle "/>
        </div>
        <div className="line">
        </div>
        <div className="circle">
          <img src={line} alt="circle "/>
        </div>
      </div>


      <div className="step1">

        <div className=" step1-text  flex-col   ">
          <div className='br-text'>
          <h1 className="h22">Business Licence Registration</h1>
            <div className="register">
              <h2>Business Info:</h2>
            </div>
            <div className="register">
              <h6 className="name">Full Legal Name of Business: *</h6>
              <input type="Full" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6 > First  Name : *</h6>
              <input  type="first-name" pattern="" placeholder=""/>
              <h6 className="Mi" >MI </h6>
              <input  type="MI" pattern="" placeholder=""/>
              <h6 className="Mi" >Last Name : * </h6>
              <input  type="last-name" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6>Business Trade Name(s) <br></br>(doing business as) if you have any: </h6>
              <input type="name" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6>Last 4 digits of Federal ID/SSN :  * </h6>
              <input type="id" pattern="" placeholder=" Last 4 ONLY"  maxlength="4"/>
            </div>
            <div className="register">
              <h6>Complate Address of Business in<br></br>Location: * </h6>
              <input type="location" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6 > City : *</h6>
              <input  type="city" pattern="" placeholder=""/>
              <h6>State :  *</h6>
              <select name="state">
                <option value="1">test1</option>
                <option value="2">test2</option>
                <option value="3">test3</option>

              </select>
              <h6 >Zip Code :  *</h6>
              <input  type="zip-code" pattern="" placeholder=""/>

            </div>
            <div className="register">
              <h6>Complate Malling Address if Different<br></br>from above: * </h6>
              <input type="location-different" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6 > City : *</h6>
              <input  type="city" pattern="" placeholder=""/>
              <h6>State :  *</h6>
              <select name="state">
                <option value="1">test1</option>
                <option value="2">test2</option>
                <option value="3">test3</option>

              </select>
              <h6 >Zip Code :  *</h6>
              <input  type="zip-code" pattern="" placeholder=""/>

            </div>
            <div className="register">
              <h6>Day time<br></br>Phone # :  * </h6>
              <input type="data" pattern="" placeholder=""/>
            </div>
            <div className="register">
              <h6>Other Phone #:  </h6>
              <input type="phone" pattern="" placeholder=""/>
              <h6>Fax #:</h6>
              <input type="fax" pattern="" placeholder=""/>
            </div>


              <div className="register-button">
                <div className="back">
                <Link to="/Application">Back</Link>
                </div>
                <div className="next">
                  <Link to="/Application/step2">Next</Link>
                </div>




              </div>



          </div>
        </div>
      </div>



    </div>


      <Footer />
    </>
  )
}

export default Application;
