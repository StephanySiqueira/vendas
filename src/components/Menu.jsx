import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <nav>
            <div className="menu">
                <Link to='/' >Home</Link>
                <Link to='/Aparelhos'>Aparelhos</Link>
            </div>
        </nav>
    )
}