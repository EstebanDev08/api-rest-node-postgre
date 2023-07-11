import { CrudService } from "./crud.service.js";
import { CUSTOMERS } from "../database/routes.types.js";

class CustomerService extends CrudService {
  constructor() {
    super();

    this.type = CUSTOMERS;
  }
}

export { CustomerService };
