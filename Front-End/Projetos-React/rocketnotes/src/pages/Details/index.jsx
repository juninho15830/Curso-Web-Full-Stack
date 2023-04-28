import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";

export function Details(){

  return( //Conteúdo
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}