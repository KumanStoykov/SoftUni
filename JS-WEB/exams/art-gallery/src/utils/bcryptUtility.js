const bcrypt = require('bcrypt');

const hashingPassword = async (password) => {
    let hash = bcrypt.hash(password, 9);

    return hash;

};

module.exports = hashingPassword;
