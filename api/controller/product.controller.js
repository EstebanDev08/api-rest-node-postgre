import { ProductsService } from "../services/products.service.js";

const service = new ProductsService();

class ProductController {
  static getAllProducts = async (req, res) => {
    const products = await service.find();
    res.status(200).json(products);
  };

  static getProduct = async (req, res) => {
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

  static createProduct = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.create(body);
    //status nos permite devolver un code de status

    if (!!data) {
      res.status(201).json({
        message: "creaded new product",
        data: data,
      });
    } else {
      res.status(404).json({
        message: `${error.path}: ${error.type} `,
      });
    }
  };

  static deleteProduct = async (req, res) => {
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

  static editProduct = async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { data, error } = await service.update(id, body);

    if (data) {
      res.json({
        message: "update product",
        data: data,
      });
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { ProductController };
