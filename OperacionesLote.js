/*
    Agregar 100 inputs al final de todos los elementos

    intenetar reducir el número de oprecaiones a la hora de manipular el DOM
*/

//Modificar el DOM una sola vez utilizando append
const nodos = []
for(let i = 0; i < 100; i++)
{
    const nodo = document.createElement('input')
    nodos.push(nodo) //Ahora tenemos 100 nodos en la memoria de JS y no en el DOM

}

//Escribimos los 100 nodos en el DOM
document.body.append(...nodos)
