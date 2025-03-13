function saudacao(nome: string, saudacaoPadrao?: string): string {
  if (saudacaoPadrao === undefined) {
    saudacaoPadrao = "Salve";
  }
  return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("Furigo"));
