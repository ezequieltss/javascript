console.log("trabalhando com listas ")
const salvador = 'salvador'
const saoPaulo = 'sao paulo'
const riodejaneiro= 'rio de janeiro'

 const listadetinos =new Array (
       'salvador',
       'sao paulo',
       'rio de janeiro',
 );

  listadetinos.push(`curitiba`)//Adicionado elementos no arry

  console.log("destinos possiveis")
  console.log(listadetinos);


  listadetinos.splice(2,1);
  
  console.log(listadetinos);

  //listadestino.splice(1,2); removendos elementos do arry
  //console.log(listadestinos);


  console.log(listadetinos[0],listadetinos[2])