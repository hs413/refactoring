import {describe, it} from "mocha";
import { assert, expect } from 'chai'
import {Province, sampleProvinceData, Producer} from "./Province.js";

describe('province', function() {
  it('shortfall', function() {
    const asia = new Province(sampleProvinceData());

    // assert 또는 expect를 사용할 수 있다
    assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  })

  it('profit', function() {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  })
})

