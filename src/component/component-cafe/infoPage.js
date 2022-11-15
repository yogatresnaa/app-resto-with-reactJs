import React from 'react';

function Infoitem({imageCafe, narasi}) {
    
    
    return(
        <>
            <div className='info-cafe'>
                <div className='img-cafe'>
                    <img src={imageCafe} alt="" />
                </div>
                <div className='narasi-cafe'>
                    <h2>Cafe</h2>
                    <p>{narasi}</p>
                </div>

            </div>
        </>
    )
}

export default Infoitem;