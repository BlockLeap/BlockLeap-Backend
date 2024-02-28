"use strict";

const DAOFactory = require("../js/daos/DAOFactory");

export class playController {
  constructor() {
    const factory = new DAOFactory();
    this.accessDAO = factory.getAccessDAO();
    this.playDAO = factory.getPlayDAO();
  }
}
