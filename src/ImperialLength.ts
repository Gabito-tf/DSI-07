/**
 * Clase imperial para medidas
 *
 * @export
 * @class ImperialLength
 */
export class ImperialLength {

    private yardas: number
/**
 * Creates an instance of ImperialLength.
 * @param {number} yardas en yardas
 * @memberof ImperialLength
 */
constructor(yardas: number) {
        this.yardas = yardas
    }
/**
 * Recibe pulgadas, y guarda su equivalente en yardas
 *
 * @param {number} pulgadas
 * @memberof ImperialLength
 */
public setPulgadas(pulgadas: number){
        this.yardas = pulgadas * 0.0277778
    }
/**
 * Retorna las yardas en forma de pulgadas
 *
 * @return {*} 
 * @memberof ImperialLength
 */
public getPulgadas(){
        return this.yardas * 36
    }
/**
 * Recibe pies, y guarda su equivalente en yardas
 *
 * @param {number} pies
 * @memberof ImperialLength
 */
public setPies(pies: number){
        this.yardas = pies * 0.3333333
    }
/**
 * Retorna las yardas en forma de pies.
 *
 * @return {*} 
 * @memberof ImperialLength
 */
public getPies(){
        return this.yardas * 3
    }
/**
 * Retorna las yardas
 *
 * @return {*} 
 * @memberof ImperialLength
 */
public getYardas() {
        return this.yardas
    }
/**
 * Recibe millas, y guarda su equivalente en yardas
 *
 * @param {number} millas
 * @memberof ImperialLength
 */
public setMillas(millas: number){
        this.yardas = millas * 1760
    }
/**
 * Retorna las yardas, en forma de millas.
 *
 * @return {*} 
 * @memberof ImperialLength
 */
public getMillas(){
        return this.yardas * 0.000568182
    }

}