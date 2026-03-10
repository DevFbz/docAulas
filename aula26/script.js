/*function random(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("############");

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

*/

const array = [1,2,3,4,5,6,7]

for(let v of array){
if( v == 4){
    console.log("Pulei")
    continue
}

console.log(v)


if( v == 7){
    console.log("Parei")
    break
}


}
