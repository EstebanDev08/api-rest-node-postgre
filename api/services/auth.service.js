import { config } from "../config/config.js";
import { sequelizeConection } from "../libs/sequelize.js";
import * as nodemailer from "nodemailer";
import boom from "boom";
import jwt from "jsonwebtoken";
import { UsersService } from "./users.service.js";
import { encryptData } from "../utils/encryp_data.js";

const userService = new UsersService();

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

  async sendEmail(email) {
    const data = await this.models.users.findOne({
      where: { email },
    });

    if (!data) {
      throw boom.unauthorized("user not found");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPass,
      },
    });

    const payload = { sub: data.id };

    const token = jwt.sign(payload, config.keyJwt, { expiresIn: "15min" });
    const link = `http://frontEnd.com/recovery?token=${token}`;

    await userService.update(data.id, { recoveryToken: token });

    await transporter.sendMail({
      from: config.smtpEmail,
      to: email,
      subject: "Recovery Password - MiniStore",
      html: `<b> Ingresa al siguiente link para recuperar tu password: ${link}  </b>`,
    });

    return { message: "mail sended" };
  }

  async changePassword(token, newPassword) {
    try {
      console.log(token, newPassword);
      const payload = jwt.verify(token, config.keyJwt);

      const data = await userService.findOne(payload.sub);

      if (data.recoveryToken !== token) {
        throw boom.unauthorized("token");
      }

      const hashPassword = await encryptData(newPassword);

      await userService.update(data.id, {
        recoveryToken: null,
        password: hashPassword,
      });

      console.log(data);
      return { message: "password changed correctly" };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

export { authService };
