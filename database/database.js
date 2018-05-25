const MongoClient = require('mongodb').MongoClient;//MongoClient is class of Mongo. Here we are creating instance of MongoClient
const dbProperties = require('./dbProperties.json');

class Databse{//CRUD operations

constructor(){

this.create = async function (createParams) {
	try{
		const connection = await crudHandler();
		const rowsaffected = await createHandler(connection, createParams);
		return rowsaffected;

	}catch( e)
		throw e;
} 

this.read = async function (readParams) {
	try{
		const connection = await crudHandler();
		const documents = await readHandler(connection, readParams);
		return documents;

	}catch( e)
		throw e;
} 

this.update = async function (updateParams) {
	try{
		const connection = await crudHandler();
		const updatedrows = await updateHandler(connection, updateParams);
		return updatedrows;

	}catch( e)
		throw e;
} 

this.delete = async function (deleteParams) {
	try{
		const connection = await crudHandler();
		const deletedrows = await deleteHandler(connection, deleteParams);
		return deletedrows;

	}catch( e)
		throw e;
} 

}//contructor

async function crudHandler()
{
try{
 const connection = await MongoClient.connect(dbUrl);
 return connection; 
}catch(e)
throw e;
}

async function createHandler(connection, createParams){
	try{
		const db = connection.db(dbProperties.dbName);
		const collection = db.collection(createParams.collectionName);
		const rowsaffected = await collection.insert({"name":"Sairaj"});
		connection.close();
		return rowsaffected;

	}catch(e){
		throw e
	}
}

async function readHandler(connection, readParams){
	try{
		const db = connection.db(dbProperties.dbName);
		const collection = db.collection(readParams.collectionName);
		const documents = await collection.find(readParams.criteria).project(readParams.projection).toArray();
		connection.close();
		return documents;

	}catch(e){
		throw e;
	}
}

async function updateHandler(connection, updateParams){
	try{
		const db = connection.db(dbProperties.dbName);
		const collection = db.collection(readParams.collectionName);
		const updatedrows = await collection.update(updateParams.criteria,{$set:{"name":"obhi"}};
		connection.close();
		return updatedrows;

	}catch(e){
		throw e;
	}
}

async function deleteHandler(connection, deleteParams){
	try{
		const db = connection.db(dbProperties.dbName);
		const collection = db.collection(deleteParams.collectionName);
		const deletedrows = await collection.delete(readParams.criteria);
		connection.close();
		return deletedrows;

	}catch(e){
		throw e;
	}
}


create();
//read();
//update();
//delete();

}//class

module.exports=Databse;