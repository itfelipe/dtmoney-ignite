import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal'
interface props{
    onOpenNewTransactionModal : ()=>void;
}

export function Header({onOpenNewTransactionModal}:props) {
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setisNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModal() {
        setisNewTransactionModalOpen(false)

    }


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
            </button>

            </Content>
        </Container>
    )

}