import React from 'react'

export default function Process() {
  return (
    <div id="content" className="site-content">
  <div className="page-header dtable text-center" style={{ backgroundImage: 'url(resources/images/banner-.jpg)' }}>
    <div className="dcell">
      <div className="container">
        <h1 className="page-title">Our Process</h1>
        <ul id="breadcrumbs" className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li className="active">Our Process</li>
        </ul>
      </div>
    </div>
  </div>

  <section className="p-t100 p-b120 bg-process">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="ot-heading text-center m-b80">
            <h6><span>how to get started</span></h6>
            <h2 className="main-heading">Few Simple Steps<br />for Successful Business</h2>
          </div>
        </div>
      </div>

      <div className="flex-row justify-content-center">
        <div className="col-md-3 col-sm-6 col-xs-12 text-center sm-m-b40">
          <div className="process-box">
            <img className="p-arrow" src="resources/images/p-arrow1.png" alt="arrow" />
            <div className="number-box">01</div>
            <div className="icon-main"><img src="resources/images/process1.png" alt="Project Introduction" /></div>
            <div className="content-box">
              <h5>Counselling</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12 text-center sm-m-b40">
          <div className="process-box">
            <img className="p-arrow" src="resources/images/p-arrow2-1.png" alt="arrow" />
            <div className="number-box">02</div>
            <div className="icon-main p-b20"><img src="resources/images/process2-1.png" alt="Research & Concept" /></div>
            <div className="content-box">
              <h5>Training</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
          <div className="process-box">
            <img className="p-arrow" src="resources/images/p-arrow2-1.png" alt="arrow" />
            <div className="number-box">03</div>
            <div className="icon-main p-b20"><img src="resources/images/process1-1.png" alt="Project Termination" /></div>
            <div className="content-box">
              <h5>Interview with Companies</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
          <div className="process-box">
            <div className="number-box">04</div>
            <div className="icon-main p-b20"><img src="resources/images/process4-1.png" alt="Project Termination" /></div>
            <div className="content-box">
              <h5>Placement</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="z-index-1">
    <div className="section-tab">
      <div className="container">
        <div className="flex-row align-items-end m-b20">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <div className="ot-heading text-light">
              <h6><span>Your Dream Partner</span></h6>
              <h2 className="main-heading">Get your Dream Job with<br />Pro Skill Hub</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 text-right xs-text-left">
            <div className="ot-button m-b25">
              <a href="#" className="octf-btn octf-btn-third octf-btn-icon">
                <span>View More <i className="flaticon-right-arrow-1"></i></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="tab-titles row">
              <div>
                <div className="col-md text-center">
                  <a className="title-item tab-active" href="frontend-development.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-pie-chart"></span></div>
                    <h6>Frontend <br />Development</h6>
                  </a>
                </div>
              </div>

              <div>
                <div className="col-md text-center">
                  <a className="title-item" href="backend-development.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-pie-chart-1"></span></div>
                    <h6>Backend<br />Development</h6>
                  </a>
                </div>
              </div>

              <div>
                <div className="col-md text-center">
                  <a className="title-item" href="full-stack-developer.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-document"></span></div>
                    <h6>Full Stack<br />Development</h6>
                  </a>
                </div>
              </div>

              <div>
                <div className="col-md text-center">
                  <a className="title-item" href="data-science.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-search-1"></span></div>
                    <h6>Data<br />Science</h6>
                  </a>
                </div>
              </div>

              <div>
                <div className="col-md text-center">
                  <a className="title-item" href="business-development.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-coding"></span></div>
                    <h6>Business<br />Development</h6>
                  </a>
                </div>
              </div>

              <div>
                <div className="col-md text-center">
                  <a className="title-item" href="digital-marketing.html" tabIndex="0">
                    <div className="icon-main"><span className="flaticon-cloud-computing"></span></div>
                    <h6>Digital<br />Marketing</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
