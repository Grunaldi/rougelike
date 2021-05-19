import React from "react";
import PropTypes from "prop-types";

import "./Enemy.scss";

export const Enemy =({top,left,hp})=>{

    const style={
        top:top,
        left:left
    }


    return(
        <>
            <div className="enemy" style={style} >{hp.current}/{hp.max}</div>
        </>
    )
}

Enemy.propTypes={
    top:PropTypes.number.isRequired,
    left:PropTypes.number.isRequired
}