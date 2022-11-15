import React from 'react';
import { infoCafe } from '../utils/dataPageCafe'
import { galeryimage } from '../utils/dataGalery';
import InfoCafeList from '../component/component-cafe/Page';
import ImageDoc from '../component/component-cafe/carosel';
import TableMenuCafe from '../component/component-cafe/tableMenuCafe'
import { getDataCafe } from '../utils/datamenucafe';
import ListGalery from '../component/Galery/ListGalery';


function Cafe(){
    const [ Info ] = React.useState(() => infoCafe());
    const [ MenuCafe ] = React.useState(() => getDataCafe());
    const [ galery ] = React.useState(() => galeryimage())

    

    return(
        <div className='cafe'>
           <InfoCafeList cafes={Info} />
           <ImageDoc/>
           
           <ListGalery Galeries={galery} />
           
           <TableMenuCafe Datacafe={MenuCafe} />



        </div>
    )
}

export default Cafe;