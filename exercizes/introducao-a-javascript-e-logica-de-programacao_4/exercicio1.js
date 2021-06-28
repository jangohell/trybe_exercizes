let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function greeting(name) {
    name = info.personagem;
    console.log("Bem vinda, " + name);
}

greeting();