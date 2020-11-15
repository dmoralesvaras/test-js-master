for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}


/*****************************************/
// Test 2.1

Según está el código, el valor que imprime las 5 veces sería el último, el valor "5".
Esto ocurre porque lo que está dentro de setTimeout se ejecuta tras esperar un segundo mientras que lo se se ejecuta fuera lo hace en el momento.
De esta manera el bucle for sigue funcionando sin esperar y hace las 5 iteraciones antes de que se ejecute el contenido del setTimeout. Por tanto i
ya tiene el valor final de 5 cuando se ejecutan los 5 console.log().

/*****************************************/


/*****************************************/
// Test 2.2

Utilizando setInterval hace una ejecución cada cierto tiempo que le indicamos con lo que podemos ir aumentando el contador por intervalos en lugar de que sea
el bucle for que lo hace de forma inmediata


var i=0;
var intervalo=setInterval(function(){
  console.log(i);
  i++;
  if (i>=5) clearInterval(intervalo);
},1000)

/*****************************************/
