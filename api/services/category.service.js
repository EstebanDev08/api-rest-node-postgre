import { CATEGORY } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class CategoryService extends CrudService {
  constructor() {
    super();
    this.type = CATEGORY;
    this.association = [];
  }
}

export { CategoryService };
