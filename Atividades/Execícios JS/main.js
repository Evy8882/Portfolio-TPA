function fibonacci() {
    // [0,1,1,2,3,5,8]
    let max = Number(prompt("Digite o número de elementos que você quer na sequência"));
    while (max < 0 || isNaN(max)){
        max = Number(prompt("Número inválido! Digite o número de elementos que você quer na sequência"));
    }
    let seq = []
    for (var i = 0; i < max; i++){
        if (seq.length == 0){
            seq.push(0)
        }else if (seq.length == 1){
            seq.push(1)
        }else{
            seq.push(seq[i-1]+seq[i-2])
        }
    }
    //document.write("A sequência é: "+ seq)
    // document.querySelector("#result").innerHTML = seq;
    document.querySelector("#result").innerHTML = ""
    seq.forEach((num) => {document.querySelector("#result").innerHTML += num + ", "})
}

function equacao2(){
    let a = Number(prompt("Digite o valor de A"));
    while (isNaN(a)){
        a = Number(prompt("Número inválido! Digite um número"));
    }
    let b = Number(prompt("Digite o valor de B"));
    while (isNaN(b)){
        b = Number(prompt("Número inválido! Digite um número"));
    }
    let c = Number(prompt("Digite o valor de C"));
    while (isNaN(c)){
        c = Number(prompt("Número inválido! Digite um número"));
    }
    let x1 = ( (b * -1) + Math.sqrt((b**2) - (4 * a * c)) ) / (2 * a)
    let x2 = ( (b * -1) - Math.sqrt((b**2) - (4 * a * c)) ) / (2 * a)
    document.querySelector("#result").innerHTML = `${a}X<sup>2</sup> + ${b}X + ${c} = 0 <br> S = {${x1}, ${x2}}`;
}

function ordenar(){
    let a = Number(prompt("Digite um valor"));
    let b = Number(prompt("Digite um valor"));
    let c = Number(prompt("Digite um valor"));
    let d = Number(prompt("Digite um valor"));

    let arr = [a,b,c,d].sort()
    document.querySelector("#result").innerHTML = "A junção dos valores é: " + arr
}

function ordenar2(){
    const numerosAleatorios = [
        23, 45, 12, 67, 34,
        89, 56, 78, 90, 11,
        22, 33, 44, 55, 66,
        77, 88, 99, 10, 20,
        30, 40, 50, 60, 70,
        80, 21, 31, 41, 51,
        61, 71, 81, 91, 13,
        14, 15, 16, 17, 18,
        19, 24, 25, 26, 27,
        28, 29, 32, 35, 36,
        37
    ].sort();
    document.querySelector("#result").innerHTML = "Os valores ordenados são: " + numerosAleatorios
}

function ordenarNomes(){
    const nomes = [
        "JOÃO VICTOR MUNIZ DIAS",
        "HILLARY ISABELLE MOTA DE LIMA",
        "JOSE EDUARDO CARVALHO NOBREGA",
        "MARIA CLARA DA SILVA JACINTO",
        "JULIANE MARTINS GONÇALVES JIRARDI",
        "ELIZABETE SILVA OLIVEIRA",
        "BEATRIS CECILIA DE SOUSA",
        "GUILHERME FIGUEIRA PIRES",
        "CÁSSIO FRANÇA OLIVEIRA",
        "EVERTON NASCIMENTO MANCIO",
        "EDUARDO DANI SILVA",
        "GIULIA DE ALMEIDA OLIVEIRA",
        "RAUL GALDINO PEREIRA MARTUCCI",
        "JOÃO PEDRO LIMA MUNIZ",
        "DANILLO GASPAR AGUIAR DA SILVA",
        "DAVI CAMPOS NAPOLI",
        "MARIA PRISCILA SOUZA BUENO",
        "LUIS GUILHERME GOMES DOS SANTOS",
        "GABRIEL DA SILVA CRISPIM",
        "RAUL GONÇALVES MAZZONE",
        "NICOLAS DOMINGUES BRUGNEROTTO",
        "ANTHONY RODRIGUES SILVA",
        "GABRIEL ALMEIDA NOGUEIRA",
        "JOSE PAULO DA GAMA SOBRINHO",
        "MATHEUS PACIFICO GONÇALVES",
        "MURYLLO SULLYVAN JESUS GOUVEIA ALVES",
        "GIOVANNA MOMESSO CERRI DO PRADO",
        "WENVEL KAIQUE CAMPOS GOMES",
        "OTAVIO EMANOEL DE LIMA PORTO",
        "PEDRO AUGUSTO PEREIRA DA SILVA GOMES",
        "RAFAEL D'ANGELO GRADILONE PONTES",
        "CAUAN BASTOS DE OLIVEIRA",
        "LUIZ FERNANDO DA SILVA VIEIRA",
        "PEDRO MAURICIO PALHARES DE CAMPOS",
        "MATHEUS SERRA NASCIMENTO",
        "MAURICIO LUIZ SOARES DE CAMARGO",
        "SAMUEL SANTANA BUENO DE ALMEIDA"
      ].sort();
      document.querySelector("#result").innerHTML = ""
      nomes.forEach((nome) => {document.querySelector("#result").innerHTML += nome + "<br>"})
}