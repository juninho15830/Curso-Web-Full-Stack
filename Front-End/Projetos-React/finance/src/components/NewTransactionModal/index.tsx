import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category,
            type,
        })
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
        >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >

                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título" 
                />

                <input 
                    type="number"
                    placeholder="Valor"
                 />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}