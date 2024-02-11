
  //Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35 // 35%
var salario_recargo = 0.05 // 5%
//Recargo
var recargo_edad_asegurado = 0
var recargo_edad_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0
var recargo_propiedades = 0
var recargo_salario = 0
//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if (edad >=18){
var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
 cantidad_hijos = prompt("¿Cuántos hijos tiene? Ingrese solamente números")
}
//Comprobamos la cantidad de hijos solamente si los tienen
  var hijo_numero = parseInt (hijos)
var cantidad_hijos_numero = 0
//convirtiendo la cantidad de hijos a numeros
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
  var propiedades = prompt("¿Tiene propiedades?", "si/no")
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = prompt("¿Cuantas propiedades tiene?")
}
var numero_propiedades = 0
if("SI" == propiedades.toUpperCase()){
  numero_propiedades = parseInt(cantidad_propiedades)
}
   var salario = prompt("¿Desea asegurar su salario?", "si/no")
var cantidad_salario
if("SI" == salario.toUpperCase()){
  cantidad_salario = prompt("Ingrese su salario solo numeros")
}
var numero_salario = 0
if("SI" == salario.toUpperCase()){
  numero_salario = parseInt(cantidad_salario)
}
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
/**
*1. Recargo edad asegurado
*/
if(edad_numero>=18 && edad_numero<25){
  recargo_edad_asegurado = precio_base * edad_18
  
}
  else if (edad_numero>=25 && edad_numero<50){
    recargo_edad_asegurado = precio_base * edad_25
  }
  else if (edad_numero>=50 ){
    recargo_edad_asegurado = precio_base * edad_50
  }

/** 
 * 2. Recargo por la edad del conyuge
 */
if (edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo_edad_conyuge = precio_base * edad_18
}
 else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo_edad_conyuge = precio_base * edad_25
}
  else if (edad_conyuge_numero>50){
  recargo_edad_conyuge = precio_base * edad_50
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
  if("SI" == hijos.toUpperCase()){
  recargo_hijos = (cantidad_hijos_numero * hijos_recargo)* precio_base
  }
if("SI" == propiedades.toUpperCase()){
  recargo_propiedades = (numero_propiedades * propiedades_recargo)* precio_base
  }
  if("SI" == salario.toUpperCase()){
  recargo_salario = (numero_salario * salario_recargo)
  }
//Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_edad_asegurado + recargo_edad_conyuge + recargo_hijos + recargo_propiedades + recargo_salario

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
}
else {
  alert ("Usted debe ser mayor de edad para asegurarse")
}

 
