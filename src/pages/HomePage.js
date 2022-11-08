import React from 'react';
import { getMenu } from '../utils/dataMenu';
import { galeryimage } from '../utils/dataGalery';
import HeroImage from '../component/HeroImage/HeroImage';
import LayananResto from '../component/Content/Layanan';
import InfoProfil from '../component/Content/Info';
import Listmenu from '../component/MenuSepesial/ListMenu';
import ListGalery from '../component/Galery/ListGalery';
import ImageDocumentasi from '../component/Content/ImageDoc';


class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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
                    <LayananResto/>
                    <InfoProfil />
                    <ImageDocumentasi/>
                <div className='list'>
                    <h2>Menu Sepesial</h2>
                    <Listmenu menus={this.state.menu}/>
                </div>
                    <ListGalery Galeries={this.state.galeri} />
            </>
            
        )
    }
}

export default HomePage;