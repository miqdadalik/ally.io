import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the SQLite database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the SQLite database:', error);
    }
};

export { sequelize, initializeDatabase };