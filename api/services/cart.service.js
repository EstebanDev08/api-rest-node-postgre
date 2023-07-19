import { ValidationError } from "sequelize";
import { CART } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class CartService extends CrudService {
  constructor() {
    super();
    this.type = CART;
    this.association = ["products"];
  }

  async addProduct(item) {
    try {
      const data = await this.models.cart_product.create(item);

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

export { CartService };
