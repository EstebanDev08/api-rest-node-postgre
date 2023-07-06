import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service";

class UsersService extends CrudService {
  constructor() {
    super();
    this.generate();
  }

  generate() {
    for (let index = 0; index < 5; index++) {
      this.data.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        user: "user",
        avatar: "url avatar",
        tell: faker.phone.number(),
        cartId: 32,
        ordersId: 49,
      });
    }
  }
}

export { UsersService };
