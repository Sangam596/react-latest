import { expect, test } from "vitest";
import sum from "../sum";


test("should return sum of two numbers", () => {
  expect(sum(4,3)).toEqual(7);
})