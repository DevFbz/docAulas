
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;


let estoquePrivado = estoque
Object.defineProperty(this,'estoque',{
    enumerable:true,
    configurable:true,
    get: function(){
        return estoquePrivado;
    },
    set: function(valor){
 if(typeof valor !== 'number'){
    throw new TypeError('Error no Codigo')
 }
  
 estoquePrivado = valor
    }
});
}

const p1 = new Produto('Camiseta',20,3) 
p1.estoque = 55;
console.log(p1.estoque)




/*for(let chave in p1){
    console.log(chave);
}

Object.defineProperties(this,{
    nome:{
        enumerable:true,
        value:estoque,
        writable: false,
        configurable:true
    },
    preco:{
        enumerable:true,
        value:estoque,
        writable: false,
        configurable:true
    },
    estoque:{
        enumerable:true,
        value:estoque,
        writable: false,
        configurable:true
    }
});




Object.values
Object.entries
Object.assign (des, any)

Object.getOwnPropertyDescriptor (o, 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)






*/
