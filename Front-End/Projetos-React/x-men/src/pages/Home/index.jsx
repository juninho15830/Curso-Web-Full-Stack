import { Container } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
    return(
        <Container>

            <Header />

            <main>
                <section>
                    <h1>Selecione um personagem</h1>
                    <ul>
                        <li id="ciclope">
                            <img
                            src="./src/assets/images/card-ciclope.jpg"
                            alt="Personagem Ciclope"
                            />
                        </li>
                        <li id="jean-grey">
                            <img
                            src="./src/assets/images/card-jean-grey.jpg"
                            alt="Personagem Jean Grey"
                            />
                        </li>
                        <li id="lince-negra">
                            <img
                            src="./src/assets/images/card-lince-negra.jpg"
                            alt="Personagem Lince Negra"
                            />
                        </li>
                        <li id="tempestade">
                            <img
                            src="./src/assets/images/card-tempestade.jpg"
                            alt="Personagem Tempestade"
                            />
                        </li>
                        <li id="vampira">
                            <img
                            src="./src/assets/images/card-vampira.jpg"
                            alt="Personagem Vampira"
                            />
                        </li>
                        <li id="Wolverine">
                            <img
                            src="./src/assets/images/card-wolverine.jpg"
                            alt="Personagem Wolverine"
                            />
                        </li>
                        <li id="noturno">
                            <img
                            src="./src/assets/images/card-noturno.jpg"
                            alt="Personagem Noturno"
                            />
                        </li>
                        <li id="magneto">
                            <img
                            src="./src/assets/images/card-magneto.jpg"
                            alt="Personagem Magneto"
                            />
                        </li>
                    </ul>
                </section>
                <section>
                    <img
                        src="./src/assets/images/card-ciclope.png"
                        alt="Personagem Selecionado"
                    />
                    <div>
                        <h2 id="nome-personagem">Ciclope</h2>
                        <p id="descricao-personagem">
                            Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los
                        </p>
                    </div>
                </section>
            </main>
        </Container>
    )
}