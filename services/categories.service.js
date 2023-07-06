import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service.js";

class CategoriesService extends CrudService {
  constructor() {
    super();
    this.generate();
  }

  generate() {
    for (let index = 0; index < 5; index++) {
      this.data.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        image: "url image",
      });
    }
  }

  itemTemplate() {
    return {
      id: "",
      name: "",
      image: "",
    };
  }
}

export { CategoriesService };
