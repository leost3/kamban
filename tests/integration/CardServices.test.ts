import { PgPromiseConnection } from "../../src/infra/database/pgPromiseConnection";
import { CardRepositoryDatabase } from "../../src/infra/repository/CardRepositotyDatabase";
import { CardService } from "../../src/services/CardService";

it("should return boards on getBoards", async () => {
  const connection = new PgPromiseConnection();
  const cardRepository = new CardRepositoryDatabase(connection);
  const cardService = new CardService(cardRepository);
  const cards = await cardService.getCards(1);
  const [card1, card2, card3] = cards;
  expect(cards).toHaveLength(3);
  expect(card1.title).toBe("Activity 1");
  expect(card2.title).toBe("Activity 2");
  expect(card3.title).toBe("Activity 3");
  expect(card1.estimation).toBe(10);
  expect(card2.estimation).toBe(2);
  expect(card3.estimation).toBe(4);
});
