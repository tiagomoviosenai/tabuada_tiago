let calculo = document.querySelector("#calcular");
calcular.addEventListener("click", tabuada);

function tabuada(){
    let tn1 = document.querySelector("#txn1");

    let n1 = Number(tn1.value);

    let resultado = document.querySelector("#resultado");

    if (n1 <= 10) {
        for (let i =1; i <=10; i++) {
        resultado.innerHTML += `${n1} x ${i} = ${n1 * i} <br>`;
        
    }
    } else {
        alert ("Calcule apenas até o númeo 10")
    }

}

