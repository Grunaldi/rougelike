import React ,{useState,useEffect} from "react"
import {Row} from "../Row/Row";
import {Hero} from "../Hero/Hero";


export const Room =()=>{

    const [heroPositionTop,setHeroPositionTop]=useState(0)
    const [heroPositionLeft,setHeroPositionLeft]=useState(0)

    const handleKeyPress=(event)=>{
        if(event.key==="w"){
            setHeroPositionTop(prev=>prev-101)
        }
        if(event.key==="s"){
            setHeroPositionTop(prev=>prev+101)
        }
        if(event.key==="a"){
            setHeroPositionLeft(prev=>prev-101)
        }
        if(event.key==="d"){
            setHeroPositionLeft(prev=>prev+101)
        }
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