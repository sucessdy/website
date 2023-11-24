import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                We are a Creative Agency &amp; Startup Studio that provides
                Digital Products and Services turns to focus on client success.
                We specialize in user interface design, including front-end
                development which we consider to be an integral part.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href="#">4 Thousand</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Designer Inhouse</h6>
              <p>25
+</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>House Design
</h6>
              <p>
                <Link href="#">100+ </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="#">Minimal</Link> , <Link href="#">Modern</Link> ,
                <Link href="#">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
