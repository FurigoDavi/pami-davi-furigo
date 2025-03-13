function somar(a: number, b: number): number;
function somar(a: string, b: string): string;
function somar(a: any, b: any): any {
  return a + b;
}
console.log(somar(5, 10)); // 15
console.log(somar("salve, ", "Javaralhadas!"));