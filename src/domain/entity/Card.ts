export class Card {
  constructor(readonly title: string, readonly estimation: number) {
    if (title.length === 0) {
      throw new Error("Title is required");
    }
    if (estimation < 0) {
      throw new Error("Estimation has to be positive");
    }
  }
}
