import { Card } from "../../domain/entity/Card";
import CardRepository from "../../domain/repository/CardRepository";
import Connection from "../database/Connection";

export class CardRepositoryDatabase implements CardRepository {
  constructor(private readonly connection: Connection) {}
  async findAllByColumnId(columnId: number): Promise<Card[]> {
    const cardsData = await this.connection.query(
      "select title, estimation from leo.card where id_column = $1",
      [columnId]
    );
    const cards: Card[] = [];
    for (const cardData of cardsData) {
      cards.push(new Card(cardData.title, cardData.estimation));
    }
    return cards;
  }
}
