/* APIs del DOM */

document.getElementById('name')
document.getElementsByClassName('namePadre')
document.getElementsByTagName('input')

//La opción 2 para manipular el DOM 
document.querySelector('#Name') // nos dara el primer nodo que haga coincidencia. se puede buscar por clase o id pero aqui si añadimos el . 0 #
document.querySelectorAll('.mt-4') // Nos dara un NodeList con todos los nodos que hacen match

// Diferencia entre Array 7 NodeList
/* NodeList no tiene los metodos que tiene un array [map, filter, reduce, some, etc]
   Lo que si tiene es el [length, forEach]
*/

const nodeList = document.querySelectorAll('nodeList'); 

// convertit un NodeList a array
const nodeListAsArray = [...nodeList] // Ahora si tiene los metodos [map, filter, reduce, some, etc]


//Crear y agregar Nodes

//Crear un Node
/*
    1- crear un elemento
    2- crear un text
*/ 

// 1-
document.createElement("h1") // Solo se ha creado, aún no se agrega al DOM
// 2-
document.createTextNode("Texto")

//Agregar Nodo appendChild -> necesita un Nodo de referencia y el Nodo que se va agregar al final de la lista
const container = document.querySelector('contenedor')
const h3 = document.createElement("h3")
container.appendChild(h3)
const texto = document.createTextNode('Hola a todos los nodos')
h3.appendChild(texto)


//append es la EVOLUCIÓN de appendChild
/*
    1-Podemos agregar mas de un Node
    2-Puedes agregar texto
    3- No lo soporta IE 11
*/

//Ya no es necesario utilizar createTextNode()
container.append('Hola de nuevo', document.createElement('div'))

//Otra forma de agregar Nodo (Antes de la referencia)  insertBefore
/*
    1- Nodo que queremos agregar
    2- Se le pasa la refencia
*/

const titulo = document.createElement('h1')
const referencia = document.querySelector('h2')

container.insertBefore(titulo, referencia)

//Otra forma de agregar Nodo  insertAdjacentElement Nosda mas control a la hora de agregar un elemento en el DOM
/* 
    1-afterBegin
    2-beforeEnd
    3-beforeBegin
    4-afterEnd
*/
document.insertAdjacentElement('referencia','nodo')


//OTRAS Formas de agregar Nodos es con cadena de texto
/*
    1-outerHTML(Leer HTML)
    2-innerHTML(Escribir HTML)

    p.d. Tenemos que tener en cuenta sobre la seguridad (no es muy seguro) 
            Permite inyecciones de XSS, ya que puede agregar etiquetas HTML

            hola <strong onclick= "alert('Esto es un ataque')"> Jose Luis</strong>
*/
 const h5Inner = document.querySelector('h2')
 h5Inner.outerHTML // -> nos regresa (cadena de texto) el html de ese elemento 
 h5Inner.innerHTML // -> nos da el valor de ese elemto 
 h5Inner.innerHTML = 'algo Nuevo' // -> cambiar el valor