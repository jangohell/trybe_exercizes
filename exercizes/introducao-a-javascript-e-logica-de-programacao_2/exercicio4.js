let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
somaArrays = 0
media = 0

for (let i = 0; i < numbers.length; i++) {
    somaArrays = somaArrays + numbers[i];
    media = somaArrays / numbers.length;
    console.log(somaArrays);
    console.log(media);
    if (media > 20) {
        console.log("valor maior que 20");
    } else {
        console.log("valor menor que 20");
    }
}