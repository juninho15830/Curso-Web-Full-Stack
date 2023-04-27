import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details(){

  return( //Conteúdo
    <Container>
      <h1>Hello World!</h1>
      <p>Meu nome é Junior</p>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}