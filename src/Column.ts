import { Card } from "./Card";

export class Column {
  cards: Card[];
  constructor(readonly name: string) {
    this.cards = [];
  }
  addCard(card: Card) {
    this.cards.push(card);
  }
  estimate() {
    let estimation: number = 0;
    for (const card of this.cards) {
      estimation += card.estimation;
    }
    return estimation;
  }
}
