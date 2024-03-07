export const decodedResistorValue = (colors: string[]): string => {
  let resistencias: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  var sum: string = "";
  var exponente: number = 0;
  for (let indexA = 0; indexA <= 1; indexA++) {
    for (let index = 0; index < resistencias.length; index++) {
      if (colors[indexA] == resistencias[index]) sum += index.toString();
    }
  }
  for (let index = 0; index < resistencias.length; index++) {
    if (colors[2] == resistencias[index]) {
      exponente = index;
    }
  }
  exponente = 1.0 * 10 ** exponente;
  exponente = parseInt(sum) * exponente;
  console.log(exponente);
  if (exponente < 1000) {
    return exponente + " ohms";
  } else if (exponente >= 1000 && exponente < 1000000) {
    exponente /= 1000;
    return exponente + " kiloohms";
  }else if(exponente >= 1000000 && exponente<1000000000 ){
    exponente/=1000000
    return exponente + " megaohms";

  }else if(exponente>=1000000000){
    exponente/=1000000000
    return exponente + " gigaohms";
  } else {
    return "";
  }
};
export const COLORS = decodedResistorValue(["green", "brown", "orange"]);

console.log(COLORS);
