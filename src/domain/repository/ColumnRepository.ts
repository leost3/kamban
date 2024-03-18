import { Column } from "../entity/Column";

export default interface ColumnRepository {
  findAllByBoardId(boardId: number): Promise<Column[]>;
}
