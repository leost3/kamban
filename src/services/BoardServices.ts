import { Board } from "../domain/entity/Board";
import { BoardRepository } from "../domain/repository/BoardRepository";
export class BoardServices {
  constructor(private readonly boardRepository: BoardRepository) {}

  async getBoards(): Promise<Board[]> {
    const boards = await this.boardRepository.findAll();
    return boards;
  }
}
