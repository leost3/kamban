import { Column } from "./Column";

export class Board {
  columns: Column[];
  constructor(readonly name: string, readonly description: string) {
    if (name.length === 0) throw new Error("Name is required");
    if (description.length === 0) throw new Error("Description is required");
    this.columns = [];
  }

  addColumn(name: string) {
    this.columns.push(new Column(name, true));
  }
}
