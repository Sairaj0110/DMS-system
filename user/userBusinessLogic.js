const async = require('async');
const Database = require("../database/database");
const UserImpl = require("./UserImpl");
const MailTemplatesBusinessLogic = require("../mailtemplates/mailTemplatesBusinessLogic");
const SendEmail = require("../utils/email/sendemail");
const appConstants =  require("../appConstants.json")
const uuidv1 = require('uuid/v1');//universally unique identifier

class UserBusinessLogic{

	static async create(userObject){
		try{
			let message = "";
			let userObject._id = uuidv1();
			let userObject.isActive = "N";
			let result = await UserImpl.create(userObject);
			if(result.insertedCount == 1){
				const signInTemplate = await MailTemplatesBusinessLogic.getMailTemplate("USER_SIGN_IN");
				signInTemplate.mailtemplates = signInTemplate.mailtemplates.relpace("{IP}",appConstants.IP);
				signInTemplate.mailtemplates = signInTemplate.mailtemplates.relpace("{PORT}",appConstants.PORT);
				signInTemplate.mailtemplates = signInTemplate.mailtemplates.relpace("{UNIQUE_ID}",userObject._id);
				signInTemplate.mailtemplates = signInTemplate.mailtemplates.relpace("{USERNAME}",userObject.name);

				const emailAttributes{
					mailContent:signInTemplate.mailtemplates,
					to:userObject.username,
					subject:"SignIn"
				}
			}else{
				message = "Signup was unsuccessful, please contact tech support."
			}
			return message;
		}catch(e){
			throw e;
		}
	}

	static async read(){
		try{
			let result = await UserImpl.read();
		}catch(e){
			throw e;
		}
	}

		static async readOne(id){
		try{
			let result = await UserImpl.read(id);
		}catch(e){
			throw e;
		}
	}

		static async update(updateObject){//**cannot take ID need to take Object_id***********
		try{
			let result = await UserImpl.update(updateObject);
		}catch(e){
			throw e;
		}
	}

		static async delete(id){
		try{
			let result = await UserImpl.delete(id);
		}catch(e){
			throw e;
		}
	}

		static async activateUser(id){
		try{
			let result = await UserImpl.update(id);
		}catch(e){
			throw e;
		}

}
}

module.exports = UserBusinessLogic;