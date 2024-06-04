
import { useEffect, useState } from "react";
import Tile from "./tile";
import { Status } from "./models";
import "../global.css";


function Board(){
    const [firstPlayerTurn, setFirstPlayerTurn] = useState(true);
    const [tileStatuses, setTileStatuses] = useState(Array(9).fill(Status.BLANK));  

    const gameWon = (checkingFirstPlayer: boolean) : boolean => {
        let gameWon: boolean = false;
        let targetStatus: Status = checkingFirstPlayer ? Status.CROSS : Status.CIRCLE;

        if([tileStatuses[0], tileStatuses[1], tileStatuses[2]].every(status => status === targetStatus)) // check rows
            gameWon = true;
        else if([tileStatuses[3], tileStatuses[4], tileStatuses[5]].every(status => status === targetStatus))
            gameWon = true;
        else if([tileStatuses[6], tileStatuses[7], tileStatuses[8]].every(status => status === targetStatus))
            gameWon = true;
        else if([tileStatuses[0], tileStatuses[3], tileStatuses[6]].every(status => status === targetStatus)) // check cols
            gameWon = true;
        else if([tileStatuses[1], tileStatuses[4], tileStatuses[7]].every(status => status === targetStatus))
            gameWon = true;
        else if([tileStatuses[2], tileStatuses[5], tileStatuses[8]].every(status => status === targetStatus))
            gameWon = true;
        else if([tileStatuses[0], tileStatuses[4], tileStatuses[8]].every(status => status === targetStatus)) // check diagonals
            gameWon = true;
        else if([tileStatuses[2], tileStatuses[4], tileStatuses[6]].every(status => status === targetStatus))
            gameWon = true;

        return gameWon;
    };

    const boardFull = () : boolean => {
        return (
            tileStatuses[0] !== Status.BLANK && 
            tileStatuses[1] !== Status.BLANK && 
            tileStatuses[2] !== Status.BLANK &&
            tileStatuses[3] !== Status.BLANK &&
            tileStatuses[4] !== Status.BLANK &&
            tileStatuses[5] !== Status.BLANK &&
            tileStatuses[6] !== Status.BLANK &&
            tileStatuses[7] !== Status.BLANK &&
            tileStatuses[8] !== Status.BLANK
        );
    }

    const gameComplete = () : boolean => {
        return gameWon(true) || gameWon(false) || boardFull();
    };

    useEffect(() => {
        if(gameComplete()){
            (async () => {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert("game over");
                setTileStatuses(Array(9).fill(Status.BLANK));
            })();
        }
    });

    return <div className="board-grid-div">
        <Tile id={0} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={1} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={2} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={3} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={4} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={5} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={6} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={7} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
        <Tile id={8} statuses={tileStatuses} setTileStatuses={setTileStatuses} firstPlayerTurn={firstPlayerTurn} setFirstPlayerTurn={setFirstPlayerTurn}/>
    </div>;
};

export default Board;