import PropTypes from "prop-types";
import "./Button.scss"

const Button=({type,text,onClick})=>{
    return<button className={"btn " + type} onClick={(e)=>onClick()}>{text}</button>
}

Button.propTypes={
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default Button;