import React from "react";


const Validation = ({touched,massage}) => {
    if(touched===false){
        return <div className="has-error">&nbsp</div>
    }
    if(massage){
        return <div className="has-error" >{massage}</div>
    }
    if(!massage && touched){
        return <div className="no-error">Добре</div>
    }
    return <div></div>
}

export default Validation;