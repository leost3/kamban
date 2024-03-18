import { Board } from "../../domain/entity/Board";
import { BoardRepository } from "../../domain/repository/BoardRepository";
import Connection from "../database/Connection";

export class BoardRepositoryDatabase implements BoardRepository {
  constructor(private readonly connection: Connection) {}

  async findAll(): Promise<Board[]> {
    const boardsQuery = "select id_board,name, description from leo.board";
    const boardParams: any = [];
    const boardsData = await this.connection.query(boardsQuery, boardParams);
    const boards: Board[] = [];
    for (const boardData of boardsData) {
      const board = new Board(boardData.name, boardData.description);
      boards.push(board);
    }
    return boards;
  }
}
