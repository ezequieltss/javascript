console.log("trabalhando com condicionais")
 
const idadedocomprador=15;


const listadetinos =new Array (

    'salvador',
    'sao paulo',
    'rio de janeiro',
);

listadetinos.push(`curitiba`)//Adicionado elementos no arry

console.log("destinos possiveis")
console.log(listadetinos);

if(idadedocomprador >=18){
    console.log("comprador maior de idade!")
    listadetinos.splice(1,1)
}