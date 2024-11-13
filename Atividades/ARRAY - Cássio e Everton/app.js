const COMUM = ["MACARRÃO","MATEMÁTICA","HISTÓRIA","FÍSICA","QUÍMICA","EDUCAÇÃO FÍSICA","ARTES", "LIC"];
const TECN = ["LINGUIÇA","BANCO DE DADOS","FI","APS","TPA","EAMT","EACNT","EMPREENDEDORISMO", "INGLÊS"];

COMUM.pop()
TECN.pop()

COMUM.shift()
TECN.shift()

COMUM.unshift("PORTUGUÊS")
TECN.unshift("DESIGN DIGITAL")

COMUM.push("INGLÊS")
TECN.push("LIC")

const DIVCOMUM = document.querySelector(".comum")
const DIVTECN = document.querySelector(".tecnica")

COMUM.map((mat)=>{
    DIVCOMUM.innerHTML += `<div> ${mat} </div><br>`
})

TECN.map((mat)=>{
    DIVTECN.innerHTML += `<div> ${mat} </div><br>`
})