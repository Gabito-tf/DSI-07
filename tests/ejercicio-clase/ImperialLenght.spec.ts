import 'mocha';
import {expect} from 'chai';
import { ImperialLength } from '../../src/ImperialLength'

const example = new ImperialLength(1000);

describe('ImperialLength  class', () => {
  describe(' ImperialLength constructor', () => {
    it('example ImperialLength', () => {
      expect(example).to.be.an.instanceOf(ImperialLength)
    });
  });
  describe(' ImperialLength methods', () => {
    it('Get Yardas', () => {
      expect(example.getYardas()).to.be.eql(1000);
    });
    it('Set Pulgadas', () => {
      expect(example.setPulgadas(100000))
    });
    it('Get Pulgadas', () => {
      expect(example.getPulgadas()).to.be.closeTo(100000,1);
    });
    it('Set Pies', () => {
      expect(example.setPies(200))
    });
    it('Get Pies', () => {
      expect(example.getPies()).to.be.eql(199.99998);
    });
    it('Set Millas', () => {
      expect(example.setMillas(200))
    });
    it('Get Millas', () => {
      expect(example.getMillas()).to.be.eql(200.00006399999998);
    });
  });
});
