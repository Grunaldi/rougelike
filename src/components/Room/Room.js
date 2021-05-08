import React ,{useState,useEffect} from "react"
import {Row} from "../Row/Row";
import {Hero} from "../Hero/Hero";
import {changeEnemyPosition, changeHeroPosition} from "./Room__Functions";
import {Enemy} from "../Enemy/Enemy";
import {Victory} from "../Victory/Victory";
import {Defeat} from "../Defeat/Defeat";


export const Room =()=>{
    const [roomLayout,setRoomLayout]=useState({
        hero:{r:0, c:0 , hp:{current:50,max:50},dmg:{flat:10}},
        enemy:{r:2, c:3, hp:{current:30,max:30},dmg:{flat:5}},
        rows:3,
        columns:4
        })
    const [heroPosition,setHeroPosition]=useState({top:0,left:0})
    const [enemyPosition,setEnemyPosition]=useState({top:202,left:303})
    const [victory,setVictory]=useState(false)
    const [defeat,setDefeat]=useState(false)

    const handleKeyPress=(event)=>{
        let tempHero={}
        const nextHeroPosition=changeHeroPosition(event.key,roomLayout)
        if(nextHeroPosition.enemy.hp.current===0){
            setVictory(true)
        }
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

        setRoomLayout((prev)=>
        {return{
            ...prev,
            hero:{
                ...prev.hero,
                r:prev.hero.r+nextHeroPosition.hero.r,
                c:prev.hero.c+nextHeroPosition.hero.c,
            },
            enemy:{
                ...prev.enemy,
                hp:{...prev.enemy.hp,
                current:nextHeroPosition.enemy.hp.current
                }
            }
        }})
        console.log(heroPosition)
        console.log(tempHero)
        const nextEnemyPosition=changeEnemyPosition(tempHero,enemyPosition,roomLayout)
        if(nextEnemyPosition.hero.hp.current===0){
            setDefeat(true)
        }
        setEnemyPosition((prev)=>{return {
            ...prev,
            top:prev.top+nextEnemyPosition.top,
            left:prev.left+nextEnemyPosition.left
        }})
        setRoomLayout((prev)=>{return{
            ...prev,
            enemy:{
                ...prev.enemy,
                r:prev.enemy.r+nextEnemyPosition.enemy.r,
                c:prev.enemy.c+nextEnemyPosition.enemy.c
            },
            hero:{
                ...prev.hero,
                hp:{
                    ...prev.hero.hp,
                    current:nextEnemyPosition.hero.hp.current
                }
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
            {(!victory&&!defeat) && <Row/>}
            {(!victory&&!defeat) && <Row/>}
            {(!victory&&!defeat) && <Row/>}
            {(!victory && !defeat) && <Hero top={heroPosition.top} left={heroPosition.left} hp={roomLayout.hero.hp}/>}
            {(!victory && !defeat) && <Enemy top={enemyPosition.top} left={enemyPosition.left} hp={roomLayout.enemy.hp}/>}
            {victory && <Victory/>}
            {defeat &&<Defeat/>}
        </>
    )
}

export default Room;