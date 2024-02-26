require("dotenv").config();

const LevelDAO = require("../../js/daos/levelDAO");

process.env.DB_SCHEMA = "testing";

const sequelize = require("../../database/configuration");

describe("Test de integración: Obtener nivel por id", () => {
  const levelDAO = new LevelDAO(sequelize);
  level = sequelize.models.level;

  beforeAll(async () => {
    await level.create({
      user: 1,
      category: 1,
      self: 1,
      title: "El secreto de Pascual",
      data: "",
    });
  });

  afterAll(async () => {
    await level.destroy({
      where: {
        id: 1,
      },
    });
  });

  test("Búsqueda por id de nivel existente", async () => {
    const id = 1;
    await levelDAO.getLevel(id).then((result) => {
      expect(result[0].id).toEqual(1),
        expect(result[0].user).toEqual(1),
        expect(result[0].category).toEqual(1),
        expect(result[0].self).toEqual(1),
        expect(result[0].title).toEqual("El secreto de Pascual"),
        expect(result[0].data).toEqual("");
    });
  });
  test("Búsqueda por id de nivel inexistente", async () => {
    const id = 2;
    await levelDAO.getLevel(id).then((result) => {
      expect(result).toEqual([]);
    });
  });
});
