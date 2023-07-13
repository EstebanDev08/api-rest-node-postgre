import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service.js";
import { PRODUCTS } from "../database/routes.types.js";

class ProductsService extends CrudService {
  constructor() {
    super();

    this.type = PRODUCTS;
    this.association = [];
  }
}

export { ProductsService };
