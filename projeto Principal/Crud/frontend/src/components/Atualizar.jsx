import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Modal.css";  

const Update = () => {
  const [funcionarios, setfuncionarios] = useState({
    nome: "",
    cargo: "",
    salario: "",
    data_contratacao: "",
    telefone: "",
    email: "",
    cpf: "",
    genero: "",
    situacao: ""
  });

  const navigate = useNavigate();
  const location = useLocation();
  const funcionarioId = location.pathname.split("/")[2];

  // Buscar dados do funcionário atual
  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const response = await fetch(`http://localhost:8800/users`);
        const data = await response.json();
        const funcionario = data.find(f => f.id === parseInt(funcionarioId));
        if (funcionario) {
          setfuncionarios(funcionario);
        }
      } catch (err) {
        console.error("Erro ao buscar funcionário:", err);
      }
    };

    fetchFuncionario();
  }, [funcionarioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "salario" ? parseFloat(value) || "" : value;
    setfuncionarios((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const dataFormatada = funcionarios.data_contratacao?.split("T")[0];
    const dadosAtualizados = {
      ...funcionarios,
      data_contratacao: dataFormatada
    };

    try {
      const response = await fetch(`http://localhost:8800/users/${funcionarioId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
      });

      const result = await response.json();
      console.log("Resposta do backend:", result);
      navigate("/");
    } catch (err) {
      console.error("Erro ao atualizar funcionário:", err);
    }
  };

  return (
    <div className="Modal-add">
      <div className="Modal-add-content">
        <h2>Atualizar Funcionário</h2>

        <label><strong>Nome:</strong></label>
        <input type="text" name="nome" value={funcionarios.nome} onChange={handleChange} /> <br />

        <label><strong>CPF:</strong></label>
        <input type="text" name="cpf" value={funcionarios.cpf} onChange={handleChange} /> <br />

        <label><strong>Gênero:</strong></label>
        <select name="genero" value={funcionarios.genero} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select><br />

        <label><strong>Situação:</strong></label>
        <select name="situacao" value={funcionarios.situacao} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Ativo">Ativo</option>
          <option value="Afastado">Afastado</option>
          <option value="Desligado">Desligado</option>
        </select><br />

        <label><strong>Cargo:</strong></label>
        <input type="text" name="cargo" value={funcionarios.cargo} onChange={handleChange} /> <br />

        <label><strong>Salário:</strong></label>
        <input type="number" name="salario" value={funcionarios.salario} onChange={handleChange} /> <br />

        <label><strong>Data de contratação:</strong></label>
        <input type="date" name="data_contratacao" value={funcionarios.data_contratacao?.split("T")[0]} onChange={handleChange} /> <br />

        <label><strong>Telefone:</strong></label>
        <input type="text" name="telefone" value={funcionarios.telefone} onChange={handleChange} /> <br />

        <label><strong>E-mail:</strong></label>
        <input type="text" name="email" value={funcionarios.email} onChange={handleChange} /> <br />

        <button className="Modal-add-Button-cacelar" onClick={() => navigate("/")}>Cancelar</button>
        <button className="Modal-add-Button-salvar" onClick={handleClick}>Atualizar</button>
      </div>
    </div>
  );
};

export default Update;
