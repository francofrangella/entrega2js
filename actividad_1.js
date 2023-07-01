console.log ('quiero saber si tiene turno, cual tiene y cuantos le falta para el suyo');
let pregunta = prompt("tiene turno? ingrese: si o no")
let resultado;

function resta(a,b){
    return a - b;
}
switch (pregunta){
	case "si":
        let a = parseInt(prompt("ingrese su turno"));
        let b = parseInt(prompt("ingrese el turno por el que va"));
		resultado = resta(a,b);
		alert("Faltan: " + resultado + " lugares para su turno");
        for(b; b < a; b++){
            console.log("turno "+ b);}
            if( a== b){
                console.log("es su turno")
            }
        
        
		break;

	case "no":
		alert("saque un turno");
		break;


	default:
		alert("ingrese una opcion valida.");
		break;
}
