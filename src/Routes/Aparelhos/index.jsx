import { Link } from "react-router-dom"
import { listaAparelhos } from "../../components/listaAparelhos"
import './aparelhos.css';

export default function Aparelhos(){

    return(
           <div className="ContainerAparelhos">
                <div className="Texto">
                    <h1>Aparelhos</h1>
                </div>
                <div className="Aparelhos">{
                     listaAparelhos.map(aparelho => (

                        <div key={aparelho.id} className="Apaid">
                            <div key={aparelho.id}>
                                <img src={aparelho.foto} alt={aparelho.nome} />
                                <Link to={`/visualizar/aparelho/${aparelho.id}`}>
                                <p className="nome"> {aparelho.nome}</p>
                                </Link>
                            </div>
                        </div>
                     ))
                }
               
            </div>
        </div>
        )
}