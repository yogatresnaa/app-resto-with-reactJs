import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom'
import HeaderNav from './component/navbar-boostrap/navbar';
import HomePage from './pages/HomePage';
import Footer from './component/footer/footer';
import Cafe from './pages/Cafe';
import AulaSerba from './pages/AulaSerba';
import Resto from './pages/Resto';
import Resepsi from './pages/Resepsi';
import Senam from './pages/Senam';
import Karoke from './pages/karoke';


function App(){
    return(
        <Container fluid>
             <header>
                <HeaderNav/>
            </header>

          
            <main>    
                <Routes>
                    <Route path="/" element={<HomePage/> }/>
                    <Route path="/cafe" element={<Cafe/> }/>
                    <Route path="/aula" element={<AulaSerba/>}/>
                    <Route path ="/resto" element={<Resto/>}/>
                    <Route path="/resepsi" element={<Resepsi/>}/>
                    <Route path="/senam" element={<Senam/>}/>
                    <Route path="/karoke" element={<Karoke/>}/>
                </Routes>               
            </main>

            <footer>
                <Footer/>          
            </footer>
         
        </Container>
           

            
       
    )
}

export default App;