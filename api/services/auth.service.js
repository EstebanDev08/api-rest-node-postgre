import { sequelizeConection } from "../libs/sequelize.js";

class authService {
  constructor() {
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
  }

  async findByEmail(email) {
    try {
      const data = await this.models.users.findOne({
        where: { email },
      });

      if (!data) {
        throw new Error(`${this.type} not found`);
      }
      return { data: data };
    } catch (error) {
      return { error: error };
    }
  }
}

export { authService };
