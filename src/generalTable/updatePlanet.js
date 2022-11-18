const AWS = require('aws-sdk');

const updatePlanet = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { 
            nombre,
            periodoRotacion,
            periodoOrbital,
            diametro,
            clima,
            gravedad,
            terreno,
            aguaSuperficial,
           poblacion,
            residentes,
            peliculas
        }  = JSON.parse(event.body);

    const response = await dynamodb.update({
        TableName: 'GeneralTable',
        Key: { sk: `#PLANETS#${id}`, pk: '#PLANETS'},
        UpdateExpression: "set nombre = :nombre, periodoRotacion = :periodoRotacion, periodoOrbital = :periodoOrbital, diametro = :diametro, clima = :clima, gravedad = :gravedad, terreno = :terreno, aguaSuperficial = :aguaSuperficial, poblacion = :poblacion, residentes = :residentes, peliculas = :peliculas",
        ExpressionAttributeValues: {
            ':nombre': nombre,
            ':periodoRotacion': periodoRotacion,
            ':periodoOrbital': periodoOrbital,
            ':diametro': diametro,
            ':clima': clima,
            ':gravedad': gravedad,
            ':terreno': terreno,
            ':aguaSuperficial': aguaSuperficial,
            ':poblacion': poblacion,
            ':residentes': residentes,
            ':peliculas': peliculas  
        },
        ReturnValues: 'ALL_NEW'
    }).promise();
    return {
        status: 200,
        response: response.Attributes,
        body: JSON.stringify({
            message: 'Planet update succeslly'
        })
    }
}

module.exports = {
    updatePlanet
}