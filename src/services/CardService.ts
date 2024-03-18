import { Card } from "../domain/entity/Card";
import CardRepository from "../domain/repository/CardRepository";
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  async getCards(columnId: number): Promise<Card[]> {
    const cards = this.cardRepository.findAllByColumnId(columnId);
    return cards;
  }
}
