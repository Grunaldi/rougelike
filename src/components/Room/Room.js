import React ,{useState,useEffect} from "react"
import {Row} from "../Row/Row";
import {Hero} from "../Hero/Hero";
import {changeHeroPosition} from "./Room__Functions";


export const Room =()=>{

    const [heroPositionTop,setHeroPositionTop]=useState(0)
    const [heroPositionLeft,setHeroPositionLeft]=useState(0)

    const handleKeyPress=(event)=>{
        const heroPosition=changeHeroPosition(event.key)

        heroPosition.direction==="top"?setHeroPositionTop(prev=>prev+heroPosition.distance)
            :setHeroPositionLeft(prev=>prev+heroPosition.distance)
    }

    useEffect(()=>{
        window.addEventListener("keypress",handleKeyPress)
        return ()=>{
            window.removeEventListener("keypress",handleKeyPress)
        }
        })

    return(
        <>
                <Row/>
                <Row/>
                <Row/>
                <Hero top={heroPositionTop} left={heroPositionLeft}/>
        </>
    )
}

export default Room;