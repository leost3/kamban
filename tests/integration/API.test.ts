import axios from "axios";
test("should return boards through an API", async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3000/boards",
  });
  const boards = response.data;
  const [board] = boards;
  expect(boards).toHaveLength(1);
  expect(board.name).toBe("Project 1");
  expect(board.description).toBe("TODO");
  expect(board.estimation).toBe(16);
});

test("should return columns from a board through an API", async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3000/boards/1/columns",
  });
  const columns = response.data;
  const [column1, column2, column3] = columns;
  expect(columns).toHaveLength(3);
  expect(column1.name).toBe("Column A");
  expect(column2.name).toBe("Column B");
  expect(column3.name).toBe("Column C");
  expect(column1.hasEstimation).toBe(true);
});

test("should return card from a column through an API", async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3000/columns/1/cards",
  });
  const cards = response.data;
  const [card1, card2, card3] = cards;
  expect(cards).toHaveLength(3);
  expect(card1.title).toBe("Activity 1");
  expect(card2.title).toBe("Activity 2");
  expect(card3.title).toBe("Activity 3");
  expect(card1.estimation).toBe(10);
  expect(card2.estimation).toBe(2);
  expect(card3.estimation).toBe(4);
});
