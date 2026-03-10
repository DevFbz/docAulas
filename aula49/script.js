function randomNum(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(text, temp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof text !== "string") {
        reject("BAD VALUE !");
        return;
      }

      resolve(text.toUpperCase() + " - Passei na promise");
      return;
    }, temp);
  });
}

// esperaAi("Conectando no BD", randomNum(2, 5))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi("hjk", randomNum(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi("Tratando os dados", randomNum(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     console.log("Exibe dados na tela");
//   })
//   .catch((e) => {
//     console.log("ERRO:", e);
//   });

// const promises = [
//   esperaAi("Promise 1", randomNum(1, 3)),
//   esperaAi("Promise 3", randomNum(1, 3)),
//   esperaAi("Promise 2", randomNum(1, 3)),
//   esperaAi(23, randomNum(1, 3)),
// ];

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const baixaPagina = () => {
//   const emCache = true;

//   if(emCache){
//     return Promise.resolve('Pagina em cache')
//   }else{
//     return esperaAi('Baixei a pagina',randomNum(2,3))
//   }
// };

// baixaPagina().then(dadosPagina =>{
//   console.log(dadosPagina)
// }).catch(e=>{
//   console.log(e)
// })

async function executa() {
  try {
    const promise1 = await esperaAi("Promise 1", randomNum(1, 2));
    console.log(promise1);
    const promise2 = await esperaAi("Promise 2", randomNum(1, 2));
    console.log(promise2);
    const promise3 = await esperaAi("Promise 3", randomNum(1, 2));
    console.log(promise3);
    console.log("Termino das Promises");
  } catch (e) {
    console.log(e);
  }
}

executa()