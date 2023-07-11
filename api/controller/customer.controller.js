import { CustomerService } from "../services/cusomer.service.js";

const service = new CustomerService();

class CustomerController {
  static getAllCustomers = async (req, res) => {
    const Customers = await service.find();
    res.status(200).json(Customers);
  };

  static getCustomer = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await service.findOne(id);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({
        message: `${error}`,
      });
    }
  };

  static createCustomer = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.create(body);
    //status nos permite devolver un code de status

    if (!!data) {
      res.status(201).json({
        message: "creaded new Customer",
        data: data,
      });
    } else {
      console.log(error);
      res.status(404).json({
        message: "dont create Customer",
        error: error,
      });
    }
  };

  static deleteCustomer = async (req, res) => {
    const { id } = req.params;

    const { isDelete, error } = await service.delete(id);
    if (isDelete === true) {
      res.status(204).json({});
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };

  static editCustomer = async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { data, error } = await service.update(id, body);

    if (data) {
      res.json({
        message: "update Customer",
        data: data,
      });
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { CustomerController };
