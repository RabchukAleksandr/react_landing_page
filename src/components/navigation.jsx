import React from "react";
import logo from "../content/output-onlinepngtools.png"
import {Spring} from 'react-spring/renderprops';
import Validation from "./validation";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import * as axios from "axios";


const phoneRegExp = /^\+?3?8?(0\d{9})$/
const nameRegExp = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(nameRegExp, "Не схоже справжнє ім'я")
        .min(2, "Замале ім'я")
        .max(15, "Занадто велике ім'я")
        .required("Введіть ваше ім'я будь ласка"),
    number: Yup.string()
        .required('Введіть ваш номер будь ласка')
        .matches(phoneRegExp, 'Не схоже на номер мобільного')
        .min(10, "Потрібно мінімум десять символів")

})

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleModal = this.handleModal.bind(this)
    }

    handleModal() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (<>

                <Spring from={{opacity: 0}} to={{opacity: 1,}}>
                    {props => (
                        <div style={props}>
                            <nav id="menu" className="navbar navbar-default fixed-top">
                                <div className="container">
                                    <div className="row mr-auto">
                                        <a className="navbar-nav smooth-scroll" href="#header">
                                            <img className="img-responsive" src={logo} alt={logo}/>
                                        </a>{" "}
                                    </div>
                                    <div className="row ml-auto">
                                        <div>
                                            <a onClick={this.handleModal} role="button" className="navbar-brand">
                                                <div className="buttontext">ЗАПИСАТИСЬ</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    )}

                </Spring>


                <Modal scrollable={true} centered animation={false} show={this.state.show}
                       onHide={this.handleModal}>
                    <Formik  initialValues={{name: "", number: ""}} validationSchema={validationSchema}
                            onSubmit={async (values, {setSubmitting, resetForm}) => {
                                setSubmitting(true);
                                resetForm();
                                setSubmitting(false);
                                axios.get('https://api.telegram.org/bot1240132654:AAEtK9NJHwm8zmNs2sO2ZYn1nLws8_IT2A8/sendMessage?chat_id=-442198919&text=' + values.name + " " + values.number)
                                this.handleModal();
                            }}>
                        {({values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit}) => (
                            <Form onSubmit={handleSubmit}>

                                <Modal.Header closeButton>
                                    <Modal.Title>Заповніть форму, щоб ми могли з вами зв'язатися</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>

                                        <Col>
                                            <label htmlFor="name">Ваше Ім'я:</label>

                                            <input type="text" name="name" id="name" placeholder="Ім'я"
                                                   onChange={handleChange}
                                                   value={values.name} onBlur={handleBlur}
                                                   className={touched.name && errors.name ? "has-error" : null}
                                            />
                                            <Validation massage={errors.name} touched={touched.name}/>
                                        </Col>

                                        <Col>

                                            <label htmlFor="number">Телефон:</label>

                                            <input type="text" name="number" id="number"
                                                   placeholder="Номер"
                                                   onChange={handleChange} value={values.number}
                                                   onBlur={handleBlur}
                                                   className={touched.number && errors.number ? "error text-danger" : null}
                                            />
                                            <Validation massage={errors.number} touched={touched.number}/>
                                        </Col>


                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="d-flex flex-row justify-content-between">
                                        <Row>
                                            <Col>
                                            <button type="button" className="btn btn-custom2 btn-lg"
                                                    onClick={this.handleModal}><a
                                                href="#contact" className="page-scroll">Наші Контакти</a></button>

                                            </Col>
                                            <Col>
                                            <Button  className="btn btn-custom btn-lg " type="submit">
                                                ВІДПРАВИТИ
                                            </Button>
                                                </Col>
                                        </Row>

                                    </div>
                                </Modal.Footer>

                            </Form>)}
                    </Formik>
                </Modal>

            </>

        );
    }
};
export default Navigation;

