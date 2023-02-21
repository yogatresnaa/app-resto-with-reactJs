import React from 'react';

function ItemMenu({ Acara, Deskripsi }){
    return(
        <div className='menu-item'>
            <h3>{Acara}</h3>
            <p>{Deskripsi}</p>
        </div>
    )
}
export default ItemMenu;