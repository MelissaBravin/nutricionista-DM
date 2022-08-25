window.onload = () => {
    "use stric";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};
//Está pegando os valores de altura e peso
function calcularIMC() {
    let altura = document.getElementById('altura').value;

    let peso = document.getElementById('peso').value;
  
    let resultado = document.getElementById("resultado");

    let imc = (peso / ((altura * altura) 
                            / 10000)).toFixed(2);
      
        if (imc < 18.5){ resultado.innerHTML =
            ` Você está abaixo do peso normal, seu IMC é: <span>${imc}</span>`;
  
        }else if (imc >= 18.5 && imc < 24.9){
            resultado.innerHTML = 
                `Seu peso está normal, seu IMC é: <span>${imc}</span>`;
          
        }else if (imc >= 25 && imc < 29.9) 
            resultado.innerHTML = 
                `Você está com excesso de peso, seu IMC é: <span>${imc}</span>`;

        else if (imc >= 30 && imc < 34.9) 
            resultado.innerHTML = 
                `Você está com Obesidade I, seu IMC é: <span>${imc}</span>`;

        else if (imc >= 35 && imc < 39.9) 
            resultado.innerHTML = 
                `Você está com Obesidade II, seu IMC é: <span>${imc}</span>`;
  
        else if(imc > 39.9) resultado.innerHTML =
            `Você está com Obesidade III, seu IMC é: <span>${imc}</span>`;

        else if (altura === "" || (altura)) 
        resultado.innerHTML = "Coloque uma altura real!";
  
        else if (peso === "" || (peso)) 
        resultado.innerHTML = "Coloque um peso real!";
  
}