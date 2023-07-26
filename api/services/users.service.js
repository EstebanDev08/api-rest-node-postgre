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
            include: [{ association: "orders" }],
          },
        ],
        attributes: { exclude: ["password"] },
      });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }
      return { data: data };
    } catch (error) {
      return { error: error };
    }
  }

  async create(item) {
    try {
      const data = await this.models[this.type].create(item, {
        include: this.association,
      });
      return { data: data };
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error);
        return {
          error: {
            statusCode: 409,
            message: error.name,
            errors: error?.errors[0]?.message || error?.errors,
          },
        };
      }

      return { error: error };
    }
  }
}

export { UsersService };
