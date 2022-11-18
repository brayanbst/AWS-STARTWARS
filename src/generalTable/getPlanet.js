const AWS = require('aws-sdk');

const getPlanet = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters

    const result = await dynamodb.get({
        TableName: 'GeneralTable',
        Key: { sk: `#PLANETS#${id}`, pk: '#PLANETS'}
    }).promise();
    const resultados = result.Item;
    return {
        status: 200,
        body: resultados,
    }

}

module.exports = {
    getPlanet,
}