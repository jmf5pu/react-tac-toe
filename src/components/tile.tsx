import { useState } from "react";
import { Status, TileProps } from "./models";

function Tile({status, setTileStatus, firstPlayerTurn, setFirstPlayerTurn}: TileProps){

    const tileOnClick = () => {
        if(status === Status.BLANK){
            setTileStatus(firstPlayerTurn ? Status.CROSS : Status.CIRCLE);
            setFirstPlayerTurn(!firstPlayerTurn)
        }
    };

    return <div className="tile-div" onClick={tileOnClick}>
        {status === Status.BLANK && <img src="path/to/option2-image.jpg" alt=" " />}
        {status === Status.CROSS && <img src="../assets/cross.png" alt="X" />}
        {status === Status.CIRCLE && <img src="../assets/circle.png" alt="O" />}
    </div>;
};

export default Tile;