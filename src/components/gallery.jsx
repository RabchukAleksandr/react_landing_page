import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Фото</h2>
            <p>
              Затишна атмосфера чекає на Вас та ваших малят!
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                      <img loading="lazy"
                          src={"http://www.akvarelka.org/img/portfolio/2m.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img loading="lazy"
                          src={"http://www.akvarelka.org/img/portfolio/3m.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/4m.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img loading="lazy"
                          src={"http://www.akvarelka.org/img/portfolio/5m.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/6.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/7.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/8.jpg"}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}

                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/9.jpg"}
                        className="img-responsive "
                        alt="Empty"
                      />{" "}

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img loading="lazy"
                        src={"http://www.akvarelka.org/img/portfolio/10.jpg"}
                        className="img-responsive"
                        alt="none"
                      />{" "}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
