"use strict";

const categoryRouter = require("express-promise-router")();
const categoryController = require("../controller/categoryController");

const categoryController = new CategoryController();

// Página principal
categoryRouter.get("/start", categoryController.getCategories);

// categoryRouter.get("/categoryById/:id", categoryController.getCategoryById);

module.exports = categoryRouter;
