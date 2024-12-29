import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
    <Header isActive={"About"}/>
    <div id="content" className="site-content">
  <div className="page-header dtable text-center" style={{ backgroundImage: 'url(resources/images/banner-.jpg)' }}>
    <div className="dcell">
      <div className="container">
        <h1 className="page-title">About Company</h1>
        <ul id="breadcrumbs" className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li className="active">About Company</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="p-t125 p-b160 sm-p-b60">
    <div className="container">
      <div className="row flex-row justify-content-center">
        <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
          <img src="resources/images/about-us-1.png" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
          <div className="about-content p-l80 xs-p-l0">
            <div className="ot-heading left-align">
              <h6><span>Fast, efficient, 100% personalized, and fully adaptable.</span></h6>
              <h2 className="main-heading">Why Choose US ?</h2>
            </div>
            <p className="font22 text-dark">We at 'Humanix Technologies' provides talent management services that assist businesses in succeeding in a fast-changing, unpredictable world of work.</p>
            <p className="p-b45">
            Over the years, we’ve partnered with Fortune 200 companies and leading Indian startups. At Humanix Technologies, we specialize in providing top-tier developers to help you secure your dream candidate, connecting you with the best talent for your business. For more information, give us a call.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1 className='Working_process'><span>Our Working process</span><br></br><span className='about_working'>Our systematic and technology enabled approach, for the talent acquisition process encompasses of three key steps, that help us work on the needs of all key stakeholders</span></h1>
    <h5 className='about_working'></h5>
  </section>
  <section className="p-b170 bg-light">
    <div className="container">
      <div className="row p-b75 sm-p-tb60">
        <div className="about-swrap-top-1">
          <div className="col-md-4 col-sm-6 col-xs-12 sm-m-b40">
            <div className="service-box-s2 s-box service-box-s2-bg1">
              <div className="number-box">01</div>
              <div className="content-box">
                <h5>Client Analysis</h5>
                <p>We begin by gaining a thorough grasp of what customers desire, with the goal of listening carefully and documenting each insight.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 sm-m-b40">
            <div className="service-box-s2 s-box service-box-s2-bg2">
              <div className="number-box s2">02</div>
              <div className="content-box">
                <h5>Candidate Assessment</h5>
                <p>
                Our core expertise lies in conducting comprehensive industry analysis to identify key trends and factors. From there, we help our clients connect with the best available talent pool.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="service-box-s2 s-box service-box-s2-bg3">
              <div className="number-box s3">03</div>
              <div className="content-box">
                <h5>Interview & Selection</h5>
                <p>At Humanix Technologies, we ensure that candidates not only meet the required qualifications but also align with our clients' expectations. Our domain consultants bring years of experience and expertise in sourcing and attracting top talent, guaranteeing exceptional service for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-t120">
        <div className="row flex-row align-items-end">
          <div className="col-lg-6 col-md-12 col-xs-12 xs-m-b40">
            <div className="ot-heading">
              <h2 className="main-heading">What makes us better ?</h2>
            </div>
            <div className="ot-accordions">
              <div className="acc-item current">
                <span className="acc-toggle">
                With strong analytical, strategic, and technical expertise, Humanix Technologies provides talented on-demand developers who bring your ideas to life. Our developers and HR team quickly grasp your unique requirements and collaborate closely to ensure excellence at every stage. Having worked with a wide range of clients, we offer you the flexibility to choose the developer who best fits your needs, based on their skills and expertise.</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 text-center">
            <img src="resources/images/img.png" alt="seo" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="p-b0 particles-js" data-color="#fe4c1c,#00c3ff,#0160e7" data-id="a1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="shadow-primary p-t90 p-b83 m-b110 btn-rounder bg-cover text-center m-t--140" style={{ background: 'url("resources/images/bg-counter-1.jpg") center center no-repeat' }}>
            <div className="bg-overlay"></div>
            <div className="row">
              <div className="col-md-3 col-sm-6 sm-m-b40 xs-m-b40">
                <div className="ot-counter s2">
                  <h6>Devlopers</h6>
                  <div> <span className="num" data-to="1000" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 xs-m-b40 sm-m-b40">
                <div className="ot-counter s2">
                  <h6>Clients</h6>
                  <div> <span className="num" data-to="100" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 xs-m-b40">
                <div className="ot-counter s2">
                  <h6>Talent Placement</h6>
                  <div> <span className="num" data-to="400" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="ot-counter s2">
                  <h6>Competitive Compensation</h6>
                  <div> <span className="num" data-to="30" data-time="2000">0</span> <span>L +</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="container">
    <div className="row p-b40">
      <div className="col-sm-8 xs-m-b40">
        <div className="ot-heading">
          <h6><span>professional team</span></h6>
          <h2 className="main-heading">Meet Our Selected Candidates</h2>
        </div>
        <p className="m-b0">Get a 1-1 consultation with a Pro advisor to prepare for your upcoming placement interviews!</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12 xs-m-b40">
        <div className="team-box">
          <img src="resources/images/team1.jpg" alt="team-1" />
          <div className="team-box-content">
            <h5><a href="#">Maya L</a></h5>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 xs-m-b40">
        <div className="team-box">
          <img src="resources/images/team2.jpg" alt="team-2" />
          <div className="team-box-content">
            <h5><a href="#">Jadon P</a></h5>
            <p>Full-stack Developer</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 xs-m-b40">
        <div className="team-box">
          <img src="resources/images/team3.jpg" alt="team-3" />
          <div className="team-box-content">
            <h5><a href="#">Sarah W</a></h5>
            <p>Backend Developer</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 xs-m-b40">
        <div className="team-box">
          <img src="resources/images/team4.jpg" alt="team-4" />
          <div className="team-box-content">
            <h5><a href="#">Daniel M</a></h5>
            <p>DevOps Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
</div>
</>

  )
}
