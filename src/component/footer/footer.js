import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp, FaTiktok  } from 'react-icons/fa';
import { BiHome } from 'react-icons/bi'

function Footer() {
    return(
        <div className='footers'>
            <div className='footer-satu'>
                <h4><BiHome/></h4>
                <h6>Kampung Belang</h6>
                <p>Alamat : jl.Mawar Rt 03 Rw 06 Kel.cururg Kec.Bojongsari</p>
            </div>
            <div className='footer-dua'>
                <h6>Layanan Kami :</h6>
                <ul>
                    <li>Cafe</li>
                    <li>Restoran</li>
                    <li>Aula Serbaguna</li>
                </ul>
            </div>
            <div className='footer-tiga'>
                <h6>Kunjungi Kami di : </h6>
                    <ul>
                        <li><FaFacebook/></li>
                        <li><FaTwitter/></li>
                        <li><FaInstagram/></li>
                        <li><FaWhatsapp/></li>
                        <li><FaTiktok/></li>
                    </ul>
            </div>

            <div className='footer-empat'>
                <p> Copyright @ 2022</p>
            </div>
            
        </div>
    )
}

export default Footer;