import fs from 'fs';
import chalk from "chalk";

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não encontramos o arquivo'));
}
// async/awair
async function pegaArquivo(caminhoDoArquivo){
    try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo , encoding)
    console.log(chalk.green(texto));
    } catch (erro){
        trataErro(erro)
    }
    
}



// Promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');

