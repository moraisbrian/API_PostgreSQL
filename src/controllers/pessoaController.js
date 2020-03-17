const pgConn = require("../../config/dbConnection");

exports.save = (req, res) => {

    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const query = {
        text: 'insert into Pessoa(Nome, Sobrenome) values ($1, $2)',
        values: [nome, sobrenome] 
    }

    pgConn.connect((error, client, release) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            client.query(query, (error, result) => {
                release();
                if (error) {
                    res.status(400).json({ "Message": "Error" });
                } else {
                    res.status(201).json({ "Message": "Ok" });
                }
            });
        }
    });
}

exports.getAll = (req, res) => {
    pgConn.connect((error, client, release) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            client.query('select * from Pessoa', (error, result) => {
                release();
                if (error) {
                    res.status(400).json({ "Message": "Error" });
                } else {
                    res.status(200).json(result.rows);
                }
            });
        }
    });
}

exports.getOne = (req, res) => {
    const id = req.params.id;
    query = {
        text: 'select * from Pessoa where id = $1',
        values: [id]
    }
    pgConn.connect((error, client, release) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            client.query(query, (error, result) => {
                release();
                if (error) {
                    res.status(400).json({ "Message": "Error" });
                } else {
                    res.status(200).json(result.rows);
                }
            });
        }
    });
}

exports.update = (req, res) => {
    
    const id = req.params.id;
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;

    const query = {
        text: 'update Pessoa set nome = $1, sobrenome = $2 where id = $3',
        values: [nome, sobrenome, id] 
    }

    pgConn.connect((error, client, release) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            client.query(query, (error, result) => {
                release();
                if (error) {
                    res.status(400).json({ "Message": "Error" });
                } else {
                    res.status(200).json({ "Message": "Ok" });
                }
            });
        }
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    const query = {
        text: 'delete from Pessoa where id = $1',
        values: [id]
    }

    pgConn.connect((error, client, release) => {
        if (error) {
            res.status(400).json({ "Message": "Error" });
        } else {
            client.query(query, (error, result) => {
                release();
                if (error) {
                    res.status(400).json({ "Message": "Error" });
                } else {
                    res.status(200).json({ "Message": "Ok" });
                }
            });
        }
    });
}