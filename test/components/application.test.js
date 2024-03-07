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
