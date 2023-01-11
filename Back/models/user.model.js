const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define(
        'User', 
        {
            userid: {
                type : DataTypes.STRING(30),
                allowNull:false,
                unique : true,
            },
            userpw : {
                type:DataTypes.STRING(64),
                allowNull : false,
            },
            username : {
                type : DataTypes.STRING(30),
                allowNull : false,
            },
            gender : {
                type:DataTypes.STRING(4),
                defaultValue : "여자",
            },
        },
        {
            // freezeTableName : true,
            // create , update disable code
            // TableName Settings
            // tableName : 'TableName'
            // utf8 encoding : 'utf8 // mb4 : including emoji
            cahset:'utf8mb4',
            callae: "utf8mb4_general_ci",
            timestamps : false,
        },
    )
}