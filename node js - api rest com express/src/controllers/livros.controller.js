import Livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        Livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        Livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Id do livro não localizado.` })
                } else {
                    res.status(200).send(livros);
                }
            })
    }

    static cadastrarLivro = (req, res) => {
        const livro = new Livros(req.body);
        livro.save((err, livro) => {
            if (err) return res.status(500).send({ message: `Erro ao cadastrar livro: ${err}` });
            return res.status(201).json(livro);
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        Livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deletarLivro = (req, res) => {
        const { id } = req.params;
        Livros.findByIdAndRemove(id, (err, livro) => {
            if (err) return res.status(500).send({ message: `Erro ao deletar livro: ${err}` });
            return res.status(200).json(livro);
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        Livros.find({ 'editora': editora }, {}, (err, livros) => {
            res.status(200).send(livros);

        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        Livros.find({ 'editora': editora }, {}, (err, livros) => {
            res.status(200).send(livros);

        })
    }
}

export default LivroController;