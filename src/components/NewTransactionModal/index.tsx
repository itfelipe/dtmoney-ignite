import Modal from 'react-modal'
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:()=>void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Esse é o modal de New Transactions</h2>
        </Modal>  
    )
}
