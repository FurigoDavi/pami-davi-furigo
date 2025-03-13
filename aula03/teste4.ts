function somarTudo(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
  }
  console.log(somarTudo(3, 10, 2, 8));
  