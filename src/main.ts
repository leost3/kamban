import dotenv from "dotenv";
import express from "express";
import { PgPromiseConnection } from "./infra/database/pgPromiseConnection";
import { BoardRepositoryDatabase } from "./infra/repository/BoardRepositoryDatabase";
import { ColumnRepositoryDatabase } from "./infra/repository/ColumnRepositoryDatabase";
import { BoardServices } from "./services/BoardServices";
import { CardService } from "./services/CardService";
import { ColumnService } from "./services/ColumnService";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
app.get("/boards", async (req, res) => {
  const boards = await new BoardServices(boardRepository).getBoards();
  res.json(boards);
});

app.get("/boards/:boardId/columns", async (req, res) => {
  const columnService = new ColumnService(columnRepository);
  const columns = await columnService.getColumns(parseInt(req.params.boardId));
  res.json(columns);
});

app.get("/columns/:columnId/cards", async (req, res) => {
  const cardService = new CardService();
  const cards = await cardService.getCards(parseInt(req.params.columnId));
  res.json(cards);
});
