import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="finance" />
                <button>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}