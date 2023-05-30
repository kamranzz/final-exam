import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="image-hero">
        <div className="container banner-content col-lg-9">
          <div>
            <h1 className="text-white">
              Episode 09: How To Create <br /> Web Page Using Bootstrap 4
            </h1>
            <h6 className="text-white">
              By Mike Smith | 16 September 2017 | 1:30:20
            </h6>
            <p>
              <a
                href="single-post.html"
                class="btn btn-danger btn-md py-3 px-4"
              >
                READ THE TRANSCRIPT
              </a>
            </p>
          </div>
        </div>
      </div>

      <ProductCard />

      <div className="site-section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="font-weight-bold text-black">Behind The Mic</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_1.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_2.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_3.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_4.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_5.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_6.jpg"
                  alt="im"
                  className="img-fluid"
                />
                <div className="text">
                  <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                  <span className="d-block mb-2 text-white-opacity-05">
                    Creative Director
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    ullam reprehenderit nemo.
                  </p>
                  <p>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="add" className="text-white p-2">
                      <span className="fa-brands fa-linkedin-in"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light block-13">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="font-weight-bold mt-5 text-black">Featured Guests</h2>
            </div>
          </div>
          <div className="nonloop-block-13 owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage d-flex mb-5">
                <div className="owl-item my-2">
                  <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                      <img
                        src="https://preview.colorlib.com/theme/podca/images/person_1.jpg"
                        alt="im"
                        className="w-50 mx-auto img-fluid rounded-circle"
                      />
                    </div>
                    <div>
                      <h3 className="font-weight-light h5">Megan Smith</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos,
                        ea?
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="owl-item my-2">
                  <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                      <img
                        src="https://preview.colorlib.com/theme/podca/images/person_3.jpg"
                        alt="im"
                        className="w-50 mx-auto img-fluid rounded-circle"
                      />
                    </div>
                    <div>
                      <h3 className="font-weight-light h5">Brooke Cagle</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos,
                        ea?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item  my-2">
                  <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                      <img
                        src="https://preview.colorlib.com/theme/podca/images/person_6.jpg"
                        alt="im"
                        className="w-50 mx-auto img-fluid rounded-circle"
                      />
                    </div>
                    <div>
                      <h3 className="font-weight-light h5">Philip Martin</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos,
                        ea?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
