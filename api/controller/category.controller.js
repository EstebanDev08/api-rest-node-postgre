import { CategoryService } from "../services/category.service.js";

const service = new CategoryService();

class CategoryController {
  static getAllCategorys = async (req, res) => {
    const query = req.query;

    const categorys = await service.find(query);
    res.status(200).json(categorys);
  };

  static getCategory = async (req, res) => {
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

  static createCategory = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.create(body);
    //status nos permite devolver un code de status

    if (!!data) {
      res.status(201).json({
        message: "creaded new Category",
        data: data,
      });
    } else {
      res.status(404).json({
        message: "dont create Category",
        error: error,
      });
    }
  };

  static deleteCategory = async (req, res) => {
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

  static editCategory = async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { data, error } = await service.update(id, body);

    if (data) {
      res.json({
        message: "update Category",
        data: data,
      });
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { CategoryController };
