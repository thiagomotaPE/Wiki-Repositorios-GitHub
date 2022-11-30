import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import {Container, Pesquisar} from './styles';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container >
      < img src={gitLogo} alt="logo-GitHub" width={72} height={72} />
      <Pesquisar>
        <Input />
        <Button />
      </Pesquisar>
      <ItemRepo />
    </Container>
  );
}

export default App;

