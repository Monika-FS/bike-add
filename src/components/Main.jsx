import React from "react";
import Ellipse from "file:///C:/Users/HP/Downloads/Ellipse%207.svg";
import bike from "file:///C:/Users/HP/Downloads/image.svg";
function Main() {
  return (
    <>
      <div className="main-section">
        <div className="left-main">
          <h3 className="ride">let's Ride the</h3>
          <h1 className="future">FUTURE</h1>
          <p className="para">Simple and sleek design with users in mind.</p>
          <button className="btn">Pre-Odrer</button>
        </div>
        <div className="right-main">
          <h1 className="ev">EV-B</h1>
          <img src={bike} className="bike" alt="" />
          <img src={Ellipse} className="ellipse" alt="" />
        </div>
      </div>
    </>
  );
}

export default Main;
