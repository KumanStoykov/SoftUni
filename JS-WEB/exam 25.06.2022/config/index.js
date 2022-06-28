const env = process.env.NODE_EVN || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost/crypto',
        TOKEN_NAME: 'session',
        SECRET: 'e544d103cdcfe64969ee2ad5dd08172916f1163098385bb314e962b917b9e1dea8bf34d66039b0db1f0e25c6c89d3d9e266df97ee17639bceaa7465af08c6919',
        SALT_ROUND: 9
    },
    production: {}
}

module.exports =  config[env]