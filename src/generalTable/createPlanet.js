const { v4 } = require('uuid');
const AWS = require('aws-sdk');
const createPlanet = async (event) => {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { 
        nombre,
        periodoRotación,
        periodoOrbital,
        diametro,
        clima,
        gravedad,
        terreno,
        aguaSuperficial,
        poblacion,
        residentes,
        peliculas,
        editado,
        url
    
    } = JSON.parse(event.body);
    const id = v4();
    console.log(id);
    const newPlanet = {
        pk: '#PLANETS',
        sk: `#PLANETS#${id}`,
        nombre,
        periodoRotación,
        periodoOrbital,
        diametro,
        clima,
        gravedad,
        terreno,
        aguaSuperficial,
        poblacion,
        residentes: residentes || [],
        peliculas: peliculas || [],
        creado: new Date(),
        editado: null,
        url,
    }
    await dynamodb.put({
        TableName: 'GeneralTable',
        Item: newPlanet
        }).promise()
    return { 
        statusCode: 200,
        body: JSON.stringify({ ...newPlanet }),
        description: "La Informacion del Planeta se Guardo Correctamente"
    }    
}

module.exports = {
    createPlanet,
}