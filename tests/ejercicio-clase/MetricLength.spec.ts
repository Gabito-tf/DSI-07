import 'mocha';
import {expect} from 'chai';
import { MetricLength } from '../../src/MetricLength'

const example = new MetricLength(1000);

describe('MetricLength  class', () => {
  describe(' MetricLength constructor', () => {
    it('example MetricLength', () => {
      expect(example).to.be.an.instanceOf(MetricLength)
    });
  });
  describe(' MetricLength methods', () => {
    it('Get Metros', () => {
      expect(example.getMetros()).to.be.eql(1000);
    });
    it('Set Centimetros', () => {
      expect(example.setCentimetros(1000))
    });
    it('Get Centimetros', () => {
      expect(example.getCentimetros()).to.be.eql(1000);
    });
    it('Set Kilometros', () => {
      expect(example.setKilometros(100000))
    });
    it('Get Kilometros', () => {
      expect(example.getKilometros()).to.be.closeTo(100000,1);
    });
  });
});
