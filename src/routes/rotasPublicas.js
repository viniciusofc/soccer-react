import * as React from 'react';
import Login from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index';
import Not_Found from '../pages/Not_Found/index';
import Recovery from '../pages/Recovery/index';

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CadastroSepul from '../pages/CadastroSepul'
// import Navbar from '../components/Navbar';
// import CadastroCemiterio from '../pages/CadastroCemiterio';

const rotasPrivadas = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                {/* <Navbar /> */}
                <Routes>
                    <Route index path="*" element={<Not_Found />} />
                    <Route index path="/login" element={<Login />} />
                    <Route index path="/cadastro" element={<Cadastro />} />
                    <Route index path="/recovery" element={<Recovery />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default rotasPrivadas;