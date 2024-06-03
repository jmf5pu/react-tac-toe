import { useState } from "react";
import { Status, TileProps } from "./models";

function Tile({status, setTileStatus, firstPlayerTurn, setFirstPlayerTurn}: TileProps){

    const tileOnClick = () => {
        if(status === Status.BLANK){
            setTileStatus(firstPlayerTurn ? Status.CROSS : Status.CIRCLE);
            setFirstPlayerTurn(!firstPlayerTurn)
        }
    };

    return <button onClick={tileOnClick}>{status}</button>;
};

export default Tile;