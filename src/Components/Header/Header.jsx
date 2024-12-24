import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>

<header id="site-header" className="site-header header-style-1 header-overlay header-fullwidth sticky-header">
  <div className="octf-main-header">
    <div className="octf-area-wrap">
      <div className="container-fluid octf-mainbar-container">
        <div className="octf-mainbar">
          <div className="octf-mainbar-row octf-row">
            <div className="octf-col">
              <div id="site-logo" className="site-logo">
                <Link to="/">
                  <img
                    className="logo-static"
                    src={`${process.env.PUBLIC_URL}/resources/images/core/humanix-logo.png`}
                    alt="Proskillhub"
                  />
                  <img
                    className="logo-scroll"
                    src={`${process.env.PUBLIC_URL}/resources/images/core/humanix-logo.png`}
                    alt="Proskillhub"
                  />
                </Link>
              </div>
            </div>
            <div className="octf-col">
              <nav id="site-navigation" className="main-navigation">
                <ul id="primary-menu" className="menu">
                  <li className="current-menu-item"><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li><Link to="/frontend-development">IT Consulting</Link></li>
                      <li><Link to="/backend-development">IT Staffing(Permanent)</Link></li>
                      <li><Link to="/full-stack-developer">IT Staffing(Temporary)</Link></li>
                      <li><Link to="/data-science">Staff Argumentaion</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Hire Developer</Link>
                    <ul className="sub-menu">
                      <li><Link to="/our-team">Our Developers</Link></li>
                      <li><Link to="/our-process">Our Process</Link></li>
                      <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/portfolio-grid">Portfolio</Link></li>
                  <li><Link to="/contact">Contacts</Link></li>
                </ul>
              </nav>
            </div>
            <div className="octf-col text-right">
              <div className="octf-btn-cta">
                <div className="octf-header-module">
                  <div className="toggle_search octf-cta-icons">
                    <i className="flaticon-search"></i>
                  </div>
                  <div className="h-search-form-field">
                    <div className="h-search-form-inner">
                      <form role="search" method="get" id="search-form" className="search-form" action="#">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search…"
                          name="s"
                        />
                        <button type="submit" className="search-submit">
                          <i className="flaticon-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header_mobile">
    <div className="container">
      <div className="mlogo_wrapper clearfix">
        <div className="mobile_logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/resources/images/core/logo.png`}
              alt="proskillhub"
            />
          </Link>
        </div>
        <div className="octf-btn-cta"></div>
        <div id="mmenu_toggle">
          <button></button>
        </div>
      </div>
      <div className="mmenu_wrapper">
        <div className="mobile_nav">
          <ul id="menu-main-menu" className="mobile_mainmenu">
            <li className="current-menu-item"><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className="menu-item-has-children">
              <Link to="#">Courses</Link>
              <ul className="sub-menu">
                <li><Link to="/frontend-development">Frontend Development</Link></li>
                <li><Link to="/backend-development">Backend Development</Link></li>
                <li><Link to="/full-stack-developer">Full Stack Developer</Link></li>
                <li><Link to="/data-science">Data Science</Link></li>
                <li><Link to="/business-development">Business Development</Link></li>
                <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link to="/interview-preparation">Interview Preparation</Link></li>
                <li><Link to="/soft-skills">Soft Skills</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="#">Hire Developer</Link>
              <ul className="sub-menu">
                <li><Link to="/our-team">Our Developers</Link></li>
                <li><Link to="/our-process">Our Process</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </li>
            <li><Link to="/portfolio-grid">Portfolio</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  );
}
