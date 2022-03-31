import chalk from 'chalk';
import * as fs from 'fs';

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
    const linksExtraidos = texto.match(regex);
    console.log(linksExtraidos);
}

extraiLinks(texto);

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

//com async e await
// async function pegaArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     try {
//         const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
//         console.log(chalk.green(texto));
//     } catch (erro) {
//         trataErro(erro);
//     }
//     finally {
//         console.log(chalk.yellow('Operação concluída'));
//       }
// }

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

pegaArquivo('./arquivos/texto1.md');

