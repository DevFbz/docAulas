function recursiva(max){
    console.log(max);
    if(max>=10)return
    max++
    recursiva(max)
}
recursiva(0)

// Função Geradora

function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1()

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())

 