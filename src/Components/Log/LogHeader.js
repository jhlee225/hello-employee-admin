import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="header-nav-wrapper">
        <header>
          <div className="header-container">
            <Link to="/Home">
              <h1 className="header-logo">Hello Employee</h1>
            </Link>
          </div>
        </header>
        <nav>
          <div className="nav-container">
            <ul className="globalnav">
              <li>
                <Link to="/Home">직원</Link>
              </li>
              <li>
                <Link to="/Todo">일정</Link>
              </li>
              <li>
                <Link to="/Log" className="current">
                  근태
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
