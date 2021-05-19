import React from "react"

import Cell from "../Cell/Cell"
import "./Row.scss"

export const Row =()=>{



    return(
        <>
            <div className="row">
                <Cell type="warning" text="Counter" />
                <Cell type="info" text="Counter" />
                <Cell type="error" text="Counter" />
                <Cell type="success" text="Counter" />
            </div>

        </>
    )
}
