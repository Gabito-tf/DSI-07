import 'mocha';
import {expect} from 'chai';
import { ImperialMass } from '../../src/ImperialMass'

const example = new ImperialMass(1000);

describe('ImperialLength  class', () => {
  describe(' ImperialLength constructor', () => {
    it('example ImperialLength', () => {
      expect(example).to.be.an.instanceOf(ImperialMass)
    });
  });
  describe(' ImperialLength methods', () => {
    it('Get Piedras', () => {
      expect(example.getPiedras()).to.be.eql(1000);
    });
    it('Set Onzas', () => {
      expect(example.setOnzas(100000))
    });
    it('Get Onzas', () => {
      expect(example.getOnzas()).to.be.eql(99993.6);
    });
    it('Set Libras', () => {
      expect(example.setLibras(200))
    });
    it('Get Libras', () => {
      expect(example.getLibras()).to.be.eql(200.00120000000004);
    });
    it('Set Toneladas', () => {
      expect(example.setToneladas(200))
    });
    it('Get Toneladas', () => {
      expect(example.getToneladas()).to.be.eql(199.99613341092);
    });
  });
});
