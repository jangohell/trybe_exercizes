let n = 7;
let asterisco = "*";
let espaco = " ";
let repetir1 = 1;
let repetir2 = 6;



for (let i = 0; i < n; i++) {
    console.log(espaco.repeat(repetir2) + asterisco.repeat(repetir1));
    repetir1++;
    repetir2 = repetir2 - 1;
}