import { ImperialLength } from './ImperialLength'

import { Adaptee } from './adaptee'
import { MetricLength } from './MetricLength'

class Adapter extends MetricLength {

    private adaptee: Adaptee

    constructor(adaptee: Adaptee, metros: number) {
        super(metros)
        this.adaptee = adaptee;
    }

}

const adaptee = new Adaptee
const adapter = new Adapter(adaptee, 100)

console.log(adapter)