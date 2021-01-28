import React, {Component} from 'react'
//import VisibilitySensor from "react-visibility-sensor"
import {Spring} from "react-spring/renderprops-universal";
import VisibilitySensor from "./visibilitySensor";


export class about extends Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        <VisibilitySensor  once >
                            {({isVisible}) => (<Spring
                                to={{opacity: isVisible ? 1 : 0, marginTop: isVisible ? 0 : -200}} config={{delay: 700}} >
                                {props => (<div style={props}  className="col-xs-12 col-md-6"><img src="img/portfolio/1m.jpg"
                                                                                                  className="img-responsive"
                                                                                                  alt=""/></div>)}
                            </Spring>)}
                        </VisibilitySensor>
                        <VisibilitySensor partialVisibility once>
                            {({isVisible}) => (
                                <Spring  to={{opacity: isVisible ? 1 : 0, marginLeft: isVisible ? 0 : -200}} config={{delay: 700}}>
                                {props => (<div style={props} className="col-xs-12 col-md-6">
                                    <div className="about-text">
                                        <h2>Про нас</h2>
                                        <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                                        <h3>Чому обирають саме Нас?</h3>
                                        <div className="list-style">
                                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                                <ul>
                                                    {this.props.data ? this.props.data.Why.map((d, i) => <li
                                                        key={`${d}-${i}`}>{d}</li>) : 'loading'}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>)}
                                </Spring>)}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
        )
    }
}

export default about
