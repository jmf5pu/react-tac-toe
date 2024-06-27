
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

    const renderTile = (id: number) => (
        <div>
            <Tile
                key={id}
                id={id}
                statuses={tileStatuses}
                setTileStatuses={setTileStatuses}
                firstPlayerTurn={firstPlayerTurn}
                setFirstPlayerTurn={setFirstPlayerTurn}
            />
        </div>
    );

    let tileIndices: number[] = Array.from({ length: 9 }, (_, i) => i);
 
    return <div className="board-flex-parent-div">
        <div className="board-spacer-div">
            <img src="/assets/board.png"/>
        </div>
        <div className="board-tile-grid-div">
            {
                tileIndices.map(
                    (index) => (
                        renderTile(index)
                    )
                )
            }
        </div>
    </div>;
};

export default Board;