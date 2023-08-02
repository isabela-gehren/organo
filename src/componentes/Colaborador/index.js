import './Colaborador.css'
import { AiFillHeart, AiOutlineHeart, AiFillDelete } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id);
    }
    function deletar(){
        aoDeletar(colaborador.id);
    }

    return (<div className='colaborador'>
        <AiFillDelete
            size={35}
            className='deletar' 
            onClick={deletar}
        ></AiFillDelete>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                { colaborador.favorito 
                ? <AiFillHeart size={25} onClick={favoritar}/> 
                : <AiOutlineHeart size={25} onClick={favoritar}/> }
            </div>
        </div>
    </div>)
}

export default Colaborador