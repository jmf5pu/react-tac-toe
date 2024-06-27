export enum Status{
    BLANK,
    CIRCLE,
    CROSS
};

export interface TileProps{
    id: number,
    statuses: Status[],
    setTileStatuses: React.Dispatch<React.SetStateAction<Status[]>>,
    firstPlayerTurn: boolean,
    setFirstPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>
};

export interface ModalProps{
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};

export interface BoardProps{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};