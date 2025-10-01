import fs from "fs";
import { parseString } from "xml2js";
import { Product } from "../models/Product";
import { IProductProvider } from "../interfaces/IProductProvider";

export class XmlAdapter implements IProductProvider {
  constructor(private filePath: string) {}

  load(): Product[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    let products: Product[] = [];

    parseString(data, (err, result) => {
      if (err) throw err;
      products = result.products.product.map((item: any) => ({
        id: String(item.id[0]),
        name: String(item.name[0]),
        price: parseFloat(item.price[0]),
      }));
    });

    return products;
  }
}
