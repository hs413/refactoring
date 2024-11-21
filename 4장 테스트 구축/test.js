import {describe, it} from "mocha";
import { assert, expect } from 'chai'
import {Province, sampleProvinceData, Producer} from "./Province.js";

describe('province', function() {
  it('shortfall', function() {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  })
})