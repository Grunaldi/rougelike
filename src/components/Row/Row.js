import React from "react"

import Cell from "../Cell/Cell"
import "./Row.scss"

export const Row =()=>{

    const handleClick=()=>{
        console.log("siema!");
    }

    return(
        <>
            <div className="row">
                <Cell type="warning" text="Counter" onClick={handleClick}/>
                <Cell type="info" text="Counter" onClick={handleClick}/>
                <Cell type="error" text="Counter" onClick={handleClick}/>
                <Cell type="success" text="Counter" onClick={handleClick}/>
            </div>

        </>
    )
}
