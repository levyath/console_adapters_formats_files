import fs from "fs";
import { Product } from "../models/Product";
import { IProductProvider } from "../interfaces/IProductProvider";

export class JsonAdapter implements IProductProvider {
  constructor(private filePath: string) {}

  load(): Product[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.map((item: any) => ({
      id: String(item.id),
      name: String(item.name),
      price: parseFloat(item.price),
    }));
  }
}
