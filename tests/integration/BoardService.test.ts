import { BoardServices } from "../../src/services/BoardServices";

it("should return boards on getBoards", async () => {
  const boardServices = new BoardServices();
  const boards = await boardServices.getBoards();
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe("Project 1");
  expect(board.description).toBe("TODO");
  expect(board.estimation).toBe(16);
});
