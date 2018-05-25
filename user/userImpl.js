const Database = require("../database/database");
const ObjectID = require("MongoDB").ObjectID;

class UserImpl{

	static async create(createObject){
		const db = new Database();
		const createParams = {"collectionName":"signTable"};
		createParams.payload = createObject;
		try{
			let result = await db.create(createParams)
		}catch(e){
			throw e;
		}

	}

		static async read(){
		const db = new Database();
		const readParams = {
			"collectionName":"signTable",
			"criteria":{}
			};
		
		try{
			let result = await db.read(readParams)
		}catch(e){
			throw e;
		}

	}

		static async readOne(id){
		const db = new Database();
		const readParams = {
			"collectionName":"signTable",
			"criteria":{"_id":id}
			};
		
		try{
			let result = await db.readOne(readParams)
		}catch(e){
			throw e;
		}

	}


		static async update(updateObject){
		const db = new Database();
		const updateParams = {
			"collectionName":"signTable",
			"criteria":{"_id":"updateObject._id"},
			"payload":{
				"name":updateObject.name,
				"email":updateObject.email,
				"password":updateObject.password
			}
			};
		try{
			let result = await db.update(updateParams)
		}catch(e){
			throw e;
		}

	}

		static async delete(id){
		const db = new Database();
		const readParams = {
			"collectionName":"signTable",
			"criteria":{"_id":"id"}
			};
		try{
			let result = await db.delete(deleteParams);
		}catch(e){
			throw e;
		}

	}

		static async activateUserId(id){
		const db = new Database();
		const updateParams = {
			"collectionName":"signTable",
			"criteria":{"_id":id},
			"payload":{
				"isActive":"Y"}
			};
		try{
			let result = await db.update(updateParams)
		}catch(e){
			throw e;
		}

	}



}
module.exports = UserImpl;