import { Card } from "../entity/Card";

export default interface CardRepository {
  findAllByColumnId(columnId: number): Promise<Card[]>;
}
