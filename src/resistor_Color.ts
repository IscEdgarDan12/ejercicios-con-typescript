export const colorCode = (color: string):number|string[]=> {
    let colores: string[]=['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
    for (let index = 0; index <colores.length; index++) {
      if(color==(colores[index]))
        return index;
    }if(color==('colors')){
      return colores;
    }else{
      return 0;
    }
  }
  export const COLORS =colorCode('colors') ;