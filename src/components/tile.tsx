import { Status, TileProps } from "./models";

function Tile({id, statuses, setTileStatuses, firstPlayerTurn, setFirstPlayerTurn}: TileProps){
    const tileOnClick = () => {
        if(statuses[id] === Status.BLANK){
            let newStatus: Status = firstPlayerTurn ? Status.CROSS : Status.CIRCLE;
            const updatedStatuses = [...statuses];
            updatedStatuses[id] = newStatus;
            setTileStatuses(updatedStatuses);
            setFirstPlayerTurn(!firstPlayerTurn)
        }
    };

    return <div className="tile-div" onClick={tileOnClick}>
        {statuses[id] === Status.BLANK && <img src="path/to/option2-image.jpg" alt=" " />}
        {statuses[id] === Status.CROSS && <img src="../assets/cross.png" alt="X" />}
        {statuses[id] === Status.CIRCLE && <img src="../assets/circle.png" alt="O" />}
    </div>;
};

export default Tile;