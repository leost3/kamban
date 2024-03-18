import { ColumnService } from "../../src/services/ColumnService";

it("should return boards on getBoards", async () => {
  const columnService = new ColumnService();
  const columns = await columnService.getColumns(1);
  const [column1, column2, column3] = columns;
  expect(columns).toHaveLength(3);
  expect(column1.name).toBe("Column A");
  expect(column2.name).toBe("Column B");
  expect(column3.name).toBe("Column C");
  expect(column1.hasEstimation).toBe(true);
});
