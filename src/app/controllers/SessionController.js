const { User } = require('../models')
class SessionController{
    async store(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(401).json({ error: 'User not found' });
        }
        //se a senha estiver errada entra aqui
        if(!(await user.checkPassword(password))){
            return res.status(401).json({ error: 'Password incorrect' });
        }

        return res.json({ user }); 
    }
}

module.exports = new SessionController();