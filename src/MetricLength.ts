/**
 * Clase que trabaja con las unidades de medida del sistema metrico
 *
 * @export
 * @class MetricLength
 */
export class MetricLength {

    public metros: number
/**
 * Creates an instance of MetricLength.
 * @param {number} metros
 * @memberof MetricLength
 */
constructor(metros: number) {
        this.metros = metros
    }
/**
 * Recibe una cantidad en centimetros, y la guarda en metros.
 *
 * @param {number} centimetros
 * @memberof MetricLength
 */
public setCentimetros(centimetros: number){
        this.metros = centimetros * 0.01
    }
/**
 * Retorna los metros en formato centimetros
 *
 * @return {*} 
 * @memberof MetricLength
 */
public getCentimetros(){
        return this.metros * 100
    }
/**
 * Recibe una cantidad de kilometros, y la guarda en metros
 *
 * @param {number} kilometros
 * @memberof MetricLength
 */
public setKilometros(kilometros: number){
        this.metros = kilometros * 1000
    }
/**
 * Retorna los metros en formato kilometros
 *
 * @return {*} 
 * @memberof MetricLength
 */
public getKilometros(){
        return this.metros * 0.001
    }
/**
 * Retorna los metros
 *
 * @return {*} 
 * @memberof MetricLength
 */
public getMetros(){
        return this.metros
    }



}