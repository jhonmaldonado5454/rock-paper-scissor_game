var P = "papel";
var R = "piedra";
var S = "tijera";


var resultado = function(user, cpu) {
    if (user != cpu){
        if (user == P){
            if(cpu == R){
                console.log("User wins");
            }
            else if (cpu==S){
                console.log("Cpu wins");
            }
        }
        else if ( user == R){
            if (cpu == P){
                console.log("cpu wins");
            }
            else if (cpu == S){
                console.log("user wins");
            }
            }
        else if (user == S){
            if (cpu == p){
                console.log("user wins");
            }
            else if (cpu==R){
                console.log("cpu wins");
            }
        }
    } else {
        console.log("Empate");
    }  
}


resultado(P, R)