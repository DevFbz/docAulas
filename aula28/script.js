/*function soma(x,y){
 if(typeof x != 'number' || typeof y != 'number'){
    throw new Error('x e y precisam ser números')
 }
return x + y;
}
 function logMyErrors(err){
    console.log(err)
 }
try{
  
    const a = "Oi"
    a = 53
}
catch(err){
   if(err instanceof TypeError){
    console.log("Error de Tipo")
   }
   else if(err instanceof RangeError){
console.log("Error de Range")
   }else if(err instanceof EvalError){
    console.log("Error de Eval")
   }else{
    logMyErrors(err);
   }
    }
*/
/*try{
console.log("Iniciei Arquivo")
console.log("Manipulei Arquivo e gerou ERRO!")
console.log(a)
}catch(e){
   console.log("TRATANDO ERRO!")
}finally{
   console.log("FINALLY: Sempre Executo!")
}*/

function getHora(date){
   if(date && !(date  instanceof Date)){
      
      throw new TypeError("Insira instancia de Date.");
   } 
   if(!date){
      date = new Date();
   }
 
   return date.toLocaleTimeString('pt-BR',{
hour12: false
   })
}



try{
   const data = new Date('01-01-1970 12:58:32')
   const hora = getHora(data);
   console.log(hora)
}catch(e){
   
console.log("at " + e)
console.log("Tratando Error!")
}finally{
   
}

