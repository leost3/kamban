import { PgPromiseConnection } from "../../src/infra/database/pgPromiseConnection";
import { BoardServices } from "../../src/services/BoardServices";

it("should return boards on getBoards", async () => {
  const connection = new PgPromiseConnection();
  const boardServices = new BoardServices(connection);
  const boards = await boardServices.getBoards();
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe("Project 1");
  expect(board.description).toBe("TODO");
  expect(board.estimation).toBe(16);
});
