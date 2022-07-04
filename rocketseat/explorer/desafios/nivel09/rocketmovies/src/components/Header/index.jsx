import { Input } from '../../components/Input'
import { Container, Profile} from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="search">
        <Input
          placeholder="Pesquisar pelo titulo" 
          type="text" 
        />
      </div>
      <Profile>
        <div>
          <strong>Daniel de Paula</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/danielcpaula.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  )
}