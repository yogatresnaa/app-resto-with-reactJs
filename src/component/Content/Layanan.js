import React from 'react';
import {FaCoffee} from 'react-icons/fa';
import { BiBuildingHouse, BiHome, BiBody } from 'react-icons/bi';
import { TbFriends } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function LayananResto(){
    return(
        <div className = "layanan ">
            <h2>Our Special</h2>
            <ul>
                
                <li><Link style={{textDecoration :'none', color: 'darkgoldenrod'}} to="/cafe" ><FaCoffee/> <h4>Cafe</h4> </Link></li>
                <li><Link style={{textDecoration :'none', color: 'darkgoldenrod'}} to="/resto"><BiHome/> <h4>Resto</h4></Link></li>
                <li><Link style={{textDecoration :'none', color: 'darkgoldenrod'}} to="/aula"><BiBuildingHouse/><h4>Aula</h4></Link></li>
                <li><Link style={{textDecoration :'none', color: 'darkgoldenrod'}} to="/resepsi"><TbFriends/> <h4>Resepsi</h4></Link></li>
                <li><Link style={{textDecoration :'none', color: 'darkgoldenrod'}} to="/senam"><BiBody/><h4>Senam</h4></Link></li>
            </ul>
        </div>
    )
}

export default LayananResto;

