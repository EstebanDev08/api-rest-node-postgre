import { USER_CUSTOMER_ASSOCIATION } from "../database/association/user.association.js";
import { USERS } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class UsersService extends CrudService {
  constructor() {
    super();
    this.type = USERS;
    this.association = [USER_CUSTOMER_ASSOCIATION];
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id), {
        include: [
          {
            association: this.association[0],
            include: ["orders"],
          },
        ],
      });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }
      return { data: data };
    } catch (error) {
      return { error: error };
    }
  }
}

export { UsersService };
