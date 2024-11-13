// EX 1: soma dos valores
function ex1(arr){
    return arr.reduce((acc, curr)=>{
       return acc + curr
    })
}

console.log(ex1([1,2,3,4,5])) // Output: 15

// EX 2: maior valor
function ex2(arr){
    return arr.reduce((acc, curr)=>{
        return curr > acc ? curr : acc 
    })
}

console.log(ex2([1,2,3,4,5])) // Output: 5

// EX 3: inverter os valores
function ex3(arr){
    return arr.reverse()
}

console.log(ex3([1,2,3,4,5])) // Output: [5, 4, 3, 2, 1]


// EX 4: Verificar se tem um elemento
const ex4 = (arr, valorProcurado)=> {
    return arr.includes(valorProcurado);
}

console.log(ex4([1,2,3,4,5], 5)) // Output: true
console.log(ex4([1,2,3,4,5], 6)) // Output: false

// EX 5: Apenas números pares
const ex5 = (arr)=> {
    return arr.filter(item => item % 2 == 0)
}

console.log(ex5([1,2,3,4,5])) // Output: [2, 4]

// EX 6: Concatene 2 arrays
function ex6(arr1, arr2){
    return [...arr1, ...arr2];
}

console.log(ex6([1,2,3,4,5],[6,7,8,9,0])) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// EX 7: Remover duplicatas
function ex7(arr){
    let narr = []
    arr.forEach(el => {
        if (!narr.includes(el))
        {narr.push(el)}
    });
    return narr
}

console.log(ex7([2,2,3,1,5])) // Output: [2, 3, 1, 5]

// EX 8: Concatene 2 arrays
function ex8(){
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    return [...arr1, ...arr2];
}

console.log(ex8()) // Output: [1, 2, 3, 4, 5, 6]

// EX 9: Apenas números pares
function ex9() {
    arr = [1,2,3,4,5,6,7,8,9,10]
    return arr.filter(item => item % 2 == 0)
}

console.log(ex9()) // Output: [2, 4, 6, 8, 10]

// EX 10: Verificar se tem um item
function ex10(){
    arr = [10,20,30,40,50]
    valorProcurado = 30
    return arr.includes(valorProcurado);
}

console.log(ex10()) // Output: true

// EX 11: Remover duplicatas
const ex11 = ()=>{
    let arr = [1,2,2,3,4,4,5]
    let narr = []
    arr.forEach(el => {
        if (!narr.includes(el))
        {narr.push(el)}
    });
    return narr
}

console.log(ex11()) // Output: [1, 2, 3, 4, 5]

// EX 12: inverter os valores
const ex12 = () =>{
    arr = [1,2,3,4,5]
    return arr.reverse()
}

console.log(ex12([1,2,3,4,5])) // Output: [5, 4, 3, 2, 1]

// EX 13: maior valor 12
function ex13(){
    let arr = [5,9,3,12,7]
    return arr.reduce((acc, curr)=>{
        return curr > acc ? curr : acc 
    })
}

console.log(ex13()) // Output: 12,

// EX 14: soma dos elementos
function ex14(){
    let arr = [2,4,6,8,10]
    return arr.reduce((acc, curr)=>{
       return acc + curr
    })
}

let soma = ex14()
console.log(soma) // Output: 30

//Função que executa tudo:
function executarTudo(){
    alert(ex1(JSON.parse(prompt("digite um array que será somado os elementos, digite entre [] e separados por ,"))))
    alert(ex2(JSON.parse(prompt("digite um array que será pego o maior valor, digite entre [] e separados por ,"))))
    alert(ex3(JSON.parse(prompt("digite um array que será invertido, digite entre [] e separados por ,"))))
    alert(ex4(JSON.parse(prompt("digite um array numérico que será procurado um elemento, digite entre [] e separados por ,")), Number(prompt("digite o valor a ser procurado"))))
    alert(ex5(JSON.parse(prompt("digite um array que será pego os elementos numéricos pares, digite entre [] e separados por ,"))))
    alert(ex6(JSON.parse(prompt("digite um array que será concatenado a outro, digite entre [] e separados por ,")), JSON.parse(prompt("digite um array que será concatenado ao ultimo, digite entre [] e separados por ,"))))
    alert(ex7(JSON.parse(prompt("digite um array que será removido as duplicatas, digite entre [] e separados por ,"))))
    alert(ex8())
    alert(ex9())
    alert(ex10())
    alert(ex11())
    alert(ex12())
    alert(ex13())
    alert(ex14())
}