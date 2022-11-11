const db = require("../../database/models");
const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");
const { sendJsonError } = require("../../helpers/sendJsonError");


module.exports = {
  register: async (req, res) => {
    const { name, surname, email, password, street, city, province } = req.body;

    try {
      const { id, rolId } = await db.User.create({
        name: name?.trim(),
        surname: surname?.trim(),
        email: email?.trim(),
        password: password?.trim(),
        street: street?.trim(),
        city: city?.trim(),
        province: province?.trim(),
        avatar: req.file?.filename,
        rolId: 2,
      });
      await db.Address.create({
        street: name?.trim(),
        city: city?.trim(),
        province: province?.trim(),
        userId: id,
      });

      /*       const token = sign({ id, rolId }, process.env.SECRET_KEY_JWT, {
        expiresIn: "4h",
      }); */

      return res.status(201).json({
        ok: true,
        status: 201,
        /*         token, */
      });
    } catch (error) {
      sendJsonError(error, res);
    }
  },
  login: async (req, res) => {},
  edit: async (req, res) => {},
  update: async (req, res) => {},
  remove: async (req, res) => {
    try {
      const userId = req.params.id || req.userToken.id;
      const removeAddress = await db.Address.destroy({
        where: { userId } /* ,force:true */,
      }); /* == userId : userId */
      const removeUser = await db.User.destroy({
        where: { id: userId } /* ,force:true */,
      });

      if (!removeUser || !removeAddress) {
        return res.status(404).json({
          ok: false,
          status: 404,
          msg: "Es probable que el usuario no existe",
        });
      }

      return res.status(200).json({
        ok: true,
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message || "Server error",
      });
    }
  },
};
