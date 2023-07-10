import { faker } from "@faker-js/faker";
import { CrudService } from "./crud.service";

class UsersService extends CrudService {
  constructor() {
    super();
    this.generate();
  }
}

export { UsersService };
