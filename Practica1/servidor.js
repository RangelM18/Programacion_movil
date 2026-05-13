
console.log("Hola Mundo")

/*  Medir el tiempo de proceso*/
console.time("miProceso")

for(let i=0; i<1000000000;i++){}

console.timeEnd("miProceso")


/* Objetos tipo tabla*/
let usuarios=[
    {nombre: "Andres",edad:25},
    {nombre: "Abel",edad:33},
];
console.table(usuarios)