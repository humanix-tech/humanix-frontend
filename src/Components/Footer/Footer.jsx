import React from 'react'

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer bg-gradient footer-top-bottom">
    <div className="footer-shape-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="footer-shape-fill"
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
    </div>
    <div className="container">
        <div className="footer-logo text-center">
            <img src="resources/images/core/humanix_logo.png" className="attachment-large size-large" alt="" />
        </div>
        <div className="flex-col">
            <div className="ft-col-contact text-center">
                <div className="contact-info box-style2 text-light">
                    <div className="box-icon"><i className="flaticon-world"></i></div>
                    <p>Shalimar sawam 6th Floor Indore (MP)</p>
                    <h6>Our Address</h6>
                </div>
            </div>
            <div className="ft-col-contact text-center border-left border-right">
                <div className="contact-info box-style2 text-light">
                    <div className="box-icon"><i className="flaticon-note"></i></div>
                    <p><a href="mailto:info@proskillhub.com">info@humanixtechnologies.com</a></p>
                    <h6>Email</h6>
                </div>
            </div>
            <div className="ft-col-contact text-center">
                <div className="contact-info box-style2 text-light">
                    <div className="box-icon"><i className="flaticon-viber"></i></div>
                    <p><a href="tel:8889332444">+91 8889332444</a></p>
                    <p><a href="tel:6263070705">+91 6263070705</a></p>
                    <h6>Mobile</h6>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-menu">
            <ul id="menu-footer-menu" className="menu">
                <li><a href="index.html" aria-current="page">Home</a></li>
                <li><a href="about-us.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="contacts.html">Contacts</a></li>
            </ul>
        </div>
        <p className="copyright text-center"> ©
            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
            <script>new Date().getFullYear()  2010 && document.write("" + new Date().getFullYear());</script> All
            Rights Reserved By <a href="https://proskillhub.com">Humanix Technologies</a>
        </p>
        <div className="footer-social text-center">
            <a className="footer-social-icon facebook" href="https://www.facebook.com/proskillhub" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-facebook-f"></i></a>
            <a className="footer-social-icon linkedin" href="https://www.linkedin.com/company/proskillhub/"
                target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a className="footer-social-icon instagram" href="https://www.instagram.com/proskillhub/" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-instagram"></i></a>
        </div>
    </div>
</footer>

  )
}
