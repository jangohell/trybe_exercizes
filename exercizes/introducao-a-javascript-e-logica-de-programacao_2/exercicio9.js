let array =[0];
let incremento

for (let i = 0; i < 25; i++) {
  incremento = array[i] + 1;
  array.push(incremento);
  console.log(array + " divido por 2: " + incremento / 2);
}