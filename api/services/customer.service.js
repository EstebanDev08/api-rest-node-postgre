import { CrudService } from "./crud.service.js";
import { CUSTOMERS } from "../database/routes.types.js";
import { CUSTOMER_USER_ASSOCIACTION } from "../database/association/custumer.association.js";

class CustomerService extends CrudService {
  constructor() {
    super();

    this.type = CUSTOMERS;
    this.association = [CUSTOMER_USER_ASSOCIACTION];
  }
}

export { CustomerService };
