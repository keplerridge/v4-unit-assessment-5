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
              hash = bcrypt.hashSync(password, salt),
              registeredUser = await db.create_user([username, hash, profilePic]),
              user = registeredUser[0]
        req.session.user = {
            username: user.username,
            id: user.id
        }
        return res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body,
              db = req.app.get('db')
              foundUser = db.find_user_by_username([username]),
              user = foundUser[0];

        if(!user){
            return res.status(401).send('User not found, please create a profile to login');
        };

        const isAuthenticated = bcrypt.compareSync(password, user.hash);

        if(!isAuthenticated){
            return res.status(403).send('Incorrect Password');
        };

        req.session.user = {id: user.id, username: user.username};
        return res.send(req.session.user)
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }

        return res.status(404);
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200);
    }
}