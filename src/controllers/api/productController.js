const db = require("../../database/models");

module.exports = {
  all: async (req, res) => {
    try {
      let products = await db.Product.findAll({
        include: [{ association: "images" }, { association: "category" }],
      });
      let response = {
        ok: true,
        meta: {
          status: 200,
          total: products.length,
        },
        url: getUrl(req),
        data: products,
      };
      return res.status(200).json(response);
    } catch (error) {
      let response = {
        ok: false,
        meta: {
          status: 500,
        },
        url: getUrl(req),
        msg: error.messaje ? error.messaje : "comuniquese con el administrador",
      };
      return res.status(500).json(response);
    }
  },
  update: async (req, res) => {},
  store: async (req, res) => {},
  destroy: async (req, res) => {},
};