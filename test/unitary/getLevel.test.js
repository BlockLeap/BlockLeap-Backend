const Request = require("../stubs/requestStub");
const Response = require("../stubs/responseStub");

const LevelController = require("../../controller/levelController");

const DAOFactory = require("../../js/daos/DAOFactory");

process.env.NODE_ENV = "testing";

const levels = [
  {
    id: 1,
    user: 1,
    category: 1,
    self: 1,
    title: "El secreto de Pascual",
    data: "",
  },
  {
    id: 2,
    user: 1,
    category: 1,
    self: 2,
    title: "Vigila por donde pisas",
    data: "",
  },
];

describe("Test unitario: Obtener nivel por id", () => {
  new DAOFactory().getLevelDAO().setData(levels);

  const levelController = new LevelController();

  test("Búsqueda por id de nivel existente", async () => {
    const request = new Request();
    const response = new Response();

    request.params.id = 1;

    await levelController.getLevel(request, response);

    const result = response.json.mock.calls[0][0];

    expect(result).toContain(levels[0]);
  });

  test("Búsqueda por id de nivel inexistente", async () => {
    const request = new Request();
    const response = new Response();

    request.params.id = 3;

    await levelController.getLevel(request, response);

    const result = response.json.mock.calls[0];

    expect(result).toContainEqual([]);
  });
});
