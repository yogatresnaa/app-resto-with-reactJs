import React from 'react';


function KetMenu({name, harga}) {
    return(
        <div className= "ketmenu">
            <h4>Menu : {name}</h4>
            <h4>Harga : {harga}</h4>
        </div>
    )
}

export default KetMenu;