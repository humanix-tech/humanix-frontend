import React from 'react'

export default function Portfolio() {
  return (
    <>
    <div id="content" className="site-content">
  <div className="page-header dtable text-center" style={{ backgroundImage: "url(resources/images/banner-.jpg)" }}>
    <div className="dcell">
      <div className="container">
        <h1 className="page-title">Portfolio Grid</h1>
        <ul id="breadcrumbs" className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li className="active">Portfolio Grid</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="p-t110 p-b90">
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-b20">
          <div className="ot-heading text-center">
            <h6><span>our projects</span></h6>
            <h2 className="main-heading">View Some of Our Works <br /> and Case Studies for Clients</h2>
          </div>
        </div>
      </div>
      <div className="project-filter-wrapper">
        <div className="container">
          <ul className="project_filters">
            <li><a href="#" data-filter="*" className="selected">All</a></li>
            <li><a href="#" data-filter=".development">Development</a></li>
            <li><a href="#" data-filter=".marketing">Marketing</a></li>
            <li><a href="#" data-filter=".media">Media</a></li>
            <li><a href="#" data-filter=".optimization">Optimization</a></li>
          </ul>
        </div>
        <div className="projects-grid">
          <div className="project-item media optimization">
            <div className="projects-box">
              <div className="projects-thumbnail">
                <a href="portfolio-single.html">
                  <img src="resources/images/projects/grid-7.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio-info s1">
                <div className="portfolio-info-inner">
                  <h5><a href="portfolio-single.html">New Soft for Watch</a></h5>
                  <p className="portfolio-cates">
                    <a href="#">Media</a><span>/</span><a href="#">Optimization</a><span>/</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item development">
            <div className="projects-box">
              <div className="projects-thumbnail">
                <a href="portfolio-single.html">
                  <img src="resources/images/projects/grid-8.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio-info s1">
                <div className="portfolio-info-inner">
                  <h5><a href="portfolio-single.html">UX Design for Tubus</a></h5>
                  <p className="portfolio-cates"><a href="#">Development</a><span>/</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item marketing optimization">
            <div className="projects-box">
              <div className="projects-thumbnail">
                <a href="portfolio-single.html">
                  <img src="resources/images/projects/grid-9.jpg" alt="" />
                </a>
              </div>
              <div className="portfolio-info s1">
                <div className="portfolio-info-inner">
                  <h5><a href="portfolio-single.html">Analysis of Security</a></h5>
                  <p className="portfolio-cates">
                    <a href="#">Marketing</a><span>/</span><a href="#">Optimization</a><span>/</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the structure above for each project item */}
        </div>
      </div>
    </div>
  </section>
</div>
    </>
  )
}
