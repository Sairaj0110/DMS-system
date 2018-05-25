const router = require("express").Router();
const Database = require("../database/database");
const UserBusinessLogic = require("./UserBusinessLogic");

const { Validator, ValidationError } = require('express-json-validator-middleware');//require the module
const validator = new Validator({allErrors: true});//initialize validator intance
const validate = validator.validate;//making it short

const userData = {//JSON schema
type:'object',
required:['name','email','password'],
properties:{
	name:{
		type:'string',
		maxlength:30
	},
	email:{
		type:'string',
		maxlength:30
	},
	password:{
		type:'string',
		maxlength:30
	}
}
}

class UserRouterHandler{
	static handle(){////http method for restfull services(get, post, put, delete) 

		router.post('/signup', validate({body:userData}),async(req,res)=>{//async anonymous arrow function
			try{
				let result = await UserBusinessLogic.create();
				res.status(200).send({"message"}:result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.post('/userFileUploads',async(req,res)=>{//async anonymous arrow function
			try{
				if(!req.files)
					return res.status(400).send("No files were uploaded");
				let sampleFile = req.files.file;
				sampleFile.mv(`./upload/${sampleFile.name}`, function(err){
					if(err)
						return res.status(500).send(err);
				});
				res.status(200).send("FIle Uploaded");
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.get('/read',async(req,res)=>{//async anonymous arrow function
			try{
				let result = await UserBusinessLogic.read(req.body);
				res.status(200).send(result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.get('/singleUser/:id',async(req,res)=>{//async anonymous arrow function
			try{
				let result = await UserBusinessLogic.readOne(req.params.id);//req.params.id because we used :id
				res.status(200).send(result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.get('/activateAccount',async(req,res)=>{//async anonymous arrow function
			try{
				await UserBusinessLogic.activateUser(req.query.id);//req.query.id because we used :id
				res.status(200).send(result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.put('/singleUpdate',async(req,res)=>{//async anonymous arrow function
			try{
				let result = await UserBusinessLogic.update(req.body);
				res.status(200).send(result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		router.delete('/singleDelete/:id',async(req,res)=>{//async anonymous arrow function
			try{
				let deleteRow = await UserBusinessLogic.delete(req.query.id);
				res.status(200).send(result);
			}catch(e){
				res.status(500).send(e);
			}
		})

		return router;
	}
}

module.exports = UserRouterHandler;