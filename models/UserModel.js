import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const User = db.define(
  'users',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true, //untuk freeze nama table (tidak berujung -s)
  }
);

export default User;

(async () => {
  await db.sync();
})();
