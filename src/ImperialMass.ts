/**
 * Clase para trabajar con distancias del sistema imperial
 *
 * @export
 * @class ImperialMass
 */
export class ImperialMass {

    private piedras: number
/**
 * Creates an instance of ImperialMass.
 * @param {number} piedras
 * @memberof ImperialMass
 */
constructor(piedras: number) {
        this.piedras = piedras
    }
/**
 * Recibe onzas, guarda su equivalente en Piedras
 *
 * @param {number} onzas
 * @memberof ImperialMass
 */
public setOnzas(onzas: number){
        this.piedras = onzas * 0.004464
    }
/**
 * Retorna las piedras en su equivalente a onzas
 *
 * @return {*} 
 * @memberof ImperialMass
 */
public getOnzas(){
        return this.piedras * 224
    }
/**
 * Recibe Libras, guarda su equivalente en Piedras
 *
 * @param {number} libras
 * @memberof ImperialMass
 */
public setLibras(libras: number){
        this.piedras = libras * 0.071429
    }
/**
 * Retorna las piedras en su equivalente a libras
 *
 * @return {*} 
 * @memberof ImperialMass
 */
public getLibras(){
        return this.piedras * 14
    }
/**
 * Retorna las piedras
 *
 * @return {*} 
 * @memberof ImperialMass
 */
public getPiedras() {
        return this.piedras
    }
/**
 * Recibe toneladas americanas, y guarda en piedras
 *
 * @param {number} toneladas
 * @memberof ImperialMass
 */
public setToneladas(toneladas: number){
        this.piedras = toneladas * 157.47
    }
/**
 * Devuelve las piedras en su equivalente a Toneladas
 *
 * @return {*} 
 * @memberof ImperialMass
 */
public getToneladas(){
        return this.piedras * 0.00635029318
    }

}