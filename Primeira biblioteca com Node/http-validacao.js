import fetch from "node-fetch";

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    //promises e async await
    //o array de status espera o resultado da promise. a promise vai pegar cada url e tentar acessar, guardando o status http que resultou e depois jogando esse status no arrayStatus
    //fetch acontece dentro da função callback(função dentro da função), por isso também deve ser indicado o async antes dessa função do fetch
    try {
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status
    }))
    return arrayStatus
    } catch(erro) {
        manejaErros(erro)
    }
}

function geraArrayDeURLs(arrayLinks) {
    //loop para cada objeto { chave: valor}
    //Object.values(objeto) pega o objeto e retorna um array somente com o valor
    //no map, para cada objetoLink, pega apenas o valor do objeto
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
    //o join tira os elementos de dentro de um array e transforma em uma string
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    //spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({ ...objeto,
        status: statusLinks[indice]
    }))
    return resultados
}

export default validaURLs;