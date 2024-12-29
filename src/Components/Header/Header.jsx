import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui"
import { useEffect } from 'react';
export default function Header({isActive}) {
console.log("isActive",isActive)
  useEffect(()=>{
    (function($) {

      /* ========================================== 
    Sticky Header 1
    ========================================== */
    $(window).on("scroll", function(){
      if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
        var site_header = $('#site-header').outerHeight() + 30;	
        
          if ($(window).scrollTop() >= site_header) {	    	
              $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	        
          }else {
              $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
          }
      }
    });
  
    /* ========================================== 
    Sticky Header 2
    ========================================== */
    if ($('.cd-header').length) {
      //if you change this breakpoint in the style.css file, don't forget to update this value as well
      var MQL = 1170;
  
      //primary navigation slide-in effect
      if($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll',
        {
              previousTop: 0
          }, 
          function () {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop ) {
              //if scrolling up...
              if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                $('.cd-header').addClass('is-visible');
              } else {
                $('.cd-header').removeClass('is-visible is-fixed');
              }
            } else {
              //if scrolling down...
              $('.cd-header').removeClass('is-visible');
              if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
      };
    }
  
    /* ========================================== 
    Search on Header
    ========================================== */
    $('.toggle_search').on("click", function(){
      $(this).toggleClass( "active" );
          $('.h-search-form-field').toggleClass('show');
          if ($(this).find('i').hasClass( "flaticon-search" )) {
             $('.toggle_search > i').removeClass( "flaticon-search" ).addClass("flaticon-delete");
          }else{
             $('.toggle_search > i').removeClass( "flaticon-delete" ).addClass("flaticon-search");
          }
          $('.h-search-form-inner > form > input.search-field').focus();
      });
  
      /* ========================================== 
    Header Mobile
    ========================================== */
    /* mobile_mainmenu create span */
    $('.mobile_mainmenu li:has(ul)').prepend('<span class="arrow"><i class="flaticon-arrow-point-to-right"></i></span>');
  
    $( "#mmenu_toggle" ).on('click', function() {
      console.log("Working!!!")
      $(this).toggleClass( "active" );
      if ($(this).hasClass( "active" )) {
        $('.mobile_nav').stop(true, true).slideDown();
      }else{
        $('.mobile_nav').stop(true, true).slideUp();
      }		
    });
  
    $(".mobile_mainmenu > li span.arrow").click(function() {
          $(this).parent().find("> ul").stop(true, true).slideToggle()
          $(this).toggleClass( "active" ); 
      });
  
    /* ========================================== 
    Back To Top
    ========================================== */
      if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });	
      };
  
  })($);
  },[])
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
                  <li className={isActive === "Home" ? "current-menu-item":"" }><Link to="/">Home</Link></li>
                  <li className={isActive === "About" ? "current-menu-item":"" }><Link to="/about">About Us</Link></li>
                  <li className={isActive === "Services" ? "menu-item-has-children current-menu-item" : "menu-item-has-children" }>
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
                  <li className={isActive === "contacts" ? "current-menu-item":"" }><Link to="/contact">Contacts</Link></li>
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
          <button></button>
        </div>
      </div>
      <div className="mmenu_wrapper">
        <div className="mobile_nav">
          <ul id="menu-main-menu" className="mobile_mainmenu">
            <li className={isActive === "Home" ? "current-menu-item":"" }><Link to="/">Home</Link></li>
            <li className={isActive === "About" ? "current-menu-item":"" }><Link to="/about">About Us</Link></li>
            <li className={isActive === "Services" ? "menu-item-has-children current-menu-item" : "menu-item-has-children" }>
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
            </li>
            <li><Link to="/portfolio-grid">Portfolio</Link></li> */}
            <li className={isActive === "contacts" ? "current-menu-item":"" }><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  );
}
