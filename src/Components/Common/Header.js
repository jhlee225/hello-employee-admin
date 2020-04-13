import React from "react";
function Header(props) {
  return (
    <>
      <div className="header-nav-wrapper">
        <header>
          <div className="header-container">
            <a href="/#/Home">
              <h1 className="header-logo">Hello Employee</h1>
            </a>
          </div>
        </header>
        <nav>
          <div className="nav-container">
            <ul className="globalnav">
              <li>
                <a href="/#/Home" className="current">
                  직원
                </a>
              </li>
              <li>
                <a href="/#/Todo">근무</a>
              </li>
              <li>
                <a href="/#">작업</a>
              </li>
              <li>
                <a href="/#">급여</a>
              </li>
              <li>
                <a href="/#">사업장</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
