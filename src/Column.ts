import { Card } from "./Card";

export class Column {
  cards: Card[];
  constructor(readonly name: string, readonly hasEstimation: boolean) {
    if (name.length === 0) {
      throw new Error("Name is required");
    }
    this.cards = [];
  }
  addCard(card: Card) {
    this.cards.push(card);
  }
}
