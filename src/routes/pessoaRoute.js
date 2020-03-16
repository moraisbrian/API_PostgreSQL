const router = require("express").Router();
const controller = require("../controllers/PessoaController");

router.post("/", (req, res) => {
    controller.save(req, res);
});

router.get("/", (req, res) => {
    controller.getAll(req, res);
});

module.exports = router;