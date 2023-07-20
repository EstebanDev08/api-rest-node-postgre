import { CartService } from "../services/cart.service.js";

const service = new CartService();

class CartController {
  static getCart = async (req, res) => {
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

  static addProduct = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.addProduct(body);
    //status nos permite devolver un code de status
    if (!!data) {
      res.status(201).json({
        message: "creaded new Favorite",
      });
    } else {
      res.status(404).json({
        message: "dont create Favorite",
        error: error,
      });
    }
  };

  static deleteProductToCart = async (req, res) => {
    const body = req.body;
    const { isDelete, error } = await service.deleteProductToCart(body);
    if (isDelete === true) {
      res.status(204).json({});
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };

  static deleteAllProductsToCart = async (req, res) => {
    const { id } = req.params;
    const { isDelete, error } = await service.deleteAllProductsToCart(id);
    if (isDelete === true) {
      res.status(204).json({});
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };

  static incrementProduct = async (req, res) => {
    const body = req.body;

    console.log(typeof "hola" === "string");

    const { data, error } = await service.incrementProduct(body);
    //status nos permite devolver un code de status
    if (!!data) {
      res.status(200).json({
        message: `increment product`,
        data: data,
      });
    } else {
      res.status(400).json({
        message: "dont increment product",
        error: error,
      });
    }
  };

  static decrementProduct = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.decrementProduct(body);

    if (!!data) {
      res.status(200).json({
        message: `decrement product`,
        data: data,
      });
    } else if (typeof data === "string") {
      res.status(200).json({
        message: data,
      });
    } else {
      res.status(400).json({
        message: "dont decrement product",
        error: error,
      });
    }
  };
}

export { CartController };
