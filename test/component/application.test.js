import request from "supertest";
import app from "../../app";

describe("Category Component", () => {
  let category;

  describe("GET /level/categories", () => {
    it("should return all categories", async () => {
      const response = await request(app).get("/level/categories");
      console.log(response);
      expect(response.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
    });
  });
});
