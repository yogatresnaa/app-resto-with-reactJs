import React from 'react';


function KetMenu({name, harga}) {
    return(
        <div className= "ketmenu">
            <p>Menu : {name}</p>
            <p>Harga : {harga}</p>
        </div>
    )
}

export default KetMenu;