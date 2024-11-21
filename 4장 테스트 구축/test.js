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
})

