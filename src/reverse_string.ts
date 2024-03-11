export function reverse(oracion:string):string {
    var oracion2= oracion.split("")
    oracion=""
    for (let index = oracion2.length-1; index >= 0; index--) {

      oracion+=oracion2[index]
    }
    return oracion
  }

  console.log(reverse("edgar"))
  