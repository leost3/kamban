import { Board } from "../entity/Board";
import Connection from "../infra/database/Connection";
export class BoardServices {
  constructor(private readonly connection: Connection) {}

  async getBoards(): Promise<Board[]> {
    const boardsQuery = "select id_board,name, description from leo.board";
    const boardParams: any = [];
    const boardsData = await this.connection.query(boardsQuery, boardParams);
    const boards: Board[] = [];
    for (const boardData of boardsData) {
      const cardsQuery =
        "select * from leo.card join leo.column using (id_column) where id_board = $1";
      const cardsParams = [boardData.id_board];
      const cardsData = await this.connection.query(cardsQuery, cardsParams);
      let estimation = 0;
      for (const cardData of cardsData) {
        estimation += cardData.estimation;
      }
      const board = new Board(boardData.name, boardData.description);
      board.estimation = estimation;
      boards.push(board);
    }
    await this.connection.close();
    return boards;
  }
}
