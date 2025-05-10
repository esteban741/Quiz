
function calcular(x){
    let n1= parseFloat(document.querySelector("#n1").value);
    let n2= parseFloat(document.querySelector("#n2").value)
    let resultado=0;
    switch(x){
        case "sumar":
            resultado=n1+n2
            console.log(resultado);
            break;
        case "resta":
            resultado=n1-n2
            console.log(resultado)
            break;
        case "multiplicacion":
            resultado=n1*n2
            console.log(resultado)
            break;
         case "division":
            if(n2===0.0){alert("nose puede dividir en 0")}
            else{
            resultado=n1/n2
            console.log(resultado)}
            break;
    }
    document.querySelector("#resultado").value=resultado;    
}