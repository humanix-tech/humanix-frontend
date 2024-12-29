import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Header from '../Header/Header';


export default function Main() {
  const techImages = [
    'node.png','rails.png','react.png','js.png','java.png','net_logo.svg.png','angular.png','python.png'];

  return (
  <>
    <Header isActive={"Home"}/>
    <div id="content" className="site-content">
    <section className="banner big-padding-top bg-banner-gradient particles-js" data-color="#ffffff, #00c3ff, #fe4c1c" data-id="i1">
      <div className="bg-overlay-1"></div>
      <div className="shape shape-bottom" data-negative="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
      </div>
      <div className="banner-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="banner-stitle m-b55 xs-m-b40">Hire On Demand Developers<br></br><span className="text-second">Whatever your requirements we’ll connect you with the perfect candidates to drive your business forward.</span></h2>
              <div className="wpcf7 lead">
                <div className="screen-reader-response"></div>
                <form action="resources/functions/lead-form-process.php" method="POST" className="lead-form wpcf7-form">
                  <div className="one-line-form">
                    <span>
                      <input type="text" className="lead-text form-control" name="name" id="name" placeholder="Enter your name" required />
                    </span>
                    <span className="your-mobile">
                      <input type="number" className="lead-text form-control" name="mobile" id="mobile" placeholder="Enter your mobile number" maxLength="10" required />
                    </span>
                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                    <button type="submit" className="octf-btn octf-btn-icon octf-btn-primary">Start Now<i className="flaticon-right-arrow-1"></i></button>
                  </div>
                  <div className="form-group">
                    <div className="form-loading">Loading</div>
                    <div className="form-error-message"></div>
                    <div className="form-sent-message">Thank you for contacting us!</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* 
    <section className="about-home bg-light">
      <div className="container">
        <div className="about-home-img text-center">
          <img src={`${process.env.PUBLIC_URL}/resources/images/topimg-home1.png`} alt="ProSkillHub" />
        </div>
      </div>
    </section> */}

    <section className="seo-about p-b30">
      <div className="shape shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <div className="top-up">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="icon-box s3 box-hover-gradient text-center">
                <div className="bg-s3"></div>
                <div className="bg-before" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg1-box.png) top left no-repeat #fff` }}></div>
                <div className="bg-after" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg2-box.png) bottom right no-repeat #fff` }}></div>
                <div className="icon-main"> <span className="flaticon-startup"></span> </div>
                <div className="content-box">
                  <h5>IT Consulting</h5>
                  <p>Humanix Technologies streamline complexity to deliver digital success, helping you achieve cost savings of 70-75%.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50">
              <div className="icon-box s3 box-hover-gradient text-center">
                <div className="bg-s3"></div>
                <div className="bg-before" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg1-box2.png) top left no-repeat #fff` }}></div>
                <div className="bg-after" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg2-box2.png) bottom right no-repeat #fff` }}></div>
                <div className="icon-main"> <span className="flaticon-system"></span> </div>
                <div className="content-box">
                  <h5>Permanent Staffing</h5>
                  <p>With a talent pool of over 2,000 top-tier professionals and expertise across diverse technologies, we ensure recruitment in a short timeframe.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 xs-m-t50">
              <div className="icon-box s3 box-hover-gradient text-center">
                <div className="bg-s3"></div>
                <div className="bg-before" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg1-box3.png) top right no-repeat #fff` }}></div>
                <div className="bg-after" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg2-box3.png) bottom left no-repeat #fff` }}></div>
                <div className="icon-main"> <span className="flaticon-internet"></span> </div>
                <div className="content-box">
                  <h5>Temporary Staffing</h5>
                  <p>
                  Over 1,000+ skilled professionals, swift short-term placements, 100% data security, and immediate processing.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50">
              <div className="icon-box s3 box-hover-gradient text-center">
                <div className="bg-s3"></div>
                <div className="bg-before" style={{ background: `url(${process.env.PUBLIC_URL}/resources/images/bg1-box2.png) top left no-repeat #fff` }}></div>
                <div className="bg-after"></div>
                <div className="icon-main"> <span className="flaticon-report"></span> </div>
                <div className="content-box">
                  <h5>Staff Augmentation</h5>
                  <p>Fast and efficient, 100% personalized, and completely adaptable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*     
    <section className="container">
        <div className="row p-b40">
          <div className="col-sm-8 xs-m-b40">
            <div className="ot-heading">
              <h2 className="main-heading">Meet Our Selected Candidates</h2>
            </div>
            <p className="m-b0">ProskillHub transforms you into a highly skilled Software Professional</p>
          </div>
          <div className="col-sm-4">
            <div className="ot-button text-right xs-text-left m-t15">
              <a href="candidates.html" className="octf-btn octf-btn-primary octf-btn-icon">
                <span>All Candidates <i className="flaticon-right-arrow-1"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-b75">
            <div className="team-slider">
              {[
                { name: 'Yogendra Mohan', role: 'Backend Developer', img: 'condidate-1.jpg', github: 'https://github.com/SuryaPratapSing', linkedin: 'https://www.linkedin.com/in/iamsinghsurya/' },
                { name: 'Gourav Sengar', role: 'RoR Developer', img: 'condidate-10.jpg', github: '#', linkedin: '#' },
                { name: 'Ankit Pandey', role: 'Backend Developer', img: 'condidate-3.jpg', github: '#', linkedin: '#' },
                { name: 'Sanjana Patel', role: 'Backend Developer', img: 'condidate-4.jpg', github: '#', linkedin: '#' },
                { name: 'Shankarshan Mishra', role: 'Backend Developer', img: 'condidate-5.jpg', github: '#', linkedin: '#' },
                { name: 'Krishna Mishra', role: 'Byju\'s', img: 'condidate-6.jpg', github: '#', linkedin: '#' },
                { name: 'Prabal Pathak', role: 'RoR Developer', img: 'condidate-7.jpg', github: '#', linkedin: '#' },
                { name: 'Laxmi Mishra', role: 'RoR Developer', img: 'condidate-8.jpg', github: '#', linkedin: '#' },
                { name: 'Prabhat Mishra', role: 'React Developer', img: 'condidate-9.jpg', github: '#', linkedin: '#' },
                { name: 'Abhinav Kushwaha', role: 'RoR Developer', img: 'condidate-11.jpg', github: '#', linkedin: '#' },
                { name: 'Rohit Mishra', role: 'Physicswallah', img: 'condidate-2.jpg', github: '#', linkedin: '#' }
              ].map((candidate, index) => (
                <div className="team-wrap" key={index}>
                  <div className="team-thumb">
                    <img src={`resources/images/students/${candidate.img}`} alt={candidate.name} />
                  </div>
                  <div className="team-info">
                    <h4>{candidate.name}</h4>
                    <span>{candidate.role}</span>
                    <div className="team-social">
                      <a className="github" target="_blank" href={candidate.github}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a className="linkedin" target="_blank" href={candidate.linkedin}>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <span className="flaticon-add-1"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      <section className="p-t35 p-b90 xs-p-t60 xs-p-b60 bg-about">
        <div className="container">
          <div className="ot-heading">
            <h6><span>About Us</span></h6>
            <h2 className="main-heading">About Humanix Technologies</h2>
          </div>

          <div className="row flex-row">
            <div className="col-lg-6 col-md-12 col-xs-12 xs-p-b50 text-center">
              <img src="resources/images/about.jpg" alt="ProSkillHub" />
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 p-l95 xs-p-l15 p-r0 xs-p-r15 align-self-center">
              <div className="ot-heading left-align">
                <h2 className="main-heading m-b20">Grow with Humanix</h2>
              </div>
              <p className="m-b0 p-b45 about-mobile">
              With exceptional analytical, strategic, and technical expertise, Humanix technologies offers talented on-demand developers who bring your ideas to life. Our developers and HR professionals quickly grasp your unique requirements and collaborate closely with your in-house team to ensure excellence at every stage. Having worked with a diverse portfolio, Humanix Technologies allows you the freedom to choose the best-fit resources by evaluating their skills and expertise to meet your specific needs.
              </p>
              <p className="font22 text-dark">We focus on strong partnerships built with Trust, Honesty, Collaboration and Transparency.</p>
              <p className="m-b0 p-b45 about-mobile">
              Humanix Technologies prioritizes client needs, consistently aiming to not only meet but exceed expectations. We continuously assess our current initiatives to inform future strategies, proactively anticipating and addressing client requirements before they emerge.
              </p>
              <div className="ot-button">
                <a href="about-us.html" className="octf-btn octf-btn-secondary octf-btn-icon">
                  <span>Learn More <i className="flaticon-right-arrow-1"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section>
        <div className="container">
          <div className="row">
          <Swiper
        slidesPerView={6} // Number of slides visible at a time
        spaceBetween={10} // Space between slides
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay]} // Removed Navigation module
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
        }}
        className="partner-slider" 
      >
            <div className="col-md-12">
              <div className="partners">
                <div className="owl-carousel home-client-carousel">
                  {[
                    'zoomcar-4.webp', 'zoomcar-10.webp', 'zoomcar-8.webp', 'zoomcar-6.webp', 'zoomcar-17.webp',
                    'cred.webp', 'delhiberry.webp', 'meeso.webp', 'paytm.webp', 'upgrad.webp', 'rakuten.png', 'delhiberry.webp'
                  ].map((logo, index) => (
                    <SwiperSlide key={index} className='mt-5'>
                    <div className="partners-slide" key={index}>
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img className="partners-slide-image" src={`resources/images/brands/${logo}`} alt="" />
                        </figure>
                      </a>
                    </div>
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </div>
            </Swiper >
          </div>
        </div>
      </section>
    
      <section className="p-b330">
    <div className="container">
        <div className="row">
        <Swiper
        slidesPerView={6} // Number of slides visible at a time
        spaceBetween={10} // Space between slides
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay]} // Removed Navigation module
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
        }}
        className="team-slider" 
      >
            <div className="col-md-12">
                <div className="partners">
                    <div className="owl-carousel home-client-carousel">
                      {techImages.map((logo, index) =>  (
                        <SwiperSlide key={index} className='mt-5'>
                        <div className="partners-slide " key={index}>
                            <a href="#" className="client-logo">
                                <figure className="partners-slide-inner">
                                    <img className="partners-slide-image technology-img" src={`resources/images/brands/${logo}`} alt="" />
                                </figure>
                            </a>
                        </div>
                        </SwiperSlide>
                      ))}
                    </div>
                </div>
            </div>
            </Swiper >
        </div>
    </div>
</section>
<section className="bg-light">
    <div className="bg-overlay"></div>
    <div className="container">
        <div className="icon-box-grid text-center m-t--295">
            <div className="col-md-4 no-padding">
                <div className="icon-box text">
                    <div className="icon-main"> <span className="flaticon-coding"></span> </div>
                    <div className="content-box">
                        <h5>Frontend Developer</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 200+ Developers </span>
                        </div>
                        <a href="frontend-development.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 no-padding">
                <div className="icon-box">
                    <div className="icon-main"> <span className="flaticon-pie-chart-1"></span> </div>
                    <div className="content-box">
                        <h5>Backend Developer</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 150+ Developers </span>
                        </div>
                        <a href="backend-development.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 no-padding">
                <div className="icon-box">
                    <div className="icon-main"> <span className="flaticon-document"></span> </div>
                    <div className="content-box">
                        <h5>Full stack Developer</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 250+ Developers </span>
                        </div>
                        <a href="full-stack-developer.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 no-padding">
                <div className="icon-box">
                    <div className="icon-main"> <span className="flaticon-search-1"></span> </div>
                    <div className="content-box">
                        <h5>Data Science</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 100+ Developers </span>
                        </div>
                        <a href="data-science.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 no-padding">
                <div className="icon-box">
                    <div className="icon-main"> <span className="flaticon-coding"></span> </div>
                    <div className="content-box">
                        <h5>Data Engineer</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 150+ Developers </span>
                        </div>
                        <a href="business-development.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 no-padding">
                <div className="icon-box">
                    <div className="icon-main"> <span className="flaticon-cloud-computing"></span> </div>
                    <div className="content-box">
                        <h5>DevOps</h5>
                        <div>
                            <span><i className="fa-solid fa-briefcase"></i> 150+ Developers </span>
                        </div>
                        <a href="digital-marketing.html" className="octf-btn octf-btn-icon octf-btn-primary">View Profiles <i className="flaticon-right-arrow-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section className="p-b180 p-t120">
    <div className="container">
        <h2 className="main-heading">Our Selected Candidates</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="partners">
                    <div className="owl-carousel home-client-carousel">
                        <div className="partners-slide">
                            <a href="#" className="client-logo">
                                <figure className="partners-slide-inner">
                                    <img className="partners-slide-image" src="resources/images/students/pic-1.png" alt="" />
                                </figure>
                            </a>
                            <p>React dev</p>
                        </div>
                        <div className="partners-slide">
                            <a href="#" className="client-logo">
                                <figure className="partners-slide-inner">
                                    <img className="partners-slide-image" src="resources/images/students/pic-2.png" alt="" />
                                </figure>
                            </a>
                            <p>RoR dev</p>
                        </div>
                        <div className="partners-slide">
                            <a href="#" className="client-logo">
                                <figure className="partners-slide-inner">
                                    <img className="partners-slide-image" src="resources/images/students/pic-3.png" alt="" />
                                </figure>
                            </a>
                            <p>Python dev</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}
{/* <section className="bg-dark text-light p-b130">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="cta-btn text-center">
                    <h3>Are you ready to join our tech programs?</h3>
                    <a href="about-us.html" className="octf-btn octf-btn-icon octf-btn-primary">Join Now<i className="flaticon-right-arrow-1"></i></a>
                </div>
            </div>
        </div>
    </div>
</section> */}
<section className="p-t80 bg-testi">
    <div className="bg-overlay-testi"></div>
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-xs-12 align-self-center">
                <div className="ot-heading heading-testimonials left-align">
                    <h6><span>Testimonials</span></h6>
                    <h2 className="main-heading">What They<br /> Say About Our<br />Company?</h2>
                </div>
            </div>
            <div className="col-md-8 col-xs-12">
                <Swiper
                    slidesPerView={1} // Only one slide visible at a time
                    spaceBetween={10} // Space between slides
                    loop={true}
                    autoplay={{
                        delay: 3000, // Delay between slide transitions
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]} // Import Autoplay module
                    className="ot-testimonials-slider"
                >
                    <SwiperSlide>
                        <div className="testimonial-inner">
                            <div className="ttext">
                                Humanix Tehnologies is revolutionizing the job market by providing the right candidates to
                                the right companies with the help of super-comprehensive courses. You do not need
                                a degree or a certificate to get a job, you just need to upscale your skills and
                                you can assure yourself a better job.
                            </div>
                            <div className="tinfo">
                                <h6>Gourav Sengar</h6>
                                <span>RoR Developer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-inner">
                            <div className="ttext">
                                Humanix Tehnologies is one of the best organizations to work with growth opportunities,
                                friendly work culture, helpful peers, and motivating leaders!!
                            </div>
                            <div className="tinfo">
                                <h6>Sulekha Awasthi</h6>
                                <span>Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-inner">
                            <div className="ttext">
                                Humanix Tehnologies is helping to make India better by educating the #techskills every
                                student needs in today's time. I had an astonishing experience there. Totally
                                recommend it for anybody who is enthusiastic about programming or wishes to pursue
                                software development or wants to learn something awesome and applicable which will
                                help make a great living!
                            </div>
                            <div className="tinfo">
                                <h6>Rohit Sinha</h6>
                                <span>Designer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</section>


<section className="p-t330 p-b210 cta bg-cta particles-js" data-color="#fe4c1c,#00c3ff,#0160e7" data-id="i1-1">
    <div className="bg-overlay opacity-1"></div>
    <div className="shape shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
        </svg>
    </div>
    <div className="container">
        <div className="cta-content text-center">
            <h2 className="m-b20">Take Your Hiring to Next<br />Level Right Now!</h2>
            <p className="m-b35">Make the Right Choice for Your Future. Choose Humanix Technologies!</p>
            <div className="ot-button">
                <a href="contact.html" className="octf-btn octf-btn-primary octf-btn-icon"><span>Start Now<i className="flaticon-right-arrow-1"></i></span></a>
            </div>

            <h4 className="developer-section-content">Hire 10+ Years Experienced Developer for your project.</h4>

            <div className="wpcf7 lead">
                <div className="screen-reader-response"></div>
                <form action="resources/functions/lead-form-process.php" method="POST" className="lead-form wpcf7-form">
                    <div className="one-line-form">
                        <span>
                            <input type="text" className="lead-text form-control" name="name" id="name" placeholder="Enter your name/mail" required />
                        </span>
                        <span className="your-mobile">
                            <input type="number" className="lead-text form-control" name="mobile" id="mobile" placeholder="Enter your mobile number"
                                onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} 
                                maxLength="10" required />
                        </span>
                        <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                        <button type="submit" className="octf-btn octf-btn-icon octf-btn-primary">Start Now<i className="flaticon-right-arrow-1"></i></button>
                    </div>
                    <div className="form-group">
                        <div className="form-loading">Loading</div>
                        <div className="form-error-message"></div>
                        <div className="form-sent-message">Thank you for contacting us!</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
  </>
  )
}

