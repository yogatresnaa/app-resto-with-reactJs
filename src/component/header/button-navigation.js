import React from 'react';
import { FaAlignRight,FaAlignLeft } from 'react-icons/fa'




function ButtonNavigation(){
    const [ toggle, setToggle ] = React.useState('ul.slide');

    const toggleNav = () => {
        setToggle((prevToggle) => {
            return prevToggle !== 'ul.slide' ? 'ul.slide' : 'ul';
        });
    };
  
    return(
       
        <div className='button-navigation'>
            <button onClick={toggleNav}>
                {toggle === 'ul.slide' ? <FaAlignLeft/> : <FaAlignRight/> }
            </button>
      
        </div>
        
    )
}

export default ButtonNavigation;