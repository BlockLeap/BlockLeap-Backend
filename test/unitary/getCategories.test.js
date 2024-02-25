const Request = require("../stubs/requestStub");
const Response = require("../stubs/responseStub");

const DAOFactory = require("../../js/daos/DAOFactory");

process.env.NODE = "testing";

const categories = [
  {
    id: 2,
    nombre: "Joker",
    duracion: 122,
    puntuacion: 10,
    fechaEstreno: "2019-06-18T22:00:00.000Z",
    sinopsis:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    genero: "Drama",
    nombreAct: "Joaquin",
    apellidosAct: "Phoenix",
  },
  {
    id: 2,
    nombre: "Joker",
    duracion: 122,
    puntuacion: 10,
    fechaEstreno: "2019-06-18T22:00:00.000Z",
    sinopsis:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    genero: "Drama",
    nombreAct: "Robert",
    apellidosAct: "De Niro",
  },
];

let salida = {
  pelicula: {
    id: 2,
    nombre: "Joker",
    duracion: 122,
    fechaEstreno: "2019-06-18T22:00:00.000Z",
    sinopsis:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    genero: "Drama",
  },
  actoresV: [
    { nombreAct: "Joaquin", apellidosAct: "Phoenix" },
    { nombreAct: "Robert", apellidosAct: "De Niro" },
    { nombreAct: "Zazie", apellidosAct: "Beetz" },
  ],
};

describe("Test de mostrar datos básicos", () => {
  const factoria = new DAOFactory();

  // Inicializamos los DAO de mentira con la información
  factoria.getCategoryDAO().setDAOData(categories);

  const levelController = new LevelController();

  test("Obtención de categorias", async () => {
    const request = new Request();
    const response = new Response();

    expect(response.render).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything()
    );
    const objetoCapturado = res.render.mock.calls[0][1];

    expect(objetoCapturado).toEqual(
      expect.objectContaining({
        actoresV: salida.actoresV,
        pelicula: expect.objectContaining(salida.pelicula),
      })
    );
  });
});
