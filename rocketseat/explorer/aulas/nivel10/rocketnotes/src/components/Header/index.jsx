import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from './styles';

export function Header(){
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/danielcpaula.png" alt="Foto do Usuário" />
        <div>
          <span>Bem Vindo,</span>
          <strong>Daniel de Paula</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}