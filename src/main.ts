import dotenv from "dotenv";
import express from "express";
import pgp from "pg-promise";
import { Board } from "./entity/Board";
import { Card } from "./entity/Card";
import { Column } from "./entity/Column";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("/boards", async (req, res) => {
  const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
  const boardsData = await connection.query(
    "select name, description from leo.board",
    []
  );
  const boards: Board[] = [];
  for (const boardData of boardsData) {
    boards.push(new Board(boardData.name, boardData.description));
  }
  res.json(boards);
});

app.get("/boards/:boardId/columns", async (req, res) => {
  const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
  const columnsData = await connection.query(
    "select name, has_estimation from leo.column where id_board = $1",
    [req.params.boardId]
  );
  const columns: Column[] = [];
  for (const columnData of columnsData) {
    columns.push(new Column(columnData.name, columnData.has_estimation));
  }
  res.json(columns);
});

app.get("/columns/:columnId/cards", async (req, res) => {
  const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
  const cardsData = await connection.query(
    "select title, estimation from leo.card where id_column = $1",
    [req.params.columnId]
  );
  const cards: Card[] = [];
  for (const cardData of cardsData) {
    cards.push(new Card(cardData.title, cardData.estimation));
  }
  res.json(cards);
});
