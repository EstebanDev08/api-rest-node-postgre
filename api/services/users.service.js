import { USER_CUSTOMER_ASSOCIATION } from "../database/association/user.association.js";
import { USERS } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class UsersService extends CrudService {
  constructor() {
    super();
    this.type = USERS;
    this.association = [USER_CUSTOMER_ASSOCIATION];
  }
}

export { UsersService };
