/**
 * Clase para trabajar con masas en el sistema metrico
 *
 * @export
 * @class MetricMass
 */
export class MetricMass {

    private kilogramos: number
/**
 * Creates an instance of MetricMass.
 * @param {number} kilogramos
 * @memberof MetricMass
 */
constructor(kilogramos: number) {
        this.kilogramos = kilogramos
    }
/**
 * recibimos una cantidad de gramos y la guardamos en kilogramos
 *
 * @param {number} gramos
 * @memberof MetricMass
 */
public setGramos(gramos: number){
        this.kilogramos = gramos * 0.01
    }
/**
 * Retornamos los kilogramos en su equivalente a gramos
 *
 * @return {*} 
 * @memberof MetricMass
 */
public getGramos(){
        return this.kilogramos * 100
    }
/**
 * recibimos una cantidad de toneladas, y guardamos su equivalente en kilogramos
 *
 * @param {number} toneladas
 * @memberof MetricMass
 */
public setToneladas(toneladas: number){
        this.kilogramos = toneladas * 1000
    }
/**
 * Retornamos las toneladas en su equivalente a kilogramos
 *
 * @return {*} 
 * @memberof MetricMass
 */
public getToneladas(){
        return this.kilogramos * 0.001
    }
/**
 * Retorna en kilogramos
 *
 * @return {*} 
 * @memberof MetricMass
 */
public getKilogramos(){
        return this.kilogramos
    }



}