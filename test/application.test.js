const request = require("supertest");
const app = require("../app");

process.env.NODE_ENV = "testing";

describe("Category Component", () => {
  describe("GET /api/level/categories", () => {
    test("should return all categories", async () => {
      const response = await request(app).get("/api/level/categories");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(7);
    });
  });
});

describe("Level Component", () => {
  describe("GET /api/level/all", () => {
    test("should return all levels", async () => {
      const response = await request(app).get("/api/level/all");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).not.toBe(null);
    });
  });

  describe("GET /api/level/:id", () => {
    let id = 1;
    test("should return one specific level", async () => {
      const response = await request(app).get(`/api/level/${id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(1);
      expect(response.body.user).toBe(1);
      expect(response.body.category).toBe(1);
      expect(response.body.self).toBe(1);
      expect(response.body.title).toBe("Movimiento");
    });
  });

  /* describe("GET /api/level/create", () => {
    test("should create one level", async () => {
      const response = await request(app).post("/api/level/create").send({
        user: 1,
        category: 1,
        title: "No mires abajo",
        data: "",
      });
      expect(response.statusCode).toBe(200);
      console.log("Nivel creado:", response.body);
      expect(response.body.user).toBe(1);
      expect(response.body.category).toBe(1);
      expect(response.body.title).toBe("No mires abajo");
      expect(response.body.data).toBe("");
    });
  }); */

  describe("GET /api/level/levelsByCategory/:id", () => {
    let id = 1;
    test("should return all levels of a specific category", async () => {
      const response = await request(app).get(
        `/api/level/levelsByCategory/${id}`
      );
      expect(response.statusCode).toBe(200);
      expect(response.body.length).not.toBe(null);
    });
  });

  describe("GET /api/level/community/levels", () => {
    test("should return only community levels", async () => {
      const response = await request(app).get("/api/level/community/levels");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).not.toBe(null);
    });
  });
});

/* describe("User Component", () => {
  describe("GET /api/user/register", () => {
    test("should add one user", async () => {
      const response = await request(app).post(`/api/user/register`).send({
        name: "Prueba",
        password: "1234",
      });
      expect(response.statusCode).toBe(200);
      console.log("Usuarui añadido:", response.body);
      expect(response.body.name).toBe("Prueba");
      expect(response.body.role).toBe("Estudiante");
    });
  });

  describe("GET /api/user/userById/:id", () => {
    let id = 1;
    test("should return one specific user", async () => {
      const response = await request(app).get(`/api/user/userById/${id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(1);
      expect(response.body.name).toBe("Diego");
      expect(response.body.role).toBe("Estudiante");
    });
  });
}); */

describe("Group Component", () => {
  describe("GET /api/group/:groupId", () => {
    let id = 15;
    test("should return one specific group", async () => {
      const response = await request(app).get(`/api/group/${id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(15);
      expect(response.body.name).toBe("Grupo 5");
    });
  });

  describe("GET /api/group/:groupId/members", () => {
    let id = 15;
    test("should all members of a specific group", async () => {
      const response = await request(app).get(`/api/group/${id}/members`);
      expect(response.statusCode).toBe(200);
      expect(response.body.length).not.toBe(null);
    });
  });
});
