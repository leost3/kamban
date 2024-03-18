import { Column } from "../domain/entity/Column";
import ColumnRepository from "../domain/repository/ColumnRepository";
export class ColumnService {
  constructor(readonly columnRepository: ColumnRepository) {}

  async getColumns(boardId: number): Promise<Column[]> {
    const columns = await this.columnRepository.findAllByBoardId(boardId);
    return columns;
  }
}
