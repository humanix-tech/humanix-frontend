import React from 'react'

export default function Contact() {
  return (
    <>
    <div id="content" className="site-content">
  <div className="page-header dtable text-center" style={{ backgroundImage: "url(resources/images/banner-.jpg)" }}>
    <div className="dcell">
      <div className="container">
        <h1 className="page-title">Contacts</h1>
        <ul id="breadcrumbs" className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li className="active">Contacts</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="p-t110 z-index-1 section-contact">
    <div className="container">
      <div className="row flex-row">
        <div className="col-md-6 col-xs-12 sm-m-b60">
          <div className="our-contact text-light">
            <div className="ot-heading text-light">
              <h6><span>contact details</span></h6>
              <h2 className="main-heading">Our Contacts</h2>
            </div>
            <p className="m-b45">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>
            <div className="contact-info text-light m-b30">
              <i className="flaticon-world"></i>
              <div className="info-text">
                <h6>Our Address:</h6>
                <p>Shalimar swayam, bhangarh, Near, MR 10 Rd, Indore, Madhya Pradesh 453555</p>
              </div>
            </div>
            <div className="contact-info text-light m-b30">
              <i className="flaticon-note"></i>
              <div className="info-text">
                <h6>Our mailbox:</h6>
                <p><a href="mailto:info@proskillhub.com">info@humanixtechnologies.com</a></p>
              </div>
            </div>
            <div className="contact-info text-light">
              <i className="flaticon-viber"></i>
              <div className="info-text">
                <h6>Our phones:</h6>
                <p><a href="tel:8889332444">+91 8889332444</a></p>
                <p><a href="tel:6263070705">+91 6263070705</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 align-self-center">
          <div className="form-contact">
            <div className="ot-heading">
              <h6><span>GET IN TOUCH</span></h6>
              <h2 className="main-heading">Ready to Get Started?</h2>
            </div>
            <form action="resources/functions/form-process.php" method="post" role="form" className="form wpcf7-form">
              <div className="form-group wpcf7-form">
                <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
              </div>
              <div className="form-group wpcf7-form-control-wrap">
                <input type="text" name="name" id="name" className="contact-input" placeholder="Enter your name*" data-rule="required" data-msg="Please enter your name" />
                <div className="form-validate"></div>
              </div>
              <div className="form-group wpcf7-form-control-wrap">
                <input type="email" name="email" id="email" className="contact-input" placeholder="Enter your email address" data-rule="required" data-msg="Please enter your email address" />
                <div className="form-validate"></div>
              </div>
              <div className="form-group wpcf7-form-control-wrap">
                <input type="number" id="mobile" name="mobile" className="contact-input" placeholder="Enter your mobile number" onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} maxLength="10" data-rule="minlen:10" data-msg="Please enter your mobile number" />
                <div className="form-validate"></div>
              </div>
              <div className="form-group wpcf7-form-control-wrap">
                <input type="text" name="message" id="message" className="contact-input" placeholder="Enter your message" />
              </div>
              <p>
                <button type="submit" className="octf-btn octf-btn-primary octf-btn-icon">
                  Send Message <i className="flaticon-right-arrow-1"></i>
                </button>
              </p>
              <div className="form-loading">Loading</div>
              <div className="form-error-message"></div>
              <div className="form-sent-message">Thank you for contacting us!</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8129781636103!2d75.87456877540382!3d22.77232087934997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1c47d92e37%3A0x2f1b2d41363452e5!2sShalimar%20Swayam%20flat%20scheme!5e0!3m2!1sen!2sin!4v1735239592341!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</div>

    </>
  )
}
