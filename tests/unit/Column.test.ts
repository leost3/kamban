import { Column } from "../../src/entity/Column";

test("should create a Column", () => {
  const column = new Column("TODO", true);
  expect(column.name).toBe("TODO");
  expect(column.hasEstimation).toBe(true);
});
test("should not create a Card without a name", () => {
  expect(() => new Column("", true)).toThrow(new Error("Name is required"));
});
