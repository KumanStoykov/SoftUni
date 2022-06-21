const env = process.env.NODE_ENV || 'development';

const config = {

    development: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/tutorials',
        COOKIE_TOKEN_NAME: 'session',
        SALT_ROUND: 9,
        SECRET: 'PIFJSI7087608LKSNC86568BSVKHCVBKSH'       
    },
    production: {
        PORT: '',
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
        COOKIE_TOKEN_NAME: 'session',
        SALT_ROUND: 9,
        SECRET: 'PIFJSI7087608LKSNC86568BSVKHCVBKSH'       
    }
}


module.exports = config[env];