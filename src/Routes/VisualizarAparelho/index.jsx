import { useParams, useNavigate } from "react-router-dom";
import { listaAparelhos } from "../../components/listaAparelhos";
import './VisualizarAparelho.css';

export default function VisualizarAparelho(){
    
    const lista = listaAparelhos

    const navegacao = useNavigate()

    const {id} = useParams()

 

    const apar = lista.filter(apa => apa.id == id)

    const aparelho = apar[0]

   

 

    const voltar = ()=>{
        return navegacao('/aparelhos')
    }

    return(

        <main>
            <div className="ContainerVisualizar">
                <h1>Visualizar Aparelhos</h1>
                <div className="Visualizar">
                    <p className="nomeaparelho">{aparelho.nome}</p>

                    <img src={aparelho.foto} alt={aparelho.nome}/>

                    <p>{aparelho.descricao}</p>

                    <p className="preco">{aparelho.preco}</p>

                    <button onClick={voltar}>Voltar</button>
                </div>
            </div>
        </main>

    )

}
 


