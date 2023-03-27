import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark color-dark footer__container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mt-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

        <ul className="nav col-md-5 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
