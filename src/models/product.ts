import { INTEGER, STRING } from 'sequelize';
import sequelize from 'src/database/database.config';

const Product = sequelize.define('Products', {
    id: {
        type: INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: STRING,
        allowNull: true,
    },
    amount: {
        type: INTEGER,
        allowNull: true,
    },
    category: {
        type: STRING,
    },
});

Product.sync();

export default Product;
