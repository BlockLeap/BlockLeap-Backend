require("dotenv").config();

process.env.DB_SCHEMA = "testing";

const sequelize = require("../../database/configuration");

const LevelDAO = require("../../js/daos/levelDAO");

describe("Test de integración: Obtener nivel por id", () => {
  const levelDAO = new LevelDAO(sequelize);

  beforeAll(() => {
    levelDAO.createLevel({
      user: 1,
      category: 1,
      self: 1,
      title: "El secreto de Pascual",
      data: "",
    });
  });

  afterAll(() => {
    levelDAO.deleteLevel(1);
    sequelize.drop();
  });

  test("Búsqueda por id de nivel existente", () => {
    const id = 1;
    levelDAO.getLevel(id).then((result) => {
      expect(result[0].id).toEqual(1),
        expect(result[0].user).toEqual(1),
        expect(result[0].category).toEqual(1),
        expect(result[0].self).toEqual(1),
        expect(result[0].title).toEqual("El secreto de Pascual"),
        expect(result[0].data).toEqual("");
    });
  });

  test("Búsqueda por id de nivel inexistente", () => {
    const id = 2;
    levelDAO.getLevel(id).then((result) => {
      expect(result).toEqual([]);
    });
  });
});
