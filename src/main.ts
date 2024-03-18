import dotenv from "dotenv";
import express from "express";
import { PgPromiseConnection } from "./infra/database/pgPromiseConnection";
import { BoardServices } from "./services/BoardServices";
import { CardService } from "./services/CardService";
import { ColumnService } from "./services/ColumnService";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("/boards", async (req, res) => {
  const connection = new PgPromiseConnection();
  const boards = await new BoardServices(connection).getBoards();
  res.json(boards);
});

app.get("/boards/:boardId/columns", async (req, res) => {
  const columnService = new ColumnService();
  const columns = await columnService.getColumns(parseInt(req.params.boardId));
  res.json(columns);
});

app.get("/columns/:columnId/cards", async (req, res) => {
  const cardService = new CardService();
  const cards = await cardService.getCards(parseInt(req.params.columnId));
  res.json(cards);
});
