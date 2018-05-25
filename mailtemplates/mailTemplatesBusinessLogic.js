
const database = require("../database/database");
const MailTemplatesImpl = require("./mailTemplatesImpl")

class MailTemplatesBusinessLogic{

	static async getMailTemplate(templateName){
		try{
          let result = await MailTemplatesImpl.getMailTemplate(templateName);
          return result    
        }catch(e){
            throw e
        } 
	}
}

module.exports = MailTemplatesBusinessLogic