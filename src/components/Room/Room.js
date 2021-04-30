import React ,{useState,useEffect} from "react"
import {Row} from "../Row/Row";
import {Hero} from "../Hero/Hero";
import {changeHeroPosition} from "./Room__Functions";
import {Enemy} from "../Enemy/Enemy";


export const Room =()=>{
    const [heroPosition,setHeroPosition]=useState({top:0,left:0})
    const [enemyPosition,setEnemyPosition]=useState({top:202,left:303})

    const handleKeyPress=(event)=>{
        const nextHeroPosition=changeHeroPosition(event.key)

        setHeroPosition((prev)=>{return {
            ...heroPosition,
            top:prev.top+nextHeroPosition.direction,
            left:prev.left+nextHeroPosition.distance
        }})

        // nextHeroPosition.direction==="top"?setHeroPositionTop(prev=>prev+nextHeroPosition.distance)
        //     :setHeroPositionLeft(prev=>prev+nextHeroPosition.distance)
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
                <Hero top={heroPosition.top} left={heroPosition.left}/>
                <Enemy top={enemyPosition.top} left={enemyPosition.left}/>
        </>
    )
}

export default Room;