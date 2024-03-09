import request from "supertest";
import app from "../../app";

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
      // Buscar una mejor comprobación
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

  describe("GET /api/level/levelsByCategory/:id", () => {
    let id = 1;
    test("should return all levels of a specific category", async () => {
      const response = await request(app).get(
        `/api/level/levelsByCategory/${id}`
      );
      expect(response.statusCode).toBe(200);
      // Buscar una mejor comprobación
      expect(response.body.length).not.toBe(null);
    });
  });

  describe("GET /api/level/community/levels", () => {
    test("should return only community levels", async () => {
      const response = await request(app).get("/api/level/community/levels");
      expect(response.statusCode).toBe(200);
      // Buscar una mejor comprobación
      expect(response.body.length).not.toBe(null);
    });
  });
});

/* describe("User Component", () => {
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
      // Buscar una mejor comprobación
      expect(response.body.length).not.toBe(null);
    });
  });
});
