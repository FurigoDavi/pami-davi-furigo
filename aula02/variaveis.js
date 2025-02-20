var numero = 2;
let texto = "hello";
const oQueEisso = "?";

//o ponto e virgula é opcional! Boas praticas o usam ♡

console.log('Tipo var:', numero);
//concatenar com virgula me garante um espaço

numero = 13;

console.log(texto + " o número agora é " + numero);
console.log(`${texto} o número agora é ${numero}`);

texto = 69;

console.log(texto + numero);

// concatenar com + dois valores númericos vai acabar somando

console.log(oQueEisso);
oQueEisso = '!';
console.log(oQueEisso);

// constatntes não podem ter novos valores assinalados a ela

// oQueEisso = "uma constante????""

// console.log(oQueEisso)