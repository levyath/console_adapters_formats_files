import { CsvAdapter } from "./adapters/CsvAdapter";
import { JsonAdapter } from "./adapters/JsonAdapter";
import { XmlAdapter } from "./adapters/XmlAdapter";
import { IProductProvider } from "./interfaces/IProductProvider";
import { getArgs } from "./utils/args";

const { input, format } = getArgs();

if (!input || !format) {
  console.error("Uso: ts-node src/app.ts --input=arquivo --format=csv|json|xml");
  process.exit(1);
}

let provider: IProductProvider;

switch (format.toLowerCase()) {
  case "csv":
    provider = new CsvAdapter(input);
    break;
  case "json":
    provider = new JsonAdapter(input);
    break;
  case "xml":
    provider = new XmlAdapter(input);
    break;
  default:
    console.error("Formato não suportado");
    process.exit(1);
}

const products = provider.load();
console.log(JSON.stringify(products, null, 2));
