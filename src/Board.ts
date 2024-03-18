import { Column } from "./Column";

export class Board {
  columns: Column[];
  constructor(readonly name: string, readonly description: string) {
    this.columns = [];
  }

  addColumn(name: string) {
    this.columns.push(new Column(name));
  }
}
