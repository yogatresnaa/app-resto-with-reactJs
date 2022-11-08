import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(){
    return(
        <div  className='navigation'>
            <nav>
                <ul>
                    <li><Link style={{textDecoration :'none', color: 'black'}} to="/">Home</Link></li>
                    <li>Profil</li>
                    <li><Link style={{textDecoration :'none',color: 'black'}} to="/">Layanan</Link>
                        <ul className='dropdown-menu'>
                            <li><Link style={{textDecoration :'none', color: 'black'}} to="/cafe" >Cafe</Link></li>
                            <li><Link style={{textDecoration :'none', color: 'black'}} to="/resto">Resto</Link></li>
                            <li><Link style={{textDecoration :'none', color: 'black'}} to="/aula">Aula</Link></li>
                            <li><Link style={{textDecoration :'none', color: 'black'}} to="/resepsi">Resepsi</Link></li>
                            <li><Link style={{textDecoration :'none', color: 'black'}} to="/senam">Senam</Link></li>
                        </ul>
                    </li>
                    <li>Masuk</li>
                    <li>Daftar</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;