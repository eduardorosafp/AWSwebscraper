import { APIGatewayProxyHandler } from "aws-lambda";
import { scrapeAmazonBestSellers } from "../services/scraperService";
import { saveProductsToDynamoDB } from "../services/databaseService";

const getProducts: APIGatewayProxyHandler = async () => {
  try {
    // Chama o servico de scraping.
    const products = await scrapeAmazonBestSellers();

    // Salva no Dynamo.
    await saveProductsToDynamoDB(products);

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

export { getProducts };
