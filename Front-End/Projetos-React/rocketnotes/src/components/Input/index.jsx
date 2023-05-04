import { Container } from "./styles";

export function Input({icon: Icon, ...rest}){ //icon: Icon serve para converter a letra minuscula do icon para maiuscula para usalo como componente.
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}