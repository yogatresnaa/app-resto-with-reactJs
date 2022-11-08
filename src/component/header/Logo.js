import React from 'react';
import { Link } from 'react-router-dom';
import { BiHome }  from 'react-icons/bi';

function Logo(){
    return(
        <div className='logo'>
           <Link style={{textDecoration :'none', color: 'white'}} to="/"><h1><BiHome/></h1></Link> 
        </div>
    )
}

export default Logo;