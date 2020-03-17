const pgConn = require("../../config/dbConnection");

exports.save = (req, res) => {
    pgConn.connect();
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;

    const query = {
        text: 'insert into Pessoa(Nome, Sobrenome) values ($1, $2)',
        values: [nome, sobrenome] 
    }

    pgConn.query(query, (error, result) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            res.status(201).json({ "Message": "Ok" });
        }
    });
}

exports.getAll = (req, res) => {
    pgConn.connect();
    pgConn.query('select * from Pessoa', (error, result) => {
        if (!error) {
            res.status(200).json(result.rows);
        } else {
            res.status(400).json({ "Message": "Error" });
        }
    });
}

exports.update = (req, res) => {
    pgConn.connect();
    let id = req.params.id;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;

    const query = {
        text: 'update Pessoa set nome = $1, sobrenome = $2 where id = $3',
        values: [nome, sobrenome, id] 
    }

    pgConn.query(query, (error, result) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            res.status(200).json({ "Message": "Ok" });
        }
    });
}

exports.delete = (req, res) => {
    pgConn.connect();
    let id = req.params.id;

    const query = {
        text: 'delete from Pessoa where id = $1',
        values: [id]
    }

    pgConn.query(query, (error, result) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            res.status(200).json({ "Message": "Ok" });
        }
    });
}