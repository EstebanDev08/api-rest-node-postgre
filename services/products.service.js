import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service.js";

class ProductsService extends CrudService {
  constructor() {
    super();
    this.generate();
  }

  generate() {
    for (let index = 0; index < 5; index++) {
      this.data.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: "url",
      });
    }
  }
}

export { ProductsService };
