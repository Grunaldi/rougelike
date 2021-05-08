
export const changeHeroPosition = (key,layout)=>{
    if(key==="w"){
        if(isHeroMoveLegal("w",layout).inRoom){
            if(isHeroMoveLegal("w",layout).onEnemy){
                return {
                    top:0,
                    left:0,
                    hero:{r:0,c:0},
                    enemy:{hp:{current:layout.enemy.hp.current-layout.hero.dmg.flat}}
                }
            }
            return {
                top:-101,
                left:0,
                hero:{r:-1,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }

    }
    if(key==="s"){
        if(isHeroMoveLegal("s",layout).inRoom){
            if(isHeroMoveLegal("s",layout).onEnemy){
                return {
                    top:0,
                    left:0,
                    hero:{r:0,c:0},
                    enemy:{hp:{current:layout.enemy.hp.current-layout.hero.dmg.flat}}
                }
            }
            return {
                top:101,
                left:0,
                hero:{r:1,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }
    }
    if(key==="a"){
        if(isHeroMoveLegal("a",layout).inRoom){
            if(isHeroMoveLegal("a",layout).onEnemy){
                return {
                        top:0,
                        left:0,
                        hero:{r:0,c:0},
                        enemy:{hp:{current:layout.enemy.hp.current-layout.hero.dmg.flat}}
                    }
            }
            return {
                top:0,
                left:-101,
                hero:{r:0,c:-1},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }
    }
    if(key==="d"){
        if(isHeroMoveLegal("d",layout).inRoom){
            console.log("here")
            if(isHeroMoveLegal("d",layout).onEnemy){
                return {
                    top:0,
                    left:0,
                    hero:{r:0,c:0},
                    enemy:{hp:{current:layout.enemy.hp.current-layout.hero.dmg.flat}}
                }
            }
            return {
                top:0,
                left:101,
                hero:{r:0,c:1},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }
        else{
            return {
                top:0,
                left:0,
                hero:{r:0,c:0},
                enemy:{hp:{current:layout.enemy.hp.current}}
            }
        }
    }
}

export const changeEnemyPosition =(heroPosition,enemyPosition,layout)=>{
    const enemyPosUp={top:enemyPosition.top-101,left:enemyPosition.left,direction:"up"}
    const enemyPosDown={top:enemyPosition.top+101,left:enemyPosition.left,direction:"down"}
    const enemyPosLeft={top:enemyPosition.top,left:enemyPosition.left-101,direction:"left"}
    const enemyPosRight={top:enemyPosition.top,left:enemyPosition.left+101,direction:"right"}

    let allPotentialPositions=[enemyPosUp,enemyPosDown,enemyPosLeft,enemyPosRight];

    let allLegalPositions=[];

    for (let i = 0; i < allPotentialPositions.length; i++) {
        if (isEnemyPositionLegal(allPotentialPositions[i].direction,layout)){
            allLegalPositions.push(allPotentialPositions[i])
        }
    }

    let allDistances=[];
    allLegalPositions.forEach(position=>{
        allDistances.push({distance:calculateDistance(heroPosition,position),direction:position.direction})
    })
    allDistances.sort((first,second)=>{return first.distance-second.distance})
    return pickEnemyLocation(allDistances[0],layout)

}

const calculateDistance=(pos1,pos2)=>{

    const sideA=(pos1.top-pos2.top)
    const sideB=(pos1.left-pos2.left)
    const sideC=sideA*sideA+sideB*sideB
    return Math.pow(sideC,0.5)
}

const pickEnemyLocation=(move,layout)=>{
    if (move.distance===0){
        return {
            top:0,
            left:0,
            enemy:{
                r:0,
                c:0
            },
            hero:{
                hp:{current:layout.hero.hp.current-layout.enemy.dmg.flat}
            }
        }
    }
    if(move.direction==="up"){
        return {
            top:-101,
            left:0,
            enemy:{
                r:-1,
                c:0
            },
            hero:{
                hp:{current:layout.hero.hp.current}
            }
        }
    }
    if(move.direction==="down"){
        return {
            top:101,
            left:0,
            enemy:{
                r:1,
                c:0
            },
            hero:{
                hp:{current:layout.hero.hp.current}
            }
        }
    }
    if(move.direction==="left"){
        return {
            top:0,
            left:-101,
            enemy:{
                r:0,
                c:-1
            },
            hero:{
                hp:{current:layout.hero.hp.current}
            }
        }
    }
    if(move.direction==="right"){
        return {
            top:0,
            left:101,
            enemy:{
                r:0,
                c:1
            },
            hero:{
                hp:{current:layout.hero.hp.current}
            }
        }
    }
}

const isHeroMoveLegal=(key,layout)=>{
    let tempHero={r:0,c:0};

    if(key==="w"){
        tempHero={r:layout.hero.r-1,c:layout.hero.c}
        return {inRoom:checkLegalMoveForHero(tempHero,layout.enemy,layout),onEnemy:checkHeroOnEnemy(tempHero,layout.enemy)};
    }
    if(key==="s"){
        tempHero={r:layout.hero.r+1,c:layout.hero.c}
        return {inRoom:checkLegalMoveForHero(tempHero,layout.enemy,layout),onEnemy:checkHeroOnEnemy(tempHero,layout.enemy)};
    }
    if(key==="a"){
        tempHero={r:layout.hero.r,c:layout.hero.c-1}
        return {inRoom:checkLegalMoveForHero(tempHero,layout.enemy,layout),onEnemy:checkHeroOnEnemy(tempHero,layout.enemy)};
    }
    if(key==="d"){
        tempHero={r:layout.hero.r,c:layout.hero.c+1}
        return {inRoom:checkLegalMoveForHero(tempHero,layout.enemy,layout),onEnemy:checkHeroOnEnemy(tempHero,layout.enemy)};
    }
}

const isEnemyPositionLegal=(direction,layout)=>{
    let tempPosition={r:0,c:0}

    if(direction==="up"){
        tempPosition={r:layout.enemy.r-1,c:layout.enemy.c}
        return checkLegalMoveForEnemy(tempPosition,layout.hero,layout)
    }
    if(direction==="down"){
        tempPosition={r:layout.enemy.r+1,c:layout.enemy.c}
        return checkLegalMoveForEnemy(tempPosition,layout.hero,layout)
    }
    if(direction==="left"){
        tempPosition={r:layout.enemy.r,c:layout.enemy.c-1}
        return checkLegalMoveForEnemy(tempPosition,layout.hero,layout)
    }
    if(direction==="right"){
        tempPosition={r:layout.enemy.r,c:layout.enemy.c+1}
        return checkLegalMoveForEnemy(tempPosition,layout.hero,layout)
    }
}

function checkLegalMoveForHero(positionOne, positionTwo,layout) {
    let isNotInRoomBorders = positionOne.r < 0 || positionOne.r >= layout.rows || positionOne.c < 0 || positionOne.c >= layout.columns;
    return !isNotInRoomBorders;
}

function checkHeroOnEnemy(positionOne, positionTwo){
    let isOnEnemy = positionOne.r === positionTwo.r && positionOne.c === positionTwo.c
    return isOnEnemy
}

function checkLegalMoveForEnemy(positionOne, positionTwo,layout) {
    let isNotInRoomBorders = positionOne.r < 0 || positionOne.r >= layout.rows || positionOne.c < 0 || positionOne.c >= layout.columns;
    return (!isNotInRoomBorders);
}