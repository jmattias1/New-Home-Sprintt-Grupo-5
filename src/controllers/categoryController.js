const db = require("../database/models");
const { Op } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require("express-validator");

module.exports = {
  category: (req, res) => {
    db.Category.findByPk(req.params.id, {
      include: [
        {
          association: "products",
          include: ["images"],
        },
      ],
    })
      .then((category) => {
        return res.render("products/category", {
          category,
          toThousand,
          title: category.name,
        });
      })
      .catch((error) => console.log(error));
  },
  furniture: (req, res) => {
    db.Category.findByPk(6, {
      include: [
        {
          association: "products",
          include: ["images"],
          order: [["createdAt", "DESC"]],
        },
      ],
    })
      .then((furniture) => {
        return res.render("category/furniture", {
          furniture,
          toThousand,
          title: "Muebles",
        });
      })
      .catch((error) => console.log(error));
  },
  tv: (req, res) => {
    db.Category.findByPk(1, {
      include: [
        {
          association: "products",
          include: ["images"],
          order: [["createdAt", "DESC"]],
        },
      ],
    })
      .then((tv) => {
        return res.render("category/tv", {
          tv,
          toThousand,
          title: "Televisores",
        });
      })
      .catch((error) => console.log(error));
  },
  smartphone: (req, res) => {
    db.Category.findByPk(4, {
      include: [
        {
          association: "products",
          include: ["images"],
          order: [["createdAt", "DESC"]],
        },
      ],
    })
      .then((smartphone) => {
        return res.render("category/smartphone", {
          smartphone,
          toThousand,
          title: "Smartphone",
        });
      })
      .catch((error) => console.log(error));
  },
  freetime : (req,res) => {
        db.Category.findByPk(8, {
          include: [
            {
              association: "products",
              include: ["images"],
              order: [["createdAt", "DESC"]],
            },
          ],
        })
          .then((freetime) => {
            return res.render("category/freetime", {
              freetime,
              toThousand,
              title: "Tiempo Libre",
            });
          })
          .catch((error) => console.log(error));
  }
};