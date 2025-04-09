import "./css/App.css";
import "./css/Header.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Add from "./components/Add";
import Atualizar from "./components/Atualizar";
import Listar from "./components/Listar";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>Vinicius Mizuguchi Pagani</h1>
        </div>
        <nav className="nav">
          <button className="btn-add" onClick={() => navigate("/add")}> 
            Adicionar 
          </button>
        </nav>
      </header> 

      <Routes>
        {/* tela 1 - Listagem */}
        <Route path="/" element={<Listar />} />

        {/* tela 2 - Atualizar */}
        <Route path="/atualizar/:id" element={<Atualizar />} />
        
        {/* tela 1 - Add*/}
        <Route path="/add" element={<Add />} />
      </Routes>

    </div>
  );
}

export default App;
