import React from 'react';


function ImgItem({imageMenu}){
    return(
        <div className= 'img'>
            <img src={imageMenu} alt=" " />
        </div>
    )
}

export default ImgItem;