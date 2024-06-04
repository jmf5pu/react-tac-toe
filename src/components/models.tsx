export enum Status{
    BLANK,
    CIRCLE,
    CROSS
};

export interface TileProps{
    status: Status,
    setTileStatus: React.Dispatch<React.SetStateAction<Status>>
    firstPlayerTurn: boolean,
    setFirstPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>,
};