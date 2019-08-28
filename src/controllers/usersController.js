const fs = require('fs');
const writeUserData = require('../helpers/writeUserData');

const usersList = JSON.parse(fs.readFileSync(`__dirname/../src/db/users/all-users.json`));

exports.checkId = (req, res, next, val) => {
    if (!usersList.find(el => el.id * 1 === val * 1)) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.addUser = (req, res) => {
    const user = req.body;
    const file = `__dirname/../src/db/users/all-users.json`;
    writeUserData(file, user, res);
};

exports.getUser = (req, res) => {
    const user = usersList.filter(user => user.id * 1 === req.params.id * 1);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
};
