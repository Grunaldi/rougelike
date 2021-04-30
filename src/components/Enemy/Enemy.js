import React,{useState} from "react";
import PropTypes from "prop-types";

import "./Enemy.scss";

export const Enemy =({top,left})=>{

    const style={
        top:top,
        left:left
    }


    return(
        <>
            <div className="enemy" style={style} />
        </>
    )
}

Enemy.propTypes={
    top:PropTypes.number.isRequired,
    left:PropTypes.number.isRequired
}