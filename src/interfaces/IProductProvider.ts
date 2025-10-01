import { Product } from "../models/Product";

export interface IProductProvider {
  load(): Product[];
}
