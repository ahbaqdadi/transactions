import { Item } from "./item";

export class Transaction implements Item {
  public "@id"?: string;

  constructor(
    _id?: string,
    public account_id?: any,
    public amount?: number,
    public id?: number,
    public type?: boolean,
    public created_at?: Date
  ) {
    this["@id"] = _id;
  }
}
