import { ValidationError } from "sequelize";
import { FAVORITES } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class FavoritesService extends CrudService {
  constructor() {
    super();
    this.type = FAVORITES;
    this.association = ["products"];
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id), {
        include: [
          {
            association: this.association[0],
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

  async addFavorite(item) {
    try {
      const data = await this.models.favorite_product.create(item);

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

  async removeFavorite(item) {
    console.log(item);

    try {
      const data = await this.models.favorite_product.findOne({ where: item });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }

      data.destroy();

      return { isDelete: true };
    } catch (error) {
      return { error: error };
    }
  }
}

export { FavoritesService };
