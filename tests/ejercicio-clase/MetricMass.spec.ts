import 'mocha';
import {expect} from 'chai';
import { MetricMass } from '../../src/MetricMass'

const example = new MetricMass(1000);

describe('MetricMass  class', () => {
  describe(' MetricMass constructor', () => {
    it('example MetricMass', () => {
      expect(example).to.be.an.instanceOf(MetricMass)
    });
  });
  describe(' MetricMass methods', () => {
    it('Get Kilogramos', () => {
      expect(example.getKilogramos()).to.be.eql(1000);
    });
    it('Set Gramos', () => {
      expect(example.setGramos(1000))
    });
    it('Get Gramos', () => {
      expect(example.getGramos()).to.be.eql(1000);
    });
    it('Set Toneladas', () => {
      expect(example.setToneladas(100000))
    });
    it('Get Toneladas', () => {
      expect(example.getToneladas()).to.be.closeTo(100000,1);
    });
  });
});
