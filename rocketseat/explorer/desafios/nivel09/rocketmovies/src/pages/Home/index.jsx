import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Film } from "../../components/Film"
import { Container, Content, Section } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <Content>
        <Section>
          <div className="header">
            <h2>Meus filmes</h2>
            <Button 
              className="btn-header"
              title="Adicionar filme"
            />
          </div>
          <Film data={{
            title: 'Interestellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ',
             stars : 1 
          }}
          />

        </Section>
      </Content>
    </Container>
  )
}