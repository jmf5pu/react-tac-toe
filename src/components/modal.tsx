import { ModalProps } from "./models";

function Modal({ showModal }: ModalProps){
    return <div className="modal-div">
        { showModal ? <p> hello </p> : <p> goodbye </p>}
    </div>;
}

export default Modal;