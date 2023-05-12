
import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details(){

  return( //Conteúdo
    <Container>
      <Header /> 

      <main> 
        <Content> {/*estas tags main e content server para fazermos uma barra de rolagem no conteúdo sem rolar o header, fizemos isso atravez do arquivo styles.jsx */}
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure praesentium aperiam corporis iusto voluptatum, autem alias quibusdam vel tempora ab repellat excepturi laborum quos unde voluptatem voluptatibus eveniet officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sit molestias eaque fuga quasi praesentium, reiciendis nemo unde eveniet quae maiores voluptatibus distinctio, ipsam magnam iste culpa deserunt nisi aut.</p>

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
        </Content>
      </main>

    </Container>
  )
}