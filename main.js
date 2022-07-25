///// Variaveis /////

 const firtName = 'Matheus';
 const lastName = 'Rocha';

 console.log('Nome: ' + firtName + ' ' + lastName); // modo antigo
 console.log(`Mome: ${firtName} ${lastName}`); // modo atual


// const reduce = coisas.reduce( function (coisa, accumulator){
//     return accumulator + coisa;
// }, 0);

///// METODOS DE ARRAY /////

const arraySimples = ["Matheus", "Gabriel", "Marcos", "Tulio"];
const arrayComposto = [
  {
    nome: "Tamie",
    idade: 25,
  },
  {
    nome: "Matheus",
    idade: 26,
  },
  {
    nome: "Julia",
    idade: 22,
  },
];

///// JSON - conversão de dados /////
 
//----- JSON.stringify() / converte os dados em JSON para enviar pro back ------
const converter = JSON.stringify(arraySimples);
console.log('JSON-STRINGIFY',converter);

//----- JSON.parse() / converte os dados do back para o front ------
const converte = JSON.parse(converter);
console.log('JSON-PARSE',converte);


// ---------------1 - ADD INICIO do array (UNSHIFT)---------------
arraySimples.unshift("Marcio"); // add no começo

arrayComposto.unshift({
  nome: "Tais",
  idade: 19,
}); // add no começo

const novaPessoa = {
  nome: "Yasmin",
  idade: 15,
};
arrayComposto.unshift(novaPessoa);


// ---------------2 - RMV INICIO do array (SHIFT)---------------
arraySimples.shift();

arrayComposto.shift();
console.log("tirei ->", arrayComposto); // print a array todo
console.log("qual eu tirei ->", arrayComposto.shift()); // print qual eu tirei


// ---------------3 - ADD FINAL do array (PUSH)---------------
arraySimples.push("DANIELA");
console.log(arraySimples);

arrayComposto.push({
  nome: "Antonio",
  idade: 30,
});
console.log(arrayComposto);


// ---------------4 - RMV FINAL do array (POP)---------------
arraySimples.pop();
console.log(arraySimples);

arrayComposto.pop();
console.log(arrayComposto);


// ---------------5 - INDICE do Item (INDEXOF)---------------
const indice1 = arraySimples.indexOf('Marcos');
console.log(indice1);
console.log(arraySimples.indexOf('Marcos'));


// ---------------6 - REMOVE posição X (SPLICE)---------------
// splice(começa no indice X, remover Y itens, add N itens a partir do indice X)
const novoArraySimples = [3 , 2 , 1 , 4 , 11];

const novoarray = novoArraySimples.splice(1, 2);
console.log('array antigo',novoArraySimples); // retorna 1,4,5
console.log('novo array',novoarray); // retorna 2,3


// ---------------7 - COPIA o array (SLICE)---------------
const arrayCopiado = novoArraySimples.slice();
console.log('array copiado', arrayCopiado);


// ---------------8 - ORDENA o array (SORT)---------------
const arrayOrdena = [22 , 5 , 1 , 8 , 55];
const ordena = arrayOrdena.sort();
console.log(ordena);


// ---------------9 - DIVIDE STRING (SPLIT)---------------
const string = 'Matheus de Deus Rocha';
const separadoEspaco = string.split(' ');// separa por espaço
const separadoCadaItem = string.split('');// separa cada um
const separado = string.split('',5);// separa cada um mas somente 5 elementos
console.log(separadoEspaco);
console.log(separadoCadaItem);
console.log(separado);


// ---------------10 - FILTRAR (FILTER)---------------
const arrayFilter = [
  {
    nome: 'TV',
    preco: 1000,
    marca: 'LG'
  },
  {
    nome: 'PC',
    preco: 5000,
    marca: 'sanmsung'
  },
  {
    nome: 'cadeira gamer',
    preco: 800,
    marca: 'kabum'
  }
];

const filtarPreco = arrayFilter.filter((item) => 
  item.preco > 800
);
console.log(filtarPreco);


// ---------------11 - ALTERA TODO OS ITENS DO ARRAY (MAP)---------------
const alteraItens = arrayFilter.map((item) =>  
   item.nome + ' joao'
  );
console.log(alteraItens);


// ---------------12 - INVERTER ARRAY (REVERSE)---------------
const interverArray = [1 , 2 , 3 , 4 , 5 , 6];
console.log('REVERSE',interverArray.reverse());


// ---------------13 - JUNTAR ELEMENTOS DO ARRAY (JOIN)---------------

const joinArray = ['calor','frio','quente','umido'];
console.log('JOIN',joinArray.join()); // saida: JOIN calor,frio,quente,umico
console.log('JOIN',joinArray.join('')); // saida: JOIN calorfrioquenteumido
console.log('JOIN',joinArray.join('2')); // saida: JOIN calor2frio2quente2umido



// ---------------14 - CONCATENA 2 ARRAY (CONCAT)---------------
const array1 = [1 , 2 , 3 , 4 , 5 , 6];
const array2 = ["Matheus", "Gabriel", "Marcos", "Tulio"];

console.log('CONCAT',array1.concat(array2));