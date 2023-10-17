import * as React from 'react';
import Home from '../pages/Tela_Inicial/index';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Perfil from '../pages/Perfil';
import Config from '../pages/Config';
import Suporte from '../pages/Suporte';
import NotFound from '../pages/Not_Found';
import SideBar from '../componets/SideBar';
import CadastroGrupo from '../pages/CadastroGrupo';
// import CadastroSepul from '../pages/CadastroSepul'
// import Navbar from '../components/Navbar';
// import CadastroCemiterio from '../pages/CadastroCemiterio';

const rotasPrivadas = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <SideBar />
                <Routes>
                    <Route index path="/*" element={<NotFound />} />
                    <Route index path="/home" element={<Home />} />
                    <Route index path="/person" element={<Perfil />} />
                    <Route index path="/settings" element={<Config />} />
                    <Route index path="/support" element={<Suporte />} />
                    <Route index path="/cadastrar/grupo" element={<CadastroGrupo />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default rotasPrivadas;