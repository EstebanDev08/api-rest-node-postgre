import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service.js";
import { PRODUCTS } from "../database/routes.types.js";
import { PRODUCT_CATEGORY_ASSOCIACTION } from "../database/association/product.association.js";

class ProductsService extends CrudService {
  constructor() {
    super();

    this.type = PRODUCTS;
    this.association = [PRODUCT_CATEGORY_ASSOCIACTION];
  }
}

export { ProductsService };
