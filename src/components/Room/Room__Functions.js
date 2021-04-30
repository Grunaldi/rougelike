
export const changeHeroPosition = (key)=>{
    if(key==="w"){
        return {
            top:-101,
            left:0
        }
    }
    if(key==="s"){
        return {
            top:101,
            left:0
        }
    }
    if(key==="a"){
        return {
            top:0,
            left:-101
        }
    }
    if(key==="d"){
        return {
            top:0,
            left:101
        }
    }
}

export const changeEnemyPosition =(heroPosition,enemyPosition)=>{
    const enemyPosUp={top:enemyPosition.top-101,left:enemyPosition.left}
    const enemyPosDown={top:enemyPosition.top+101,left:enemyPosition.left}
    const enemyPosLeft={top:enemyPosition.top,left:enemyPosition.left-101}
    const enemyPosRight={top:enemyPosition.top,left:enemyPosition.left+101}

    const allDistances =[{distance:calculateDistance(heroPosition,enemyPosUp),direction:"up"},
        {distance:calculateDistance(heroPosition,enemyPosDown),direction:"down"},
        {distance:calculateDistance(heroPosition,enemyPosLeft),direction:"left"},
        {distance:calculateDistance(heroPosition,enemyPosRight),direction:"right"}]
    allDistances.sort((first,second)=>{return first.distance-second.distance})

    return pickEnemyLocation(allDistances[0].direction)

}

const calculateDistance=(pos1,pos2)=>{
    const sideA=((pos1.top)*-1)+pos2.top
    const sideB=((pos1.left)*-1)+pos2.left
    const sideC=sideA*sideA+sideB*sideB
    return Math.pow(sideC,0.5)
}

const pickEnemyLocation=(moveDirection)=>{
    if(moveDirection==="up"){
        return {
            top:-101,
            left:0
        }
    }
    if(moveDirection==="down"){
        return {
            top:101,
            left:0
        }
    }
    if(moveDirection==="left"){
        return {
            top:0,
            left:-101
        }
    }
    if(moveDirection==="right"){
        return {
            top:0,
            left:101
        }
    }
}