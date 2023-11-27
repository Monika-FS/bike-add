import React from "react";
import logo from "file:///C:/Users/HP/Downloads/logo.svg";
function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid right-header">
          <img src={logo} alt="" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav left-header">
            <a className="nav-link active" aria-current="page" href="#">
              {props.home}
            </a>
            <a className="nav-link" href="#">
              {props.products}
            </a>
            <a className="nav-link" href="#">
              {props.Gallary}
            </a>
            <a className="nav-link disabled" aria-disabled="true">
              {props.contact}
            </a>
            <button>{props.button}</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
