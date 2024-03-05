import request from "supertest";
import app from "../../app";

describe("Category Component", () => {
  let category;

  describe("GET /api/level/categories", () => {
    test("should return all categories", async () => {
      const response = await request(app).get("/api/level/categories");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(7);
    });
  });
});
