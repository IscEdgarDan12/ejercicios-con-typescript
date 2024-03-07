// export function isPangram(oracion: string[]) {
//   let pangram: string[] = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let oraIndex:number=0;
//   let index = 0
//   var siEs:boolean=false
//   for (index; index < pangram.length;) {
//     if (pangram[index]==oracion[oraIndex]) {
//         console.log(pangram[index],oracion[oraIndex])
//         index++
//         siEs=true;
//     }else{
//         oraIndex++
//         siEs=false;
//     }
//   }
//   console.log(index,oraIndex,siEs)

// }
// var ora: string = "the quick brown fox jumps over the lazy dog";
// var otroOra: string[] = ora.split(" ");
// ora=''
// for (let index = 0; index < otroOra.length; index++) {
//   ora += otroOra[index];
// }

// otroOra = ora.split("");

// console.log(otroOra.sort());
// isPangram(otroOra.sort())

// // console.log(isPangram(otroOra));
export function isPangram(ora: string): boolean {
  console.log(ora);

  var loweCase = ora.toLocaleLowerCase();
  console.log(loweCase);

  var otroOra: string[] = loweCase.split(" ");
  console.log(otroOra);

  ora = "";
  for (let index = 0; index < otroOra.length; index++) {
    ora += otroOra[index];
  }
  otroOra = ora.split("");
  var oracion: string[] = otroOra.sort();
  console.log(oracion);

  let pangram: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let oraIndex: number = 0;
  let index = 0;
  var siEs: boolean = false;
  for (index; index < pangram.length; ) {
    if (pangram[index] == oracion[oraIndex]) {
      console.log(pangram[index], oracion[oraIndex], index, oraIndex);
      index++;
      siEs = true;
    } else {
      oraIndex++;
      siEs = false;
      if (oraIndex > 1000) {
        break;
      }
    }
  }
  return siEs;
}

var ora: string = "Five quacking Zephyrs jolt my wax bed";
ora.toLocaleLowerCase;
console.log(isPangram(ora));
