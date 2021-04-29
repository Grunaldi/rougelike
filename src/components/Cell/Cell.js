import PropTypes from "prop-types";
import React from "react";
import "./Cell.scss"


const Cell=({type})=>{
    return(
        <div className={"btn " + type} > </div>
    )
}

// Cell.propTypes={
//     text:PropTypes.string.isRequired,
//     onClick:PropTypes.func.isRequired,
// }

export default Cell;