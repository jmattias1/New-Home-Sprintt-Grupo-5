const db = require("../../database/models");
const {getUrl} = require("../../helpers/getUrl");
const { sendJsonError } = require("../../helpers/sendJsonError");

module.exports = {
  all: async (req, res) => {
    try {
      let products = await db.Product.findAll({
        include: [{ association: "images" }, { association: "category" }],
      });
      return res.status(200).json({
        ok : true,
        status: 200,
        total : products.length,
        url : getUrl(req),
        data : products

      });
    } catch (error) { sendJsonError(error,res)
    }
  },
  store: async (req, res) => {
    try {
      const { name, price, discount, description, categoryId,subcategoryId } = req.body;

      const product = await db.Product.create({
        name: name?.trim(),
        description: description?.trim(),
        price: +price,
        discount: +discount,
        categoryId: +categoryId,
        subcategoryId: +subcategoryId,
      });
      let images = [{ productId: product.id }];

      if (req.files?.length) {
        images = req.files.map((file) => {
          return {
            productId: product.id,
            file: file.filename,
          };
        });
      }

      await db.Image.bulkCreate(images, { validate: true });

      await product.reload({
        include: [
          {
            association: "images",
            attributes: {
              exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
          },
          {
            association: "category",
            attributes: {
              exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
          },
        ],
      });

      return res.status(201).json({
        ok: true,
        status: 201,
        data: product,
        url : getUrl(req)
      });
    } catch (error) {
      sendJsonError(error, res);
    }
  },
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};