import React from 'react';

import Infoitem from './infoPage';

function InfoCafeList({cafes}){

    return(
        <div>
            {cafes.map((caf) => (
                <Infoitem 
                key={caf.id}
                id ={caf.id}
                {...caf}/>
            ))}
        </div>
    )

}

export default InfoCafeList;