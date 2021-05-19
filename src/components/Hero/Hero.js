import React,{useState} from "react";
import PropTypes from "prop-types";

import "./Hero.scss";

export const Hero =({top,left,hp})=>{


    const style={
        top:top,
        left:left
    }


    return(
        <>
            <div className="hero" style={style} >{hp.current}/{hp.max}</div>
        </>
    )
}

Hero.propTypes={
    top:PropTypes.number.isRequired,
    left:PropTypes.number.isRequired,
    hp:PropTypes.object.isRequired
}