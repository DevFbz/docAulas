const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  email: { type: String, required: true },

  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
this.body = body;
this.errors = []
this.user = null
}

async register(){
  this.valida();
  if(this.errors.length > 0 )return;


  try{
    const salt = bcryptjs.genSaltSync
    this.body.password = bcryptjs.hashSync(this.body.password, salt)
    this.user = await LoginModel.create(this.body)
  }catch(e){
    console.log(e)
  }
}


valida(){
  this.cleanUp()
}
}

module.exports = Login;
