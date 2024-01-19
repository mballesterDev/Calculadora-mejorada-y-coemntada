const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {      //el for each es esencial, hace que etos if y funciones y elementos sean para queda boton individualmente y hace que funcione el código
    boton.addEventListener('click', function () {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') { //2 si queremos que al darle c se reinicie lo podemos hacer asi, al apretar c el txtcontent será 0 
            pantalla.textContent = '0'; //NO HACE FALTA USAR EL QUERY SELECTOR PARA LAS CONDICIONES
            return; // el return se pone xq al reiniciarse el txtcontent a 0, se deberia de aplicar el ultimo if donde si es 0 el txtcontent es = boton pulsado con retun hacemos que no se ejecute más códgo
        }

        if (boton.id === 'borrar') { // lo mismo que arriba pero usamos el slide, el slide coge las posiciones de un array o string específicas, al poner -1 estamos indicando que ponga
            pantalla.textContent = pantalla.textContent.slice(0, -1); //desde la 0 hasta la -1, es decir la ultima -1(el txt content es un string ya que los botones tienen strings)
            return;
        }

        
        if (boton.id === 'borrar' &&  pantalla.textContent === 'ERROR!'){ //si le damos al boton de borrar y nos ha dado error q el contenido sea 0, ya que no queremos eliminar un cracter
            
            pantalla.textContent = '0';                                                                // simplemente reiniciarlo para poder operar
            return;
        }

        if (boton.id === 'igual') {
            try{  pantalla.textContent = eval(pantalla.textContent); //el try se ejecutará si la operacion es posible, eval es una funcion que analiza las operaciones 
                return;}                                            //matematicas, incluso en strings, como es en este caso
            catch{
                pantalla.textContent = 'ERROR!'; //si da error pondrá error
                return;
            }
        }


        if (pantalla.textContent === "0" || pantalla.textContent === 'ERROR!') { // 1 El contenido de la calculadora está predeterminada en 0 entonces cada vez que pulsemos un boton
                                                                                 // el contenido de la panatlla será ese número, aplicamos lo mismo para cuando nos de error ya que queremos sobreescribir el error
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;                               //else es que sino es 0 ni error, será algun boton que hayamos tecleado, por lo tanto se irán sumando los botones tecleados
        }



    });
});