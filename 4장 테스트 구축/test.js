import {describe, it} from "mocha";
import { assert, expect } from 'chai'
import {Province, sampleProvinceData, Producer} from "./Province.js";

describe('province', function() {
  // 잘못된 방법, 테스트 케이스끼리 공유하므로 테스트가 실패할 가능성이 높다
  // const asia = new Province(sampleProvinceData());

  // before 구문은 각각 테스트 바로 전에 실행되어 공유되지 않는다.
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  })


  it('shortfall', function() {
    // assert 또는 expect를 사용할 수 있다
    assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  })

  it('profit', function() {
    expect(asia.profit).equal(230);
  })

  it('change production', function() {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  })

  it('zero demand', function () {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  })

  it('empty string demand', function() {
    asia.demand = '';
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  })
})

describe('no producers', function() {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No prouducers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  })

  it('shortfall', function() {
    // assert 또는 expect를 사용할 수 있다
    expect(noProducers.shortfall).equal(30);
  })

  it('profit', function() {
    expect(noProducers.profit).equal(0);
  })
})

describe('string for producers', function () {
  it('', function () {
    const data = {
      name: 'String producers',
      producers: '',
      demand: 30,
      price: 20
    };

    const prov = new Province(data);
    expect(prov.shortfall).equal(0);
  })
})
