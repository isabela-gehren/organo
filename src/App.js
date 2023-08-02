import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D8790E'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#067779'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#F7C5C7'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#941E71'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#59D95B'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#F1FF06'
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      nome: 'ISABELA DEV',
      cargo: 'DEV',
      imagem: 'https://images.vexels.com/media/users/3/296486/isolated/lists/6a810c98ce678d8c7f4d93b8a672ba27-personagem-fofo-de-cacto-de-flor-legal.png',
      time: times[0].nome,
      favorito: true
    },
    {
      id: uuidv4(),
      nome: 'LUIGI VALIDATING',
      cargo: 'QA',
      imagem: 'https://images.vexels.com/media/users/3/157784/isolated/preview/bf2d571488a39e11419799c2a29a010d-cacto-fofo.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'RAFAEL ENTUSIASTA',
      cargo: 'DEV',
      imagem: 'https://images.vexels.com/media/users/3/230403/isolated/preview/4fe9fa7f26be30833d12bb7beb0ff777-cacto-espantado.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO DE SAQUAREMA',
      cargo: 'DEV',
      imagem: 'https://images.vexels.com/media/users/3/296485/isolated/preview/2ed5627dd5f44c0330222ee581400cf0-personagem-fofo-de-cacto-de-barra-de-ouro-legal.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DUSI FREE STYLE',
      cargo: 'UX',
      imagem: 'https://images.vexels.com/media/users/3/157784/isolated/preview/bf2d571488a39e11419799c2a29a010d-cacto-fofo.png',
      time: times[4].nome,
      favorito: false
    }
    

  ]

  const [colaboradores, setColaboradores] = useState(initial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, { ...novoTime , id: uuidv4() }])
  }

  function deletarColaborador(id){
     setColaboradores(colaboradores.filter(c => c.id !== id));
  }

  function favoritarColaborador(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      aoCadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map((time, index) => <Time 
        key={index} 
        time={time}
        mudarCor = {mudarCorDoTime}
        onDeletar={deletarColaborador}
        onFavoritar={favoritarColaborador}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
