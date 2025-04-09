import { db } from "../db.js";

// GET: Listar todos os funcionários
export const getUsers = (_, res) => {
    const q = "SELECT * FROM funcionarios";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

// POST: Adicionar novo funcionário
export const postUsers = (req, res) => {
    const q = `
        INSERT INTO funcionarios 
        (nome, cargo, salario, data_contratacao, telefone, email, cpf, genero, situacao)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        req.body.nome,
        req.body.cargo,
        req.body.salario,
        req.body.data_contratacao,
        req.body.telefone,
        req.body.email,
        req.body.cpf,
        req.body.genero,
        req.body.situacao
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json({ message: "Funcionário cadastrado com sucesso!" });
    });
};

// DELETE: Remover funcionário
export const deleteUser = (req, res) => {
    const funcionariosId = req.params.id;
    const q = "DELETE FROM funcionarios WHERE id = ?";

    db.query(q, [funcionariosId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Funcionário excluído com sucesso." });
    });
};

// PUT: Atualizar funcionário
export const putUsers = (req, res) => {
    const funcionariosId = req.params.id;

    const q = `
        UPDATE funcionarios SET 
        nome = ?, cargo = ?, salario = ?, data_contratacao = ?, telefone = ?, email = ?, cpf = ?, genero = ?, situacao = ?
        WHERE id = ?
    `;

    const values = [
        req.body.nome,
        req.body.cargo,
        req.body.salario,
        req.body.data_contratacao,
        req.body.telefone,
        req.body.email,
        req.body.cpf,
        req.body.genero,
        req.body.situacao
    ];

    db.query(q, [...values, funcionariosId], (err, data) => {
        if (err) {
            console.error("Erro na query UPDATE:", err); 
            return res.status(500).json(err);
        }
        return res.status(200).json({ message: "Funcionário atualizado com sucesso." });
    });
};

