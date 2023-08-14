import { config } from "../config/config.js";
import { sequelizeConection } from "../libs/sequelize.js";
import * as nodemailer from "nodemailer";
import boom from "boom";

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

    await transporter.sendMail({
      from: config.smtpEmail,
      to: email,
      subject: "mensaje desde app ",
      text: "holla mensaje desde app",
      html: "<b> mensaje desde app</b>",
    });

    return { message: "mail sended" };
  }
}

export { authService };
