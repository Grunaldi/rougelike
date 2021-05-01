
export const changeHeroPosition = (key,layout)=>{
    if(key==="w"){
        if(isMoveLegal("w",layout)){
            return {
                top:-101,
                left:0,
                hero:{r:-1,c:0}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0}
            }
        }

    }
    if(key==="s"){
        if(isMoveLegal("s",layout)){
            return {
                top:101,
                left:0,
                hero:{r:1,c:0}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0}
            }
        }
    }
    if(key==="a"){
        if(isMoveLegal("a",layout)){
            return {
                top:0,
                left:-101,
                hero:{r:0,c:-1}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0}
            }
        }
    }
    if(key==="d"){
        if(isMoveLegal("d",layout)){
            return {
                top:0,
                left:101,
                hero:{r:0,c:1}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0}
            }
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

const isMoveLegal=(key,layout)=>{
    let tempHero={r:0,c:0};

    function checkLegal() {
        let isNotInRoomBorders = tempHero.r < 0 || tempHero.r >= layout.rows || tempHero.c < 0 || tempHero.c >= layout.columns;
        let isOnEnemy = tempHero.r === layout.enemy.r && tempHero.c === layout.enemy.c
        return (!isNotInRoomBorders && !isOnEnemy);
    }

    if(key==="w"){
        tempHero={r:layout.hero.r-1,c:layout.hero.c}
        return checkLegal();
    }
    if(key==="s"){
        tempHero={r:layout.hero.r+1,c:layout.hero.c}
        return checkLegal();
    }
    if(key==="a"){
        tempHero={r:layout.hero.r,c:layout.hero.c-1}
        return checkLegal();
    }
    if(key==="d"){
        tempHero={r:layout.hero.r,c:layout.hero.c+1}
        return checkLegal();
    }
}