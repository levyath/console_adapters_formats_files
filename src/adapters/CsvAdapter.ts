import fs from "fs";
import { Product } from "../models/Product";
import { IProductProvider } from "../interfaces/IProductProvider";

export class CsvAdapter implements IProductProvider {
    constructor(private filePath: string) { }

    load(): Product[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const lines = data.trim().split("\n");
        return lines.slice(1).map(line => {
            const values = line.split(";"); // troque para "," se seu CSV usa vírgula
            return {
                id: values[0] ?? "",
                name: values[1] ?? "",
                price: parseFloat(values[2] ?? "0"),
            };
        });
    }
}
