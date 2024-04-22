import { DynamoDB } from "aws-sdk";

const dynamoDB = new DynamoDB.DocumentClient();

async function saveProductsToDynamoDB(products) {
  const params = {
    TableName: "ProductsTable",
    Item: {
      id: "1",
      products: products,
    },
  };
  return dynamoDB.put(params).promise();
}

export { saveProductsToDynamoDB };
