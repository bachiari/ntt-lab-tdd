 const bcrypt = require('bcryptjs');
 
 module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
    },
    {
        hooks: {
            beforeSave: async (user) => {
                if (user.password){
                    user.password_hash = await bcrypt.hash(user.password, 8);
                }
            }
        }
    });

    //aqui usei function e nao arrow function porque eu preciso ter acesso ao this que é o 
    //usuário que eu acabei de buscar no banco
    //e o bcrypt compare compara se aquela senha bate com a senha gerada no banco de dados
    User.prototype.checkPassword = function(password) {
        return bcrypt.compare(password, this.password_hash); 
    }

    return User;
 }