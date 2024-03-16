export function isLeap(anio:number): boolean {
  if((anio % 4 == 0 && anio % 100 !== 0) || (anio % 400 ==0)){
    return true
  }else{
    return false
    
  }  
}
console.log(isLeap(1960)) 

/* Forma de Simplificar el codigo... */

/* export function isLeap(anio:number): boolean {
  return (anio % 4 === 0 && anio % 100 !==0) || (anio % 400 ==0);
}
console.log(isLeap(1960)); */