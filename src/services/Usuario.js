const modelUsuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


var message = '';

module.exports = class Usuario{

    async find(body){
        const usuario = await modelUsuario.find(body)
        return usuario;
    }

    async gerarToken(body){
        const email = body.email;
        const senha = body.senha;

        if(!email || !senha){return {error:'Dados inválidos'}};

        const usuario = await modelUsuario.findOne({email:email, senha:senha});

        if(!usuario){return {error: "dados Inválidos"};}

        const token = jwt.sign({ sub: usuario._id }, 'billsopad');
        return token

    }

    async login(body){
      const email = body.email
      const senha = body.senha

      if(!email){return "O E-mail é Obrigatório";}
      if(!senha){return "A Senha é Obrigatória";}
  
      const usuario = await modelUsuario.findOne({ email: email })
  
      if (!usuario) {return "Não há usuário cadastrado com este e-mail!";}
  
      const checkPassword = await bcrypt.compare(senha, usuario.senha);
  
      if (!checkPassword) {return 'Senha inválida';}
      
      try { await usuario;
        return usuario;
                    
      } catch (error) {
        return error;
      }
}

    async cadastroUsuario(body){
        const {nome, email, senha, confirmaSenha} = body;
      
        const existirUsuario = await modelUsuario.findOne({email: email});   
        if(existirUsuario){return "Por favor, digite outro e-mail";}
        if(!nome){ return "O Nome é obrigatório";}
        if(!email){ return "O E-mail é Obrigatório";}
        if(!senha){ return "A Senha é Obrigatória";}
        if(senha !== confirmaSenha){return "A senha e a confirmação de senha precisam ser iguais";}
      
        const salt = await bcrypt.genSalt(12);
        const senhaCriptografada = await bcrypt.hash(senha, salt);
                  
        const novoUsuario = new modelUsuario({
          nome:nome,
          email:email,
          senha:senhaCriptografada,
        });
      
        try {
          await novoUsuario.save();
          return novoUsuario;            
        } catch (error) {
          return error;
        }
    }
       
    async create(body){
        const usuario = await modelUsuario.create(body);
        return usuario;
    }

    async deleteOne(id){
        const usuario = await modelUsuario.deleteOne({_id:id});
        return usuario;
    }

    async updateOne(userId, updateUser){
        const usuario = await modelUsuario.updateOne({_id:userId}, {$set:updateUser})
        return usuario
    }

    async findOne(id){
        const usuario = await modelUsuario.find({_id:id}).populate('item');
        return usuario;
    }
}