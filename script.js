var nome = window.prompt("Digite sua nome")

var nome1 = document.getElementById("nome1")

nome1.innerHTML = `<h4>Bem vindo(A) ${nome}</h4> `




//função fazer conta +

function calcular(){

    var enviar = document.getElementById("env")

    var enviar1 = document.getElementById("env1")

    var res = document.getElementById("res")

    var r2 = Number(enviar.value)

    var r1 = Number(enviar1.value)

    var s = r2 + r1
    if (s ==""){
        alert("ERRO: Digite algo")
        return
    }

    res.innerHTML = ` <h3>A some entre ${r2} é ${r1} = <strong>${s}</strong></h3>`


    





}