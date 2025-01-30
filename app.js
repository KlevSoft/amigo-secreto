// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de la variable global que inicia con un array vacío.
let nombreIngresado = [];

//Creación de una función que recibe 2 parámetros.
function asignarTextoElemento(elemento, texto){
    //Variable que almacena el primer elemetro HTML que coincida con el selector CSS
    let elementoHTML = document.querySelector(elemento);
    //Actualiza  el contenido HTML interno del elemento seleccionado al valor del parámetro 'texto'.
    elementoHTML.innerHTML = texto;
    //Finaliza la ejecución de la función, aunque no devuelva ningún valor, es una buena práctica
    //terminar con return..
    return;
}

function añadirAmigo(){
    //Se deshabilita el botón 'sortearAmigoSecreto' para que el usuario no pueda sortear el amigo secreto.
    document.querySelector('#sortearAmigoSecreto').setAttribute('disabled', 'true');    
    //Almacenamos en una variable la selección del elemento HTML que tiene el atributo 'amigo'
    let nombre = document.querySelector('#amigo').value.trim(); //trim() - Elimina los espacios en blanco al principio y al final de una cadena de texto.
    //Declaramos una variable en la cual inicie con una cadena vacía
    let almacenarNombre = '';

    //Almacenamos en el array antes declarado
    //(push) añade un nuevo elemento al final del array declarado
    //'nombre' es la variable que contiene el valor ingresado por el usuario
    nombreIngresado.push(nombre);
    //Limpia el campo de entrada que en este caso tiene como id 'amigo'
    limpiarInput();

    //Se valida si el valor ingresado por el usuario es igual a una cadena vacía
    if(nombre === '') {
        //Si el valor ingresado es igual a una cadena vacía, se muestra una alerta con el mensaje 'Por favor ingrese un nombre válido'
        alert('Por favor ingrese un nombre válido');

    } else {
        //Iniciamos un bucle for desde cero hasta que i sea menor que la longitud del array.
        for (let i=0 ; i<nombreIngresado.length ; i++){
            //Añade un nuevo párrafo HTML a la variable 'almacenarNombre' para cada elemento array
            //${nombreIngresado[i]} accede al elemento en la posicion del array
            almacenarNombre += `${nombreIngresado[i]} <br>`;
        }
        //Se actualiza el contenido HTML interno del elemento seleccionado al valor del parámetro 'almacenarNombre'.
        document.getElementById('listaAmigos').innerHTML = almacenarNombre;
        //Habilita el botón 'sortearAmigoSecreto' para que el usuario pueda sortear el amigo secreto.
        document.getElementById('sortearAmigoSecreto').removeAttribute('disabled');
    }
    
}

function sortearAmigo(){
    
    //Math.random() -Genera un número decimal aleatorio entre 0 y 1
    //Math.random() * nombreIngresado.length - Escala el número aleatorio al rango del tamaño del array. (0 <= longintud del array)
    //Math.floor - Redondea el número decimal hacia abajo al entero más cercano.
    //let indiceAleatorio - Se le asigna el valor del indice aleatorio generado
    let indiceAleatorio = Math.floor(Math.random() * nombreIngresado.length);
    //nombreIngresado[indiceAleatorio] - Accede al elemento en posición [] del array ingresado x[]
    //Se le asigna una nueva variable 'nombreAleatorio'
    let nombreAleatorio = nombreIngresado[indiceAleatorio];

    //Llama a la función que tiene 2 argumentos('Selector css', 'texto a asignar');
    asignarTextoElemento('ul', 'Tu amigo secreto es:');
    //Actualiza el contenido del elemento HTML con id'resultado' para mostrar el nombre almacenado en la variable.
    document.querySelector('#resultado').innerHTML = nombreAleatorio;
}

function limpiarInput(){
    //Por medio del id se identifica el valor que será remplazado por dicho valor, en este caso (vacio)
    document.querySelector('#amigo').value = '';
}