const async = require('async');
const Database = require("./../database/database");
const ObjectID = require("mongodb").ObjectID;

class MailTemplatesImpl{
	static async getMailTemplate(template){
		const db = new Database();
		const readParams = {
              "collectionName":"mailTemplates",
              "criteria":{"mailSubject" : "USER_SIGN_IN"},
                "projection": { _id: 0, mailTemplates : 1, mailSubject : 0 }
            };
            try {
				let result = await db.readOne(readParams);
           		return result;
       		}catch(e){
           		throw e
      	 	}

	}
}

module.exports = MailTemplatesImpl