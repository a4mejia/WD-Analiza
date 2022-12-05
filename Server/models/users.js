const data = require ('../data/users.json');
const {connect} = require ('./mongo');
const {ObjectId} = require ('mongodb');

const COLLECTION_NAME='users';

async function collection(){
    const client = await connect();
    return client.db('chopify').collection(COLLECTION_NAME);
}

