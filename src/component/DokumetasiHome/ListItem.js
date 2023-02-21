import React from 'react';
import Item from './Item';

function ListDokumentasi({Doks}){
    return(
        <div className='List-Dokumentasi'>
            {
            Doks.map((Dok) => (
                <Item
                key={Dok.id}
                id={Dok.id}
                {...Dok} 
                />
            ))
        }
        </div>
    )
}

export default ListDokumentasi;