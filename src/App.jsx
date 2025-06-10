import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import PaginaInicial from "./pages/PaginaInicial.jsx";
import PaginaApresentacao from "./pages/PaginaApresentacao.jsx";
import PaginaDecisao from "./pages/PaginaDecisao.jsx";
import PaginaViagens from "./pages/PaginaViagens.jsx";
import PaginaPasseios from "./pages/PaginaPasseios.jsx";
import PaginaJantar from "./pages/PaginaJantar.jsx";
import PaginaPresentes from "./pages/PaginaPresentes.jsx";
import PaginaResumo from "./pages/PaginaResumo.jsx";
import PaginaCampos from "./pages/viagens/Campos.jsx";
import PaginaIgarata from "./pages/viagens/Igarata.jsx";
import PaginaStoAntonio from "./pages/viagens/Sto-Antonio.jsx";
import PaginaGoncalves from "./pages/viagens/Goncalves.jsx";
import PaginaJacarei from "./pages/viagens/Jacarei.jsx";
import PaginaMonteVerde from "./pages/viagens/MonteVerde.jsx";
import PaginaSaoPaulo from "./pages/viagens/SaoPaulo.jsx";
import PaginaStaIsabel from "./pages/viagens/Sta-Isabel.jsx";
import PaginaSaoBento from "./pages/viagens/Sao-Bento.jsx";
import PaginaObservarCeu from "./pages/data/ObservarCeu.jsx";
import PaginaNoiteCasa from "./pages/data/NoiteEmCasa.jsx";

import Totalizador from "./components/Totalizador.jsx";

import "./index.css";

const AppContent = () => {
  const location = useLocation();

  // Páginas onde não quer mostrar o Totalizador
  const paginasSemTotalizador = ["/", "/apresentacao"];

  return (
    <>
      {/* Renderiza Totalizador só se não estiver nas duas primeiras páginas */}
      {!paginasSemTotalizador.includes(location.pathname) && <Totalizador />}

      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/apresentacao" element={<PaginaApresentacao />} />
        <Route path="/decisao" element={<PaginaDecisao />} />
        <Route path="/viagens" element={<PaginaViagens />} />
        <Route path="/passeios" element={<PaginaPasseios />} />
        <Route path="/jantar" element={<PaginaJantar />} />
        <Route path="/presentes" element={<PaginaPresentes />} />
        <Route path="/resumo" element={<PaginaResumo />} />
        <Route path="/Campos" element={<PaginaCampos />} />
        <Route path="/Igarata" element={<PaginaIgarata />} />
        <Route path="/StoAntonio" element={<PaginaStoAntonio />} />
        <Route path="/Goncalves" element={<PaginaGoncalves />} />
        <Route path="/Jacarei" element={<PaginaJacarei />} />
        <Route path="/MonteVerde" element={<PaginaMonteVerde />} />
        <Route path="/SaoPaulo" element={<PaginaSaoPaulo />} />
        <Route path="/StaIsabel" element={<PaginaStaIsabel />} />
        <Route path="/SaoBento" element={<PaginaSaoBento />} />
        <Route path="/NoiteCasa" element={<PaginaNoiteCasa />} />
        <Route path="/ObservarCeu" element={<PaginaObservarCeu />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
