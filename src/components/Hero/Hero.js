import React,{useState} from "react";
import PropTypes from "prop-types";

import "./Hero.scss";

export const Hero =({top,left})=>{


    const style={
        top:top,
        left:left
    }


    return(
        <>
            <div className="hero" style={style} />
        </>
    )
}

Hero.propTypes={
    top:PropTypes.number.isRequired,
    left:PropTypes.number.isRequired
}