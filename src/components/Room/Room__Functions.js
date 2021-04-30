import Room from "./Room";

export const changeHeroPosition = (key)=>{
    if(key==="w"){
        return {
            direction:-101,
            distance:0
        }
    }
    if(key==="s"){
        return {
            direction:101,
            distance:0
        }
    }
    if(key==="a"){
        return {
            direction:0,
            distance:-101
        }
    }
    if(key==="d"){
        return {
            direction:0,
            distance:101
        }
    }
}