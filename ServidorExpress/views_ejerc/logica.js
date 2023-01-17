/////////////////////////////////////////////////////////
// Función getNode -> Para ahorrarnos el tener que escribir
// document.getElementById("elemento") todo el rato.
/////////////////////////////////////////////////////////

	
/////////////////////////////////////////////////////////
// Función cross-browser para añadir Eventos
/////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
// función iniciar -- hace las llamadas al dibujo del tablero
// y además asigna los eventos de click correspondientes.
//////////////////////////////////////////////////////////////////
function iniciar(){	
	// Dibujamos la tabla dónde pintaremos con el ratón
	dibujarTableroDibujo();
	
	// A la tabla de colores (paleta) le asignamos el evento click 
	// para seleccionar un color.	
	// Para ello, primero obtenemos todos las celdas que contienen los
	// elementos de color. (mirar qué hijo es el que contiene las celdas).
	// Seguidamente, recorreremos todas las celdas y añadiremos un evento
	// para cuando hagamos click.
	// Este evento que añadimos estará asociado a una función (flecha...o normal)
	// que cambiará el color activo (asociado a una clase css) y adicionalmente,
	// eliminará la clase css "seleccionado" del elemento que la tenía y se la
	// añadirá al elemento en el que hemos clicado.
	var filaColores = document.querySelectorAll("#paleta tr:first-child td");
	console.log(filaColores);
	for(let i=0;i<filaColores.length;i++){
		filaColores[i].addEventListener("click", detectarColorPaleta);
	}


	// Ponemos como color activo de pintura el color de la primer celda.
	// Para ello reutilizamos lo que hemos hecho antes, seleccionamos el primer elemento
	// y la primera clase css (que será el color)
	colorActivo = filaColores[0].classList[0];


	// A cada una de las celdas del tablero de dibujo (tablero) le asignamos el evento click 
	// para activar o desactivar la pintura.
	// Para ello, primero seleccionamos todas las celdas de nuestro tablero de dibujo
	// Después, recorremos todas las celdas y le añadimos un evento click, 
	// que estará asociado a una función.
	// Esta función será la encargada de activar la pintura y de
	// cambiar el texto de la tabla #paleta.
	// Para activar o desactivar la opción de pintar, basta con un if que actualice
	// nuestra variable global pintarActivado.
	// Para colorear la celda, basta con añadir la clase que tenemos almacenada
	// en colorActivo a la lista de clases de la celda.
	var tablero = document.querySelectorAll("#tablero tr td");
	for(let i=0; i<tablero.length; i++){
		tablero[i].addEventListener("click", activarPintura);
		
	}

	for(let i=0; i<tablero.length; i++){
		tablero[i].addEventListener("mouseover", pintar);
		
	}
	



	// A cada una de las celdas del tablero de dibujo (tablero) le asignamos 
	// el evento mouseOver para activar o desactivar la pintura.
	// Para ello, primero seleccionamos todas las celdas de nuestro tablero de dibujo
	// Después, recorremos todas las celdas y le añadimos un evento mouseOver, 
	// que estará asociado a una función.
	// Para colorear la celda, basta con añadir la clase que tenemos almacenada
	// en colorActivo a la lista de clases de la celda.

}


//////////////////////////////////////////////////////////////////
// función dibujarTableroDibujo -- realiza el dibujo del tablero
// y además asigna los eventos de click correspondientes.
//////////////////////////////////////////////////////////////////
function dibujarTableroDibujo(){
	// Vamos creando la estructura de la tabla empleando el árbol de nodos del DOM.
	// Creamos primero el elemento table con todos sus atributos.
	// Esos atributos deben ser:
	//	1. un borde de 1px por ejemplo
	//	2. un id = tablero
	// 	3. una lista de clases que contenga al menos "tablerodibujo"
	var divZonaDibujo = document.querySelector("#zonaDibujo");
	var elemTable = document.createElement("table");
	elemTable.setAttribute("id", "tablero");
	elemTable.classList.add("tablerodibujo");
	elemTable.classList.add("border");
	elemTable.classList.add("border-primary");
	elemTable.classList.add("border-3");


	// A continuación, para facilitar el manejo de nuestra "app" crearemos un elemento "caption"
	// que contenga el texto "Haga CLICK en cualquier celda para activar/desactivar el pincel"
	// Ese elemento caption se lo añadimos a nuestra tabla
	var elemCaption = document.createElement("caption");
	var texto = document.createTextNode("Haga CLICK en cualquier celda para activar/desactivar el pincel");

	elemCaption.appendChild(texto);
	elemTable.appendChild(elemCaption);

	// Ahora crearemos las filas de la tabla y las celdas dentro de cada fila.
	// Recordemos las especificaciones de la práctica: 30x30
	// Para ello crearemos 30 filas, que a su vez tendrán 30 celdas (tr -> td)
	for(let i=0;i<30;i++){
		var fila = document.createElement("tr");
		for(let j=0; j<30; j++){
			var celda = document.createElement("td");
			fila.appendChild(celda);
		}
		elemTable.appendChild(fila);
	}

	// Una vez que ya tenemos la tabla completamente creada la metemos dentro del DIV zonadibujo.
	divZonaDibujo.appendChild(elemTable);

}


///////////////////////////////////////////////////////////////
// función detectarColorPaleta -- nos permite seleccionar un
// color de pincel en la paleta de colores.
///////////////////////////////////////////////////////////////
function detectarColorPaleta(){
	// Revisamos todos los elementos de la tabla colores (paleta) y si encontramos alguno 
	// que tenga la clase "seleccionado", entonces la eliminamos de su classlist
	// Elementos a usar:
	//	this : https://www.w3schools.com/js/js_this.asp
	//	parentElement: https://www.w3schools.com/jsref/prop_node_parentelement.asp
	//	children: https://stackoverflow.com/questions/10381296/best-way-to-get-child-nodes
	//	classList: https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
	for(let i=0; i<this.parentNode.children.length; i++){
		if(this.parentElement.children[i].classList.contains("seleccionado")){
			this.parentElement.children[i].classList.remove("seleccionado");
			break;
		}
	}

	// Tendremos que usar classList para actualizar el color activo
	colorActivo = this.classList[0];
	console.log(colorActivo);

	// Adicionalmente añadimos al elemento donde hemos hecho click la clase "seleccionado"
	this.classList.add("seleccionado");

}


///////////////////////////////////////////////////////////////
// función activarPintura -- nos permite seleccionar un 
// color y cambiar el mensaje del pincel activado/desactivado
///////////////////////////////////////////////////////////////
function activarPintura(){
	// Para activar o desactivar la opción de pintar, podemos usar la variable
	// global que tenemos, y así discernir entre si se puede pintar o si no.
	// Si hacen click sobre el tablero
	// 1º Actualizamos el mensaje de la tabla #paleta
	//		-> PINCEL DESACTIVADO...
	//		-> PINCEL ACTIVADO...
	// 2º Actualizamos la variable global
	// 3º Pintamos la celda donde se haya hecho click (opcional)
	console.log(this);
	if(!pintarActivado){
		document.querySelector("#pincel").innerHTML = "PINCEL ACTIVADO...";
		this.classList.add(colorActivo);
		pintarActivado = true;
	}else{
		document.querySelector("#pincel").innerHTML = "PINCEL DESACTIVADO...";
		pintarActivado = false;
	}
	
}


/////////////////////////////////////////////////////////
// función pintar -- nos permite pintar sobre el tablero
/////////////////////////////////////////////////////////
function pintar(){
	// Para pintar una celda, basta con comprobar si nuestra variable global
	// nos permite pintar o no.
	// Si nos lo permite, entonces basta con añadir el color activo a 
	// nuestra lista de clases css sobreescribiéndolas.

	if(pintarActivado){
		if(this.classList.length>0){
			this.classList.length =0;
		}
		this.classList.add(colorActivo);
	}

}

function reset(){
	
	var tablero = document.querySelectorAll("#tablero tr td");
	if(tablero.length >0) console.log(tablero.length);
	for(let i=0; i<tablero.length; i++){
		if(tablero[i].hasAttribute("class")){
			tablero[i].removeAttribute("class");
		}		
	}
}

function activarPincel(){
	
	if(!pintarActivado){
		document.querySelector("#pincel").innerHTML = "PINCEL ACTIVADO...";
		pintarActivado = true;
	}
}

function desactivarPincel(){
	
	if(pintarActivado){
		document.querySelector("#pincel").innerHTML = "PINCEL DESACTIVADO...";
		pintarActivado = false;
	}
}

/////////////////////////////////////////////////////////
// Comienzo de la ejecución del código de JavaScript.
/////////////////////////////////////////////////////////
// Variables globales de la aplicación.
var colorActivo="";
var pintarActivado=false;
// Cuando el documento esté cargado llamamos a la función iniciar().
/////////////////////////////////////////////////////////
window.load = iniciar();
/////////////////////////////////////////////////////////