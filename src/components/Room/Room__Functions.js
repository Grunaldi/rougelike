import Room from "./Room";

export const changeHeroPosition = (key)=>{
    if(key==="w"){
        return {
            direction:"top",
            distance:-101
        }
    }
    if(key==="s"){
        return {
            direction:"top",
            distance:101
        }
    }
    if(key==="a"){
        return {
            direction:"left",
            distance:-101
        }
    }
    if(key==="d"){
        return {
            direction:"left",
            distance:101
        }
    }
}