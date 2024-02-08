var enviar1 = document.querySelector("#enviar1")

enviar1.addEventListener("click",function(a){
   a.preventDefault()

   var idade = document.querySelector("#idade")

   enviar1 = idade.value;

   console.log(enviar1)
})

var enviar2 = document.querySelector("#enviar2")

enviar2.addEventListener("click",function(b){
   b.preventDefault()

   var altura = document.querySelector("#altura")

   enviar2 = altura.value;

   console.log(enviar2)
})

var enviar3 = document.querySelector("#enviar3")

enviar3.addEventListener("click",function(c){
   c.preventDefault()

   var peso = document.querySelector("#peso")

   enviar3 = peso.value;

   console.log(enviar3)
})

  var fator = document.querySelector("#fator")

  fator.addEventListener("click",function(s){
   s.preventDefault()

   fator = document.querySelector("#fator").value

   
   console.log(fator)
  })

   var calcular = document.querySelector("#calcular")

   calcular.addEventListener("click", function(c){
    c.preventDefault();
 
    var masculino = document.querySelector("#masculino").checked;
    var feminino = document.querySelector("#feminino").checked;
    var peso = parseFloat(document.querySelector("#peso").value); 
    var altura = parseFloat(document.querySelector("#altura").value); 
    var idade = parseFloat(document.querySelector("#idade").value);
    var calmasc = 66.47 + (13.75 * peso) + (5.003 * altura) - (6.775 * idade);
    var calfemini = 655.09 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);
    var resultado = document.querySelector("#resultados")

 
    if (masculino) {
        resultado.innerHTML = calmasc * fator
    } else if (feminino) {
        resultado.innerHTML= calfemini * fator;
    } else {
        console.log("Gênero não selecionado");
    }
  })
