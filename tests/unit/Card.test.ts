import { Card } from "../../src/domain/entity/Card";

test("should create a Card", () => {
  const card = new Card("Finish course", 12);
  expect(card.title).toBe("Finish course");
  expect(card.estimation).toBe(12);
});
test("should not create a Card without a title", () => {
  expect(() => new Card("", 3)).toThrow(new Error("Title is required"));
});
test("should not create a Card with a negative estimation", () => {
  expect(() => new Card("activity", -3)).toThrow(
    new Error("Estimation has to be positive")
  );
});
