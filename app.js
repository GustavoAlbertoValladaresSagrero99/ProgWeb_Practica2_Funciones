
/**
 @author Gustavo Alberto Valladares Sagrero
 @name Funciones
 */


//La funcion greet muestra un saludo y el doble del valor de la variable x
function greet()
{
    let x = 7;
    console.log(`Hola, el doble de x  es : ${x*2}`);
}


//La función logGreeting permite recibir otra función por parametro y mandarla a llamar
function logGreeting(fn)
{
    fn();
}


/*Otra forma de crear funciones, es por medio de una function expression, es similar a crear una variable pero le damos el valor
de function y dentro de los corchetes podemos agregar las instrucciones a ejecutar.
En este caso esta función muestra un mensaje por consola diciendo 'Hello message from the function expression' */
let greetMe = function()
{
    console.log(`Hello message from the function expression`);
}


/*
Otra forma de crear funciones es por medio de una funcion anonima.
Esta nos permite crearla directamente al pasarla por parametro a otra función.
Por ejemplo; Llamamos a la función logGreeting y le pasamos por parametro una función anonima, y dentro de los corchetes de
la función anonima ponemos las instrucciones a ejecutar.
*/
logGreeting(function(){
    console.log(`Just function c:`)
})


/*
Otra forma de crear funciónes es por medio de las arrow function () =>
Aqui implementamos una expressión function junto con una arrow function.
Si las funciones solo tendran una sola instrucción, se pueden omitir los corchetes {} y el return
*/


//Esta función muestra un mensaje por consola diciendo '12345 yeeei!!'
let mifuncion = () => console.log("12345 yeeei!!");


/*
A la arrow function se le pueden pasar parametros como cualquiera función y hacer uso de las mismas.
Por ejemplo; tratamientp y nombre.
*/
let saludo = (nombre, tratamiento) => console.log(`Hola, ${tratamiento} ${nombre}`);

/*
Esta función devuelve el cuadrado de un numero, para ello, se le paso un parametro llamado
numero el cual se multiplica asi mismo.
Si la función solo va a recibir un parametro, se pueden omitir los parencesis
*/


//Comparando las diferentes formas para crear una función

//Function expression y arrow function
let cuadrado = numero => numero * numero;

//Function expression
let cuadrado2 = function(numero)
{
    return numero * numero;
}

//Tradicional function
function cuadrado3(numero)
{
    return numero * numero
}


/*
Funciones refactoradas con ES6
*/

//Al igual que la funcion Greet devuelve un saludo y el doble de un numero pero con arrow function
let refGreet = numero => console.log(`Hola soy la función refactor de Greet, el doble de x  es : ${numero*2}`);

//Al igual que la function GreetMe devuelve un mensaje pero ahora creada con arrow function
let refGreetMe = () => console.log('Hello from the refactor function GreetMe in arrow function');

//Al igual que logGreeting recibe una función por parametro y la llama
let refLogGreeting = fn => fn();



//LLamando a las funciones creadas.

/*
Llamando a la funcion logGreeting, pasandole por parametro las siguientes funciones
1- mifuncion
2- greet
3- greetMe
*/
logGreeting(mifuncion);
logGreeting(greet);
logGreeting(greetMe);

//Llamando a la función logGreeting y pasandole una arrow function anonima que ejecute la funcion cuadrado
logGreeting( ()=> console.log(cuadrado(5)));


//Llamando a la function greet, para probar su funcionamiento.
greet();
//Llamando a la function greetMe, para probar su funcionamiento.
greetMe();

//Llamando a la function saludo, para probar su funcionamiento, pasandole dos valores por parametro.
saludo("Alberto", "Programar de noche diria el spongebob");


//Llamando a la function refGreet, para probar su funcionamiento.
refGreet(2);

//Llamando a la function refGreetMe, para probar su funcionamiento.
refGreetMe();

//Llamando a la function refLogGreeting, para probar su funcionamiento pasandole las funciones refactoradas.
refLogGreeting(()=> refGreet(64));//pasando refGreet por parametro
refLogGreeting(refGreetMe);//pasando refGreetMe por parametro


