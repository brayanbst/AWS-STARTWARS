const AWS = require('aws-sdk');

const getPlanets = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        console.log('queryString' ,event.queryStringParameters);
        let page = event.queryStringParameters && event.queryStringParameters.page;
        let pageSize = 10;
        let exclusiveStartKey;
        let currentPage = 1;
        let response;
        page = !page ? 1 : page;
        while (currentPage++ <= page) {
            response = await dynamodb.query({
                    TableName: 'GeneralTable',
                    KeyConditionExpression: '#pk = :pk',
                    ExpressionAttributeNames: {
                        '#pk': 'pk',
                    },
                    ExpressionAttributeValues: {
                        ':pk': '#PLANETS', 
                    },
                    ExclusiveStartKey: exclusiveStartKey,
                    Limit: pageSize,
                }).promise();
            exclusiveStartKey = response.LastEvaluatedKey;
        }
   
        const resultados = response.Items;
        return {
            contar: resultados.length,
            proximo: `https://6rcu7i68kb.execute-api.us-west-2.amazonaws.com/planets?page=${Number(page) + 1}`,
            anterior: page <= 1 ? null : `https://6rcu7i68kb.execute-api.us-west-2.amazonaws.com/planets?page=${Number(page) - 1}`,
            resultados,
        }
    } catch (error){
        console.log(error);
    }
}

module.exports = {
    getPlanets
}

