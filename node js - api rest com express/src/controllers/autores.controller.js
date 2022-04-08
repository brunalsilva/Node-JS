import autores from "../models/Autor.js";

class autorController {

    static listarAutores = (req, res) => {
        autores.find({}, (err, autores) => {
            if(err) return res.status(500).send(err);
            return res.status(200).json(autores);
        })
    }

    static listarAutorPorId = (req, res) => {
        const {id} = req.params;
        autores.findById(id, (err, autor) => {
            if(err) return res.status(500).send(err);
            if(!autor) return res.status(404).send("autor não encontrado");
            return res.status(200).json(autor);
        })
    }

    static cadastrarAutor = (req, res) => {
        const autor = new autores(req.body);
        autor.save((err, autor) => {
            if(err) return res.status(500).send({message: `Erro ao cadastrar autor: ${err}`});
            return res.status(201).json(autor);
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
    
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Autor atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }

    static deletarAutor = (req, res) => {  
        const {id} = req.params;
        autores.findByIdAndRemove(id, (err, autor) => {
            if(err) return res.status(500).send({message: `Erro ao deletar autor: ${err}`});
            return res.status(200).json(autor);
        })
    }
}

export default autorController;