'use strict'
$( document ).ready(function() {
    $.ajax({url: 'scripts/prueba.json', success: function(result){
        function recorrer(){
            // for (int i=0, result.length, i++){

            // }
            if (result.length > 0){
               let x= result.shift()
                console.log(x);
                recorrer();
            }

        }
    console.log(result)
    recorrer();
    }});
    console.log('hola');
});

