import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { MdNoMeetingRoom } from 'react-icons/md'

const Formulario = ({ aoColaboradorCadastrado, times, aoCadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [timeNome, setTimeNome] = useState('')
    const [timeCor, setTimeCor] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        
        setTimeNome('')
        setTimeCor('')
    }

    return (
        <section className='formulario-container'>
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um novo colaborador</h2>
                <Campo 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar
                </Botao>
            </form>
            <form className='formulario' onSubmit={(evento)=>{
                evento.preventDefault();
                aoCadastrarTime({nome: timeNome, cor: timeCor});

                // setTimeNome('')
                // setTimeCor('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder= 'Digite o nome do time'
                    valor={timeNome}
                    aoAlterado = {valor=> setTimeNome(valor)}
                />
                <Campo
                    obrigatorio
                    label='Cor'
                    placeholder='Digite a cor do time'
                    type='color'
                    valor={timeCor}
                    aoAlterado = {valor => setTimeCor(valor)}
                />
                <Botao>Criar</Botao>
            </form>
        </section>
    )
}

export default Formulario