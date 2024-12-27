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
                    src={`${process.env.PUBLIC_URL}/resources/images/core/humanix_logo.png`}
                    alt="Proskillhub"
                  />
                  <img
                    className="logo-scroll"
                    src={`${process.env.PUBLIC_URL}/resources/images/core/humanix_logo.png`}
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
                      <li><Link to="/IT-consulting">IT Consulting</Link></li>
                      <li><Link to="/Permanent-staffing">IT Staffing(Permanent)</Link></li>
                      <li><Link to="/Temporary-staffing">IT Staffing(Temporary)</Link></li>
                      <li><Link to="/Staff-augmentation">Staff Argumentaion</Link></li>
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <Link to="#">Hire Developer</Link>
                    <ul className="sub-menu">
                      <li><Link to="/our-team">Our Developers</Link></li>
                      <li><Link to="/our-process">Our Process</Link></li>
                      <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                  </li> */}
                  {/* <li><Link to="/portfolio-grid">Portfolio</Link></li> */}
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
              src={`${process.env.PUBLIC_URL}/resources/images/core/humanix_logo.png`}
              alt="proskillhub"
            />
          </Link>
        </div>
        <div className="octf-btn-cta"></div>
        <div id="mmenu_toggle">
          <button 
          onClick={()=>{
            let mmenu = document.getElementById('mmenu_toggle');
            if (mmenu.classList.contains( "active" )) {
              mmenu.classList.remove( "active" );
              document.querySelector('.mobile_nav').style.display = 'none'; 
            }else{
              mmenu.classList.add( "active" );
              document.querySelector('.mobile_nav').style.display = 'block';
            }
          }}
          ></button>
        </div>
      </div>
      <div className="mmenu_wrapper">
        <div className="mobile_nav">
          <ul id="menu-main-menu" className="mobile_mainmenu">
            <li className="current-menu-item"><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className="menu-item-has-children">
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li><Link to="/IT-consulting">IT Consulting</Link></li>
                      <li><Link to="/Permanent-staffing">IT Staffing(Permanent)</Link></li>
                      <li><Link to="/Temporary-staffing">IT Staffing(Temporary)</Link></li>
                      <li><Link to="/Staff-augmentation">Staff Argumentaion</Link></li>
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
