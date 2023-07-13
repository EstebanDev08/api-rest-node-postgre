import { ORDERS } from "../database/routes.types.js";
import { CrudService } from "./crud.service.js";

class OrdersService extends CrudService {
  constructor() {
    super();
    this.type = ORDERS;
  }
}

export { OrdersService };
