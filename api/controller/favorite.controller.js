import { FavoritesService } from "../services/favorites.service.js";

const service = new FavoritesService();

class FavoriteController {
  static getFavorite = async (req, res) => {
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

  static createFavorite = async (req, res) => {
    const body = req.body;

    const { data, error } = await service.addFavorite(body);
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

  static removeFavorite = async (req, res) => {
    const body = req.body;
    console.log(body);
    const { isDelete, error } = await service.removeFavorite(body);
    if (isDelete === true) {
      res.status(204).json({});
    } else {
      res.status(400).json({
        message: `${error}`,
      });
    }
  };
}

export { FavoriteController };
