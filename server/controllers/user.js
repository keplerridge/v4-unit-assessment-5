const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password, profilePic} = req.body,
              db = req.app.get('db'),
              result = await db.find_user_by_username(username);
            
        if(result[0]){
            return res.status(409).send('Username Taken')
        }

        const salt = bcrypt.genSaltSync(10),
              hash = bcrypt.hashSync(password, salt)
              registeredUser = await db.create_user([username, password, profilePic]);
              user = registeredUser[0]
        req.session.user = {
            username: user.username,
            id: user.id
        }
        return res.status(201).send(req.session.user)
    },
    login: (req, res) => {

    },
    getUser: (req, res) => {

    },
    logout: (req, res) => {

    }
}