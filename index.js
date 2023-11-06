//EJERCICIO 1

// Realizar un llamado a la función de ejemplo.

function suma (a,b,callback){
    console.log('empieza'); 
    
    let c = a +b;
    callback(c);

    console.log('acaba');
}


suma(2,4,function(resultadocd){
    console.log(resultadocd); 
});

/**¿Que es el tercer parámetro recibido?
Es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.**/

/**¿En que casos es obligatorio desarrollar este tipo de funciones?
 para realizar tareas asincronas**/


  