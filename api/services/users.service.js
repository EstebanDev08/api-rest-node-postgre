import { USERS } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class UsersService extends CrudService {
  constructor() {
    super();
    this.type = USERS;
  }
}

export { UsersService };
