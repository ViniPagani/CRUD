import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listar = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8800/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8800/users/${id}`, {
        method: "DELETE"
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleMoreDetails = (item) => {
    setItemClicked(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setItemClicked(null);
  };

  return (
    <div className="div-principal">
      <ul className="list">
        {data.map((item, index) => (
          <li key={item.id || index} className="li-list">
            <strong className="teste">Nome: </strong>{item.nome}<br />
            <strong className="teste">Cargo: </strong>{item.cargo}<br />
            <strong className="teste">E-mail: </strong>{item.email}<br />
            <div className="div-btn">
              <button className="btn-list" onClick={() => handleMoreDetails(item)}>Mais detalhes</button>
              <button className="btn-update">
                <Link className="link" to={`/atualizar/${item.id}`}>Update</Link>
              </button>
              <button className="btn-excluir" onClick={() => handleDelete(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de Detalhes */}
      {modalIsOpen && itemClicked && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="teste">Detalhes do Funcionário</h2>
            <p className="teste"><strong>ID:</strong> {itemClicked.id}</p>
            <p className="teste"><strong>Nome:</strong> {itemClicked.nome}</p>
            <p className="teste"><strong>CPF:</strong> {itemClicked.cpf}</p>
            <p className="teste"><strong>Gênero:</strong> {itemClicked.genero}</p>
            <p className="teste"><strong>Situação:</strong> {itemClicked.situacao}</p>
            <p className="teste"><strong>Data de Contratação:</strong> {new Date(itemClicked.data_contratacao).toLocaleDateString("pt-BR")}</p>
            <p className="teste"><strong>Salário:</strong> R$ {parseFloat(itemClicked.salario).toFixed(2)}</p>
            <p className="teste"><strong>Telefone:</strong> {itemClicked.telefone}</p>
            <p className="teste"><strong>E-mail:</strong> {itemClicked.email}</p>

            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listar;
