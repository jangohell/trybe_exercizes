function checaPalindromo(palavra) {
    for(index in palavra) {
        if (palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }else {
            return true;
        }
    }
}

console.log(checaPalindromo("ovo"));