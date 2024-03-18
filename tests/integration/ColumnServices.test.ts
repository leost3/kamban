import { PgPromiseConnection } from "../../src/infra/database/pgPromiseConnection";
import { ColumnRepositoryDatabase } from "../../src/infra/repository/ColumnRepositoryDatabase";
import { ColumnService } from "../../src/services/ColumnService";

it("should return boards on getBoards", async () => {
  const connection = new PgPromiseConnection();
  const columnRepository = new ColumnRepositoryDatabase(connection);
  const columnService = new ColumnService(columnRepository);
  const columns = await columnService.getColumns(1);
  const [column1, column2, column3] = columns;
  expect(columns).toHaveLength(3);
  expect(column1.name).toBe("Column A");
  expect(column2.name).toBe("Column B");
  expect(column3.name).toBe("Column C");
  expect(column1.hasEstimation).toBe(true);
});
