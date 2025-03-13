function saudacao2(nome: string, saudacaoPadrao: string = "oiiii"): string {
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao("Ana")); // "Ana é a minha namorada"
  