/* Eliminar un Nodo
    1-removeChild
    2-remove
    3-replaceChild

*/
//--------removeChild---------
const nodoEliminar = document.querySelector('div')
//Necesitamos el padre directo del elemento 
const padre = document.querySelector('padreReferencia')
//Otra forma de obtener el padre del elemento
const padre2 = nodoEliminar.parentElement //Padre directo del nodo que me refiero
//eliminamos el nodo
padre.removeChild(nodoEliminar)


//----------remove ------------
/*
    Evoluvion de removeChild no lo soporta IE 11
    No nos pide referencia ni padre

    Automaticamente va al padre
*/

const referenciaRemove = document.querySelector('h2')
referenciaRemove.remove() //Eliminamos el nodo

//----------replaceChild ------------
/*
    Necesitamos el :
        Padre
        Elemento de referencia
        Lo que vamos a remplazar
*/

const padreReplace = document.querySelector('div.mt-4.text-center')
const toReplace = document.querySelector('h2')
const newNodo = document.createElement("h5")
newNodo.textContent('Nuevo elemento a remplazar')
padreReplace.replaceChild(newNodo,toReplace ) //Remplazamos el nodo