const emailPropsJSON = require("./emailPropsJSON");
const email = require("emailjs/email")

class SendMail{

	static SendMail(emailAttributes){
		const server = email.server.connect({
			  user:     emailPropsJSON["user"], 
                 password:emailPropsJSON["password"], 
                 host:    emailPropsJSON["host"], 
                 ssl:     emailPropsJSON["ssl"],
                 port : emailPropsJSON["port"]
             });
			 server.send({ 
                 from:    emailPropsJSON["user"], 
                 to:      emailAttributes.to,
                 subject: emailAttributes.subject,
                 attachment: 
                       [
                          {data:`<html>${emailAttributes.mailContent}</html>`, alternative:true}
                       ]
              }, function(err, message) {
                if (err) {
                    throw err;
                }
              })

	}
}
module.exports = SendEmail