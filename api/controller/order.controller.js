import { OrdersService } from "../services/orders.service.js";

const service = new OrdersService();

class OrderController {
  static getAllOrders = async (req, res) => {
    const query = req.query;

    const orders = await service.find(query);
    res.status(200).json(orders);
  };

  static getOrder = async (req, res) => {
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

  static createOrder = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.create(body);
    //status nos permite devolver un code de status

    if (!!data) {
      res.status(201).json({
        message: "creaded new Order",
      });
    } else {
      res.status(404).json({
        message: "dont create Order",
        error: error,
      });
    }
  };

  static deleteOrder = async (req, res) => {
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

  static editOrder = async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { data, error } = await service.update(id, body);

    if (data) {
      res.json({
        message: "update Order",
        data: data,
      });
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { OrderController };
