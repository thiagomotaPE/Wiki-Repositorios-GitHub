import { useState } from 'react';
import { api } from '../services/api';

import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

import {Container, Pesquisar} from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      } 
    }
    alert('repositorio ja listado!')
  }

  const handleRemoveRepo = (id) =>{
    const repoRemove = repos.filter((repo) => repo.id !== id);
    setRepos(repoRemove);
  }

  return (
    <Container >
      < img src={gitLogo} alt="logo-GitHub" width={72} height={72} />
      <Pesquisar>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
      </Pesquisar>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;

