import React from 'react';
import { getMenu, getDocumentasi } from '../utils/dataMenu';
import { galeryimage } from '../utils/dataGalery';
import HeroImage from '../component/HeroImage/HeroImage';
import InfoProfil from '../component/Content/Info';
// import Listmenu from '../component/MenuCafe/ListMenu';

import ListDokumentasi from '../component/DokumetasiHome/ListItem';
import ListGalery from '../component/Galery/ListGalery';
import ImageDocumentasi from '../component/Content/ImageDoc';
import MenuNav from '../component/component-cafe/menu';



class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dokumentasi: getDocumentasi(),
            menu: getMenu(),
            galeri:galeryimage(),
        }
    }
    


    render(){
        return(
            <>
                <div className='hero'>
                    <HeroImage/>
                </div>
                    <MenuNav/>
                    <InfoProfil />
                    <ImageDocumentasi/>
                {/* <div className='list'>
                    <h2>Menu Sepesial</h2>
                    <Listmenu menus={this.state.menu}/> <br></br>      
                </div> */}

                <div className='list-dok'>
                    <ListDokumentasi Doks={this.state.dokumentasi}/>
                </div>
                    <ListGalery Galeries={this.state.galeri} />
            </>
            
        )
    }
}

export default HomePage;