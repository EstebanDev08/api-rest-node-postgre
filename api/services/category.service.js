import { CATEGORY_PRODUCT_ASSOCIACTION } from "../database/association/category.association.js";
import { CATEGORY } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class CategoryService extends CrudService {
  constructor() {
    super();
    this.type = CATEGORY;
    this.association = [CATEGORY_PRODUCT_ASSOCIACTION];
  }

  async find() {
    try {
      const data = await this.models[this.type].findAll({
        include: [
          {
            model: this.models.products,
            as: CATEGORY_PRODUCT_ASSOCIACTION,
            attributes: ["id"],
          },
        ],
      });

      if (data.length === 0) {
        return { message: "no data" };
      }

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { CategoryService };
