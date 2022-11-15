import React from 'react';
import {FaCoffee, FaTiktok} from 'react-icons/fa';
import { BiBuildingHouse, BiHome, BiBody } from 'react-icons/bi';
import { TbFriends } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function MenuNav(){
    return(
        <div className='menu'>
        <h2>Our Special</h2>
            <div className='menu-nav'>
                <div className='menu1'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/cafe'><FaCoffee/><p>Cafe</p></Link></h3>
                </div>
                
                <div className='menu2'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/aula'><BiBuildingHouse/><p>Aula</p></Link></h3>
                </div>
                <div className='menu3'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/resto'><BiHome/><p>Resto</p></Link></h3>
                </div>
                <div className='menu4'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/senam'><BiBody/><p>Senam</p></Link></h3>
                </div>
                <div className='menu5'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/resepsi'><TbFriends/><p>Resepsi</p></Link></h3>
                </div>

                <div className='menu6'>
                    <h3><Link style={{textDecoration :'none', color: 'white'}} to='/karoke'><FaTiktok/><p>Karoke</p></Link></h3>
                </div>
            </div>
        </div>
    )
}

export default MenuNav;
