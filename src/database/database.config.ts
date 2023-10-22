import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db', 'Raoni111', '2004321', {
    host: 'localhost',
    port: 8080,
    dialect: 'mysql',
});

try {
    sequelize.authenticate().then(() => {
        console.log('banco de dados conectado com sucesso');
    });
} catch {
    console.log('não foi possível conectar com o banco de dados');
}

export default sequelize;
