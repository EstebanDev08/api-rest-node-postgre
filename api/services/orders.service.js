import { ValidationError } from "sequelize";
import { CUSTOMER_USER_ASSOCIACTION } from "../database/association/custumer.association.js";
import { ORDER_CUSTOMER_ASSOCIACTION } from "../database/association/order.association.js";
import { ORDERS } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

import { Op } from "sequelize";

class OrdersService extends CrudService {
  constructor() {
    super();
    this.type = ORDERS;
    this.association = [ORDER_CUSTOMER_ASSOCIACTION];
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id), {
        include: [
          {
            association: "products",
            attributes: { exclude: ["updatedAt", "createdAt"] },
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

  async create(item) {
    try {
      const { customerId, products } = item;

      const productIds = products.map((product) => product.productId);

      const productPrices = await this.models.products.findAll({
        attributes: ["id", "price"],
        where: {
          id: {
            [Op.in]: productIds,
          },
        },
      });

      const priceMap = productPrices.reduce((map, product) => {
        map[product.id] = product.price;
        return map;
      }, {});

      let total = 0;

      for (const { productId, amount } of products) {
        const price = priceMap[productId];
        total += price * amount;
      }

      const order = await this.models[this.type].create({ customerId, total });

      for (const { productId, amount } of products) {
        await this.models.order_product.create({
          orderId: order.id,
          productId,
          amount,
        });
      }

      console.log(total);

      return { data: order };
    } catch (error) {
      console.log(error);
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

export { OrdersService };
