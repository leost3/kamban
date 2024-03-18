import pgp from "pg-promise";
import { Board } from "../entity/Board";
export class BoardServices {
  constructor() {}

  async getBoards(): Promise<Board[]> {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
    const boardsData = await connection.query(
      "select id_board,name, description from leo.board",
      []
    );
    const boards: Board[] = [];
    for (const boardData of boardsData) {
      const cardsData = await connection.query(
        "select * from leo.card join leo.column using (id_column) where id_board = $1",
        [boardData.id_board]
      );
      let estimation = 0;
      for (const cardData of cardsData) {
        estimation += cardData.estimation;
      }
      const board = new Board(boardData.name, boardData.description);
      board.estimation = estimation;
      boards.push(board);
    }
    await connection.$pool.end();
    return boards;
  }
}
