class LevelDAOStub {
  levels = [];

  constructor() {
    if (typeof LevelDAOStub.instance === "object") return LevelDAOStub.instance;
    LevelDAOStub.instance = this;
  }

  setData(data) {
    this.levels = data;
  }

  async getLevel(id) {
    return this.levels.filter((level) => level.id == id);
  }
}

module.exports = LevelDAOStub;
