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

  describe("GET /api/level/all", () => {
    test("should return all levels", async () => {
      const response = await request(app).get("/api/level/all");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).not.toBe(null);
    });
  });
});
