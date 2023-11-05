"use strict";

const categoryRouter = require("express-promise-router")();
const CategoryController = require("../controller/categoryController");

const categoryController = new CategoryController();

// Página principal
categoryRouter.get("/all", categoryController.getCategories);

// categoryRouter.get("/categoryById/:id", categoryController.getCategoryById);

module.exports = categoryRouter;
