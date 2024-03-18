import { Board } from "../../src/Board";

test("should create a board", () => {
  const board = new Board("Project 1", "new board");
  expect(board.name).toBe("Project 1");
});
test("should not create a Board without a name", () => {
  expect(() => new Board("", "desc")).toThrow(new Error("Name is required"));
});
test("should not create a Board without a description", () => {
  expect(() => new Board("name", "")).toThrow(
    new Error("Description is required")
  );
});
