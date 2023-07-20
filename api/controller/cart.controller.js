import { CartService } from "../services/cart.service.js";
import { FavoritesService } from "../services/favorites.service.js";

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

    const { data, error } = await service.incrementProduct(body);
    //status nos permite devolver un code de status
    if (!!data) {
      res.status(201).json({
        message: `increment one product`,
        data: data,
      });
    } else {
      res.status(404).json({
        message: "dont create Favorite",
        error: error,
      });
    }
  };
}

export { CartController };
