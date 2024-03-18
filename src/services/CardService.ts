import pgp from "pg-promise";
import { Card } from "../domain/entity/Card";
export class CardService {
  constructor() {}

  async getCards(columnId: number): Promise<Card[]> {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
    const cardsData = await connection.query(
      "select title, estimation from leo.card where id_column = $1",
      [columnId]
    );
    const cards: Card[] = [];
    for (const cardData of cardsData) {
      cards.push(new Card(cardData.title, cardData.estimation));
    }
    await connection.$pool.end();
    return cards;
  }
}
