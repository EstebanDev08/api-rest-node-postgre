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

  async deleteProductToCart(item) {
    try {
      const data = await this.models.cart_product.findOne({ where: item });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }

      data.destroy();

      return { isDelete: true };
    } catch (error) {
      return { error: error };
    }
  }

  async deleteAllProductsToCart(customerId) {
    try {
      const data = await this.models.cart_product.destroy({
        where: { customerId: parseInt(customerId) },
      });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }

      return { isDelete: true };
    } catch (error) {
      return { error: error };
    }
  }

  async incrementProduct(item) {
    try {
      const { customerId, productId, amount } = item;

      const data = await this.models.cart_product.findOne({
        where: { customerId: customerId, productId: productId },
      });

      if (!data) {
        throw new Error(
          `Cart product with customerId: ${customerId} and productId: ${productId} not found`
        );
      }

      await data.increment("amount", { by: amount || 1 });

      return { data: data };
    } catch (error) {
      if (error instanceof ValidationError) {
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

  async decrementProduct(item) {
    try {
      const { customerId, productId, amount } = item;

      const data = await this.models.cart_product.findOne({
        where: { customerId: customerId, productId: productId },
      });

      console.log(data.amount, amount);
      if (!data) {
        throw new Error(
          `Cart product with customerId: ${customerId} and productId: ${productId} not found`
        );
      }

      if (data.amount <= amount || 1) {
        await data.destroy();
        return {
          data: "Product quantity reduced successfully. As the quantity reached zero, the product has been removed.",
        };
      } else {
        await data.decrement("amount", { by: amount || 1 });
      }

      return { data: data };
    } catch (error) {
      if (error instanceof ValidationError) {
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
