1. Buat db_baru di database
2. Hubungkan db_baru melalui file db.js di folder config, package ORM yang saya gunakan adalah sequelize
3. Buat table ke db_baru, nama table samakan dengan yang difolder UserModel
4. Buat beberapa data baru kedalam table
5. jalankan 'node index' di terminal
6. buka http client, seperti postman atau ekstensi thunder client
7. lakukan request ke http://127.0.0.1:5000/users , sesuaikan ROUTE dan METHOD dengan yang disediakan di folder UserRoute

package :

- express
- sequelize
- ejs
- nodemon
