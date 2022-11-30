import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {Container} from './styles';

function App() {
  return (
    <Container >
      < img src={gitLogo} alt="logo-GitHub" width={72} height={72} />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;

// api repositorio github
// https://api.github.com/repos/thiagomotaPE/Clone-DIO._

