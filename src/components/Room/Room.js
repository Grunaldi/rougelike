import React ,{useState,useEffect} from "react"
import {Row} from "../Row/Row";
import {Hero} from "../Hero/Hero";
import {changeEnemyPosition, changeHeroPosition} from "./Room__Functions";
import {Enemy} from "../Enemy/Enemy";


export const Room =()=>{
    const [roomLayout,setRoomLayout]=useState({
        hero:{r:0, c:0},
        enemy:{r:2, c:3},
        rows:3,
        columns:4
        })


    const [heroPosition,setHeroPosition]=useState({top:0,left:0})
    const [enemyPosition,setEnemyPosition]=useState({top:202,left:303})

    const handleKeyPress=(event)=>{
        const nextHeroPosition=changeHeroPosition(event.key,roomLayout)
        const nextEnemyPosition=changeEnemyPosition(heroPosition,enemyPosition,roomLayout)

        setHeroPosition((prev)=>{return {
            ...prev,
            top:prev.top+nextHeroPosition.top,
            left:prev.left+nextHeroPosition.left
        }})


        setRoomLayout((prev)=>{return{
            ...prev,
            hero:{
                r:prev.hero.r+nextHeroPosition.hero.r,
                c:prev.hero.c+nextHeroPosition.hero.c,
            }
        }})

        setEnemyPosition((prev)=>{return {
            ...prev,
            top:prev.top+nextEnemyPosition.top,
            left:prev.left+nextEnemyPosition.left
        }})


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