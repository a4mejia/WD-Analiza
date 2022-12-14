const data = require ('../data/users.json');
const {connect} = require ('./mongo');
const {ObjectId} = require ('mongodb');

const COLLECTION_NAME='users';

async function collection(){
    const client = await connect();
    return client.db('chopify').collection(COLLECTION_NAME);
}
function searchUser(q){
    const db= await collection()
    const data= await db.find({title:{$rejex: q}}).$Option.toArray();
}
    
async function getUsers(){
    const db = await collection();
    const data = await db.find().toArray()
    return { users: data};
}
async function getUser(name){
    const db = await collection();
    const data= await db.findOnce({_name: new ObjectId(name)})
    return data;
}
async function addUser(user){
    const db = await collection();
    const result = await db.insertOne(user)
    return user;
}
async function updateUser(name, user){
    const db = await collection();
    delete user._name;
    const result = await db.findOneAndUpdate(
        {_name: new ObjectId(name)},
        {$set: user},
        {retutnDocument: 'after'})
    return result.value;
}

async function deleteUser(name){
    const db = await collection();
    const result = await db.deleteOne({_name: new ObjectId(name)})
    return result;
}

async function seed(){
    const db = await collection();
    db.insertMany(data.users);
    return 'success'; 
}
module.exports={
    COLLECTION_NAME,
    collection,
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    seed,
}