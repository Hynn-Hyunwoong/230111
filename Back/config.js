require('dotenv').config();

const config = {
    env : process.env.NODE_ENV || 'develop',
    port : process.env.PORT || "3005",
    db : {
        developement : {
            host : process.env.DB_HOST || "1",
            port : process.env.DB_PORT || "2",
            username : process.env.DB_USER || "3",
            userpassword : process.env.DB_PASSWORD || "4",
            database : process.env.DB_DATABASE || "5",
            Dialect : 1123
        }

    }
}

module.exports = config;

console.log(config)