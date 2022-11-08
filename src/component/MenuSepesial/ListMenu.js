import React from 'react';
import ItemMenu from './Item';

function Listmenu({menus}){
    return(
        <div className="list-menu">
            {
                menus.map((menu) =>(
                    <ItemMenu
                    key={menu.id}
                    id={menu.id}
                    {...menu} />
                ))
            }
        </div>
    )
}

export default Listmenu;