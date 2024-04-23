import { getProducts } from "../controllers/productsController";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

describe("getProducts", () => {
  it("deve retornar um array de produtos com status 200", async () => {
    const response = (await getProducts(
      {} as APIGatewayProxyEvent,
      {} as any,
      () => {}
    )) as APIGatewayProxyResult;
    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(Array.isArray(body)).toBe(true);
  });
});
