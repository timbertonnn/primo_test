import "mocha";
import {expect} from "chai";
import { merge_test } from "./merge_func";

describe('merge_test', () => {
  it('merge two arrays and sort them in asc order', () => {
    const collection1 = [2, 1, 8, 4, 0, 5];
    const collection2 = [11, 7, 4, 5, 3, 6, 9, 10];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const result = merge_test(collection1, collection2);
    expect(result).to.deep.equal(expected);
  });
    it('empty arrays', () => {
      const collection1: number[] = [];
      const collection2: number[] = [];
      const expected: number[] = [];
      const result = merge_test(collection1, collection2);
      expect(result).to.deep.equal(expected);
    });
});