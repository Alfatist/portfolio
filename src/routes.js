import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio></Inicio>} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página bonita</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
