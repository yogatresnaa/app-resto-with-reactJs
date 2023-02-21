/* eslint-disable no-unused-vars */
import React from 'react';
import { infoCafe } from '../utils/dataPageCafe'
import { galeryimage } from '../utils/dataGalery';
import InfoCafeList from '../component/component-cafe/Page';
import ImageDoc from '../component/component-cafe/carosel';
import TableMenuCafe from '../component/component-cafe/tableMenuCafe'
import { getDataCafe } from '../utils/datamenucafe';
import ListGalery from '../component/Galery/ListGalery';
import { getMenu } from '../utils/dataMenu';
import Listmenu from '../component/MenuCafe/ListMenu';


function Cafe(){
    const [ Info] = React.useState(() => infoCafe());
    const [ MenuCafe] = React.useState(() => getDataCafe());
    const [ galery] = React.useState(() => galeryimage());
    const [ menuhidangan] = React.useState(() => getMenu());

    

    return(
        <div className='cafe'>
           <InfoCafeList cafes={Info} />
           <ImageDoc/>

           <div className='list-menu-cafe'>
                   <Listmenu menus={menuhidangan} />
           </div>
           
           <ListGalery Galeries={galery} />

           <TableMenuCafe Datacafe={MenuCafe} />



        </div>
    )
}

export default Cafe;