const botoneslocos = document.querySelectorAll('button');

var intentos = 20;
var mejorIntento = 0;
var numero;

    numero = Math.round((Math.random() * 20));
    
botoneslocos[0].addEventListener('click', function (){
    //alert("hola");
    numero = Math.round((Math.random() * 20));
    //labels[2].innerHTML = "?";
    document.getElementById("typeEmailX").value = "";
    intentos = 20;
    document.getElementById(2).innerHTML = intentos;
    botoneslocos[1].removeAttribute('disabled');
    document.getElementById(1).innerHTML = "Esperando ingreso";
    document.getElementById(4).innerHTML = "?";
});


botoneslocos[1].addEventListener('click', function (){
    if(document.getElementById("typeEmailX").value == numero){
        document.getElementById(1).innerHTML = "Acertaste";
        document.getElementById(4).innerHTML = numero;
        botoneslocos[1].disabled = true;
        if(mejorIntento < intentos){
        mejorIntento = intentos;
        document.getElementById(3).innerHTML = mejorIntento;
        }
        return 0;
    }
    if(intentos == 0)
    {
        document.getElementById(1) = "Perdiste";
        buttons[1].disabled = true;
        document.getElementById(4).innerHTML = numero;
        return 0;
    }

    if(document.getElementById("typeEmailX").value > numero){
        document.getElementById(1).innerHTML = "Te pasaste";
    }else{
        document.getElementById(1).innerHTML = "Te quedaste corto";
    }

    intentos--;
    document.getElementById(2).innerHTML = intentos;
});