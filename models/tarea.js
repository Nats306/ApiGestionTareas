'use strict'
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Tarea extends Model {}

    Tarea.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'Tarea',
        tableName: 'tareas',
        timestamps: false
    });

    return Tarea;
}