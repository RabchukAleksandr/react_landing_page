import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";
import VisibilitySensor from "./visibilitySensor";


export class Services extends Component {

    render() {

        return (
            <div id="services" className="text-center">
                <div className="container">
                    <VisibilitySensor>
                        {({isVisible}) => (<Spring
                            to={{opacity: isVisible ? 1 : 1}}>
                            {props => (<div style={props} className="section-title">
                                <h2>Наші послуги</h2>
                                <p>
                                    Вашій дитині ніколи буде нудьгувати
                                </p>
                            </div>)}
                        </Spring>)}

                    </VisibilitySensor>

                        <div className="row">

                            {this.props.data
                                ? this.props.data.map((d, i) =>(<VisibilitySensor key={i} partialVisibility once>
                                {({isVisible}) => (
                                    <Spring
                                        to={{
                                            opacity: isVisible ? 1 : 1,
                                            marginTop: isVisible  ? 0 : 0,

                                        }} config={{delay: 500}}>
                                        {props => (
                                            <div key={`${d.name}`} style={props} className="col-md-6">
                                                {" "}
                                                <img src={d.icon} alt={d.icon}></img>
                                                <div className="service-desc">
                                                    <h3>{d.name}</h3>
                                                    <p>{d.text}</p>
                                                </div>
                                            </div>)}
                                    </Spring>)}</VisibilitySensor>
                            ))
                                : "loading"}
                        </div>

                </div>
            </div>
        );
    }
}

export default Services;
