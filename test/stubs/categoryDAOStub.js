class CategoryDAOStub {
  categories = [];

  constructor() {
    if (typeof CategoryDAOStub.instance === "object")
      return CategoryDAOStub.instance;

    CategoryDAOStub.instance = this;
  }

  setDAOData(data) {
    this.categories = data;
  }

  async getCategories() {
    return this.categories;
  }
}

module.exports = CategoryDAOStub;
