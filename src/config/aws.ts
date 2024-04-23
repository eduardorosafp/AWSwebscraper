const AWS = require("aws-sdk");
// import { DynamoDB } from "aws-sdk";


/**
 * Configuração do AWS SDK com a região padrão especificada pelo ambiente.
 * @type {AWS.Config}
 */
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
});

module.exports = AWS;
