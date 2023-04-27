import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details(){

  return( //Conteúdo
    <Container>
      <Header />

      <Button title="Voltar"/>
    </Container>
  )
}