import { describe, it, expect, beforeEach } from '@jest/globals';
import { Province, sampleProvinceData } from '../province'

describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  })
  it('shortfall', () => {
    expect(asia.shortfall).toBe(5);
  })

  it('profit', () => {
    expect(asia.profit).toBe(230);
  })

  it('change production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  })

  it('empty string demand', () => {
    asia.demand = '';
    expect(asia.shortfall).toBe(NaN);
    expect(asia.profit).toBe(NaN);
  })
})

describe('no producers', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data);
  })

  it('shortfall', () => {
    expect(noProducers.shortfall).toBe(30);
  })

  it('profit', () => {
    expect(noProducers.profit).toBe(0);
  })
})

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: "String producers",
      producers: '',
      demand: 30,
      price: 20
    }
    const prov = new Province(data);
     expect(prov.shortfall).toBe(0);
  })
})
