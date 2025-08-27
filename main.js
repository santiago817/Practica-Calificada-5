let menu = prompt(
  "Elige una opción:\n" +
    "1 - Calcular el área de un cuadrado\n" +
    "2 - Calcular el área de un rectángulo\n" +
    "3 - Calcular el área de un triángulo"
);

if (menu == 1) {
  alert("Has elegido Calcular el área de un cuadrado ");

  let Lado1 = prompt("ingrese el lado en cm para calcular ");
  let Lado2 = prompt("ingrese el otro lado para calcular");
  area = Lado1 * Lado2;
  alert("el area del cuadrado es de: " + area + " cm2");
}

if (menu == 2) {
  alert("Has elegido Calcular el área de un rectángulo");

  let Base = prompt(" ingrese la Base en mts");
  let altura = prompt("ingrese la altura en mts");
  area = Base * altura;
  alert("El area de rectangulo es de: " + area + "m2");
}

if (menu == 3) {
  alert("Has elegido Calcular el área de un triángulo");
  let Base = prompt("ingrese la Base en mts");
  let altura = prompt("ingrese la altura en mts");
  area = (Base * altura) / 2;
  alert("El area del triángulo es de: " + area + "m2");
}
