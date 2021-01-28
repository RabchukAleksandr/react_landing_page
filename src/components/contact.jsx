import React, {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div>
                <div id="contact">
                    <div className="container">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="section-title">
                                    <h2>Як нас знайти</h2>
                                    <p>
                                        Зaпишітся на заняття або зателефуйте нам самі, ми будему раді відповісти на
                                        будь-яке ваше питання!
                                    </p>
                                </div>

                                <div className="container">
                                    <div className="col-md-6">
                                        <div id='map'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-offset-1 contact-info">
                            <div className="contact-item">
                                <h3>Контактна інформація</h3>
                                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Адреса
                  </span>
                                    {this.props.data ? this.props.data.address : "loading"}
                                </p>
                            </div>
                            <div className="contact-item">
                                <p>
                  <span>
                    <i className="fa fa-phone"></i> Телефон
                  </span>{" "}
                                    <a href="tel:+380957958860">{this.props.data ? this.props.data.phone1 : "loading"}</a>
                                    <span></span>
                                    <a href="tel:+380957958860">{this.props.data ? this.props.data.phone2 : "loading"}</a>
                                </p>
                            </div>

                            <div className="contact-item">
                                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Пошта
                  </span>{" "}
                                    {this.props.data ? this.props.data.email : "loading"}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row justify-content-center">
                                <div className="social ">
                                    <ul>
                                        <li>
                                            <a
                                                href={this.props.data ? this.props.data.facebook : "/"}
                                            >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.props.data ? this.props.data.instagram : "/"}>
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <p>
                            &copy; AKVARELKA.ORG 2020 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
