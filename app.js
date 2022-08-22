// Сравните скорость добавления, удаления и поиска элемента (indexOf и has) в Array и Set.
// Сравнение надо провести в любом браузере и в NodeJS. Для сравнения используйте либо
// console.log(Date.now()), либо, в качестве задания со звёздочкой, метод performance()
const {performance} = require('perf_hooks');

let arr = new Array(),
 add_start = performance.now();

    for(i = 0; i <= 100000; i++){
        arr.push(i);
    }

let add_end = performance.now(),
add_result = (add_end -add_start).toFixed(2);

console.log(add_result); 


let remove_start = performance.now();

arr.splice( Math.floor(Math.random()* arr.length), 5000);

console.log(arr);

let remove_end = performance.now(),
remove_res = (remove_end - remove_start).toFixed(2);
console.log(remove_res);
