import { Card } from "./Card";

export class Column {
  cards: Card[];
  constructor(readonly name: string, readonly hasEstimation: boolean) {
    this.cards = [];
  }
  addCard(card: Card) {
    this.cards.push(card);
  }
}
