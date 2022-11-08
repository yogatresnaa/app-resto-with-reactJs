import React from 'react';
import ImageMenu from './ImgaeMenuItem';
import KetMenu from './KetMenu';


function ItemMenu({imageMenu, name, harga}){
    return(
        <div className="item">
            <ImageMenu imageMenu={imageMenu} />
            <KetMenu name={name} harga={harga} />
        </div>
    )
}

export default ItemMenu;