import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Modal.css";



const Add = () => {
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

  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "salario" ? parseFloat(value) || "" : value;

    setfuncionarios((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const campos = Object.values(funcionarios);
    const algumVazio = campos.some((valor) => valor === "" || valor === null);

    if (algumVazio) {
      setErro("Todos os campos devem ser preenchidos !!!");
      return;
    }

    setErro(""); 

    try {
      const response = await fetch("http://localhost:8800/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(funcionarios)
      });

      const data = await response.json();
      console.log("Resposta do backend:", data);
      navigate("/");
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
    }
  };

  return (
    <div className="Modal-add">
      <div className="Modal-add-content">
        <h2>Adicionar Usuário</h2>

        {/* Mensagem de erro */}
        {erro && <p className="mensagem-erro">{erro}</p>}

        <label><strong>Nome:</strong></label>
        <input type="text" name="nome" onChange={handleChange} /> <br />

        <label><strong>CPF:</strong></label>
        <input type="text" name="cpf" onChange={handleChange} /> <br />

        <label><strong>Gênero:</strong></label>
        <select name="genero" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select><br />

        <label><strong>Situação:</strong></label>
        <select name="situacao" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Ativo">Ativo</option>
          <option value="Afastado">Afastado</option>
          <option value="Desligado">Desligado</option>
        </select><br />

        <label><strong>Cargo:</strong></label>
        <input type="text" name="cargo" onChange={handleChange} /> <br />

        <label><strong>Salário:</strong></label>
        <input type="number" name="salario" onChange={handleChange} /> <br />

        <label><strong>Data de contratação:</strong></label>
        <input type="date" name="data_contratacao" onChange={handleChange} /> <br />

        <label><strong>Telefone:</strong></label>
        <input type="text" name="telefone" onChange={handleChange} /> <br />

        <label><strong>E-mail:</strong></label>
        <input type="text" name="email" onChange={handleChange} /> <br />

        <button className="Modal-add-Button-cacelar" onClick={() => navigate("/")}>
          Cancelar
        </button>
        <button className="Modal-add-Button-salvar" onClick={handleClick}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Add;
