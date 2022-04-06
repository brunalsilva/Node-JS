import chalk from 'chalk';
import * as fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        //temp[1] = descrição do link, temp[2] = url
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    //if array.length = 0, retorna 'não há links', else retorna o array  
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

// async function pegaArquivo(caminho) {
//     const caminhoAbsoluto = path.join(__dirname, '..', caminho);
//     const encoding = 'utf-8';
//     try {
//       const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
//       const result = await Promise.all(arquivos.map(async (arquivo) => {
//         const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
//         const texto = await fs.promises.readFile(localArquivo, encoding);
//         return extraiLinks(texto);
//       }));
//       return result;
//     } catch (erro) {
//       return trataErro(erro);
//     }
//    }

//com async e await
async function pegaArquivo(caminhoDoArquivo) {
     const enconding = 'utf-8';
     try {
         const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
         return extraiLinks(texto);
     } catch (erro) {
         trataErro(erro);
     }
     finally {
         console.log(chalk.yellow('Operação concluída'));
       }
  }

//pegaArquivo('./arquivos/texto1.md');

export default pegaArquivo;

// com then
// function pegaArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, enconding)
//     .then((texto) => console.log(texto))
//     .catch((erro => trataErro(erro)))
// }

// function pegaArquivo (caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }
