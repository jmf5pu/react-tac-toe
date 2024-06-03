
import { useEffect, useState } from "react";
import Tile from "./tile";
import { Status } from "./models";
import "../global.css";


function Board(){
    const [firstPlayerTurn, setFirstPlayerTurn] = useState(true);
    const [tileOneStatus, setTileOneStatus] = useState(Status.BLANK);
    const [tileTwoStatus, setTileTwoStatus] = useState(Status.BLANK);
    const [tileThreeStatus, setTileThreeStatus] = useState(Status.BLANK);
    const [tileFourStatus, setTileFourStatus] = useState(Status.BLANK);
    const [tileFiveStatus, setTileFiveStatus] = useState(Status.BLANK);
    const [tileSixStatus, setTileSixStatus] = useState(Status.BLANK);
    const [tileSevenStatus, setTileSevenStatus] = useState(Status.BLANK);
    const [tileEightStatus, setTileEightStatus] = useState(Status.BLANK);
    const [tileNineStatus, setTileNineStatus] = useState(Status.BLANK);    

    const gameWon = (checkingFirstPlayer: boolean) : boolean => {
        let gameWon: boolean = false;
        let targetStatus: Status = checkingFirstPlayer ? Status.CROSS : Status.CIRCLE;

        if([tileOneStatus, tileTwoStatus, tileThreeStatus].every(status => status === targetStatus)) // check rows
            gameWon = true;
        else if([tileFourStatus, tileFiveStatus, tileSixStatus].every(status => status === targetStatus))
            gameWon = true;
        else if([tileSevenStatus, tileEightStatus, tileNineStatus].every(status => status === targetStatus))
            gameWon = true;
        else if([tileOneStatus, tileFourStatus, tileSevenStatus].every(status => status === targetStatus)) // check cols
            gameWon = true;
        else if([tileTwoStatus, tileFiveStatus, tileEightStatus].every(status => status === targetStatus))
            gameWon = true;
        else if([tileThreeStatus, tileSixStatus, tileNineStatus].every(status => status === targetStatus))
            gameWon = true;
        else if([tileOneStatus, tileFiveStatus, tileNineStatus].every(status => status === targetStatus)) // check diagonals
            gameWon = true;
        else if([tileThreeStatus, tileFiveStatus, tileSevenStatus].every(status => status === targetStatus))
            gameWon = true;

        return gameWon;
    };

    const boardFull = () : boolean => {
        return (
            tileOneStatus !== Status.BLANK && 
            tileTwoStatus !== Status.BLANK && 
            tileThreeStatus !== Status.BLANK &&
            tileFourStatus !== Status.BLANK &&
            tileFiveStatus !== Status.BLANK &&
            tileSixStatus !== Status.BLANK &&
            tileSevenStatus !== Status.BLANK &&
            tileEightStatus !== Status.BLANK &&
            tileNineStatus !== Status.BLANK
        );
    }

    const gameComplete = () : boolean => {
        return gameWon(true) || gameWon(false) || boardFull();
    };

    useEffect(() => {
        if(gameComplete()){
            alert("game over");
            setFirstPlayerTurn(true);
            setTileOneStatus(Status.BLANK);
            setTileTwoStatus(Status.BLANK);
            setTileThreeStatus(Status.BLANK);
            setTileFourStatus(Status.BLANK);
            setTileFiveStatus(Status.BLANK);
            setTileSixStatus(Status.BLANK);
            setTileSevenStatus(Status.BLANK);
            setTileEightStatus(Status.BLANK);
            setTileNineStatus(Status.BLANK);
        }
    });

    return <div className="board-grid-div">
        <Tile status={tileOneStatus} setTileStatus={setTileOneStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileTwoStatus} setTileStatus={setTileTwoStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileThreeStatus} setTileStatus={setTileThreeStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileFourStatus} setTileStatus={setTileFourStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileFiveStatus} setTileStatus={setTileFiveStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileSixStatus} setTileStatus={setTileSixStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileSevenStatus} setTileStatus={setTileSevenStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileEightStatus} setTileStatus={setTileEightStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile status={tileNineStatus} setTileStatus={setTileNineStatus} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
    </div>;
};

export default Board;