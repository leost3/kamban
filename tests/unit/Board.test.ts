import { Board } from "../../src/entity/Board";

test("should create a board", () => {
  const board = new Board("Project 1", "new board");
  expect(board.name).toBe("Project 1");
});
test("should calculate the estimated time for a board", () => {
  const board = new Board("Project 1", "new board");
  board.estimation = 6;
  // expect(board.estimation).toBe(6);
});
test("should not create a Board without a name", () => {
  expect(() => new Board("", "desc")).toThrow(new Error("Name is required"));
});
test("should not create a Board without a description", () => {
  expect(() => new Board("name", "")).toThrow(
    new Error("Description is required")
  );
});
