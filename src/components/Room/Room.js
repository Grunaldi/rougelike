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
        let tempHero={}
        const nextHeroPosition=changeHeroPosition(event.key,roomLayout)
        setHeroPosition((prev)=>{
            tempHero=prev
            tempHero={
                top: tempHero.top+nextHeroPosition.top,
                left:tempHero.left+nextHeroPosition.left
            }
            return {
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
        console.log(heroPosition)
        console.log(tempHero)
        const nextEnemyPosition=changeEnemyPosition(tempHero,enemyPosition,roomLayout)
        setEnemyPosition((prev)=>{return {
            ...prev,
            top:prev.top+nextEnemyPosition.top,
            left:prev.left+nextEnemyPosition.left
        }})
        setRoomLayout((prev)=>{return{
            ...prev,
            enemy:{
                r:prev.enemy.r+nextEnemyPosition.enemy.r,
                c:prev.enemy.c+nextEnemyPosition.enemy.c
            }
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