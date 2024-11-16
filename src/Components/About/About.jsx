import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
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
              <h6><span>who we are</span></h6>
              <h2 className="main-heading">We're on a Mission to<br /> Change Your View of JOBs</h2>
            </div>
            <p className="font22 text-dark">Over 10+ years Pro Skill Hub helping students to reach their dream jobs.</p>
            <p className="p-b45">
              Over the years, we have worked with Fortune 200s and Top Indian Startups. We help ambitious students and professionals like yours to grab their dream jobs and be placed in India's top startups and MNCs. For more info call us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="p-b170 bg-light">
    <div className="container">
      <div className="row p-b75 sm-p-tb60">
        <div className="about-swrap-top-1">
          <div className="col-md-4 col-sm-6 col-xs-12 sm-m-b40">
            <div className="service-box-s2 s-box service-box-s2-bg1">
              <div className="number-box">01</div>
              <div className="content-box">
                <h5>Awesome Results</h5>
                <p>Our people truly care for our work and for each other.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 sm-m-b40">
            <div className="service-box-s2 s-box service-box-s2-bg2">
              <div className="number-box s2">02</div>
              <div className="content-box">
                <h5>Top Faculties</h5>
                <p>Our mentor community strongly believes in the power of sharing!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="service-box-s2 s-box service-box-s2-bg3">
              <div className="number-box s3">03</div>
              <div className="content-box">
                <h5>Process Perfection</h5>
                <p>We’re driving you to become the best version of Yourselves.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-t120">
        <div className="row flex-row align-items-end">
          <div className="col-lg-6 col-md-12 col-xs-12 xs-m-b40">
            <div className="ot-heading">
              <h2 className="main-heading">Frequently Asked Questions</h2>
            </div>
            <div className="ot-accordions">
              <div className="acc-item current">
                <span className="acc-toggle">Who can take this course? <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                <div className="acc-content active" style={{ display: 'block' }}> Anyone interested in starting their career as a developer can apply for this course.</div>
              </div>
              <div className="acc-item">
                <span className="acc-toggle">Can the course fee be paid in instalments? <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                <div className="acc-content">
                  <p>We have multiple banking partners who offer different EMI options to help you manage your finances and take the course.</p>
                </div>
              </div>
              <div className="acc-item">
                <span className="acc-toggle">Will I get placement support in this course? <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                <div className="acc-content">
                  <p>During the course, you will be trained on placement-specific skills like soft skills, resume building, etc., to be well prepared for job interviews.</p>
                </div>
              </div>
              <div className="acc-item">
                <span className="acc-toggle">Can we shift to a different batch or course after beginning of the course?<i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                <div className="acc-content">
                  <p>No batch transfers would be entertained once the course has begun.</p>
                </div>
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
                  <h6>Courses</h6>
                  <div> <span className="num" data-to="10" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 xs-m-b40 sm-m-b40">
                <div className="ot-counter s2">
                  <h6>Companies</h6>
                  <div> <span className="num" data-to="200" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 xs-m-b40">
                <div className="ot-counter s2">
                  <h6>Placements</h6>
                  <div> <span className="num" data-to="400" data-time="2000">0</span> <span>+</span> </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="ot-counter s2">
                  <h6>Highest Package</h6>
                  <div> <span className="num" data-to="13" data-time="2000">0</span> <span>L +</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container">
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
  </section>
</div>
</>

  )
}
