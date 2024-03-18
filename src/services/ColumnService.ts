import pgp from "pg-promise";
import { Column } from "../entity/Column";
export class ColumnService {
  constructor() {}

  async getColumns(boardId: number): Promise<Column[]> {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
    const columnsData = await connection.query(
      "select name, has_estimation from leo.column where id_board = $1",
      [boardId]
    );
    const columns: Column[] = [];
    for (const columnData of columnsData) {
      columns.push(new Column(columnData.name, columnData.has_estimation));
    }
    await connection.$pool.end();
    return columns;
  }
}
