import React from 'react';
import ImgItem from './ImgMenuItem';
import ItemMenu from './menuItem';


function Item({imageMenu, Acara, Deskripsi }) {
    return(
        <div className='item-dok'>
            <ImgItem imageMenu={imageMenu} />
            <ItemMenu Acara={Acara}  Deskripsi={Deskripsi} />

        </div>
    )
}

export default Item;