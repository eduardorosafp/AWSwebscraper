const AWS = require("../config/aws");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function saveProductsToDynamoDB(products) {
  const params = {
    TableName: "ProductsTable-Dev2",
    Item: {
      id: "1",
      products: products,
    },
  };
  return dynamoDB.put(params).promise();
}

export { saveProductsToDynamoDB };
