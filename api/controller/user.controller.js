import { UsersService } from "../services/users.service.js";

const service = new UsersService();

class UserController {
  static getAllUsers = async (req, res) => {
    const Users = await service.find();
    res.status(200).json(Users);
  };

  static getUser = async (req, res) => {
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

  static createUser = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.create(body);
    //status nos permite devolver un code de status

    if (!!data) {
      res.status(201).json({
        message: "creaded new User",
        data: data,
      });
    } else {
      res.status(404).json({
        message: `${error.path}: ${error.type} `,
      });
    }
  };

  static deleteUser = async (req, res) => {
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

  static editUser = async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { data, error } = await service.update(id, body);

    if (data) {
      res.json({
        message: "update user",
        data: data,
      });
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { UserController };
