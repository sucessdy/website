import React from "react";
import Split from "../Split";

const AboutUs5 = () => {
  return (
    <section className="about2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-tit">
              <Split>
                <h2 className="wow words chars splitting" data-splitting>
                Elevate Your Spaces with  <br /> Timeless Elegance

                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our journey, marked by two and a half decades of unwavering dedication, has endowed us with a wealth of experiences. Each project is a testament to our passion for creating living and working spaces that resonate with a timeless charm.
                
                </p>
              </Split>
              <div className="exp">
                <h3 className="">25</h3>
                <h5 className=" valign">
                  <Split>
                    <span className="wow words chars splitting" data-splitting>
                      years <br /> Of Experiences
                    </span>
                  </Split>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid office">
        <div className="row">
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/demos/home.jpg)" }}
            ></div>
          </div>
          <div className="col-lg-6 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/demos/best.png)" }}
            ></div>
          </div>
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/demos/modern.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
