import { ProductsService } from "../services/products.service.js";

const service = new ProductsService();

class ProductController {
  static getAllProducts = async (req, res) => {
    const products = await service.find();
    res.status(200).json(products);
  };

  static getProduct = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await service.findOne(parseInt(id));

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
    console.log(!!data, error);
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

  static editProduct = (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const [isUpdate, updateProduct] = service.update(id, body);

    if (isUpdate === true) {
      res.json({
        message: "update product",
        data: updateProduct,
      });
    } else {
      res.status(400).json({
        message: `${isUpdate}`,
      });
    }
  };

  static deleteProduct = (req, res) => {
    const { id } = req.params;

    const isDeleted = service.delete(id);

    if (isDeleted === true) {
      res.status(204).json({});
    } else {
      res.status(400).json({
        message: `${isDeleted}`,
      });
    }
  };
}

export { ProductController };
