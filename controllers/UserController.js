import { json } from 'sequelize';
import User from '../models/UserModel.js';

export const getUsers = async (req, res, next) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
    // Buat objek juga bisa manual menggunakan json.stringify > json.parse
    // const a = JSON.stringify([
    //   {
    //     no: 1,
    //     message: 'Aman',
    //     data: 'Mantap',
    //   },
    //   {
    //     no: 2,
    //     message: 'Aman',
    //     data: 'Mantap',
    //   },
    // ]);
    // const b = JSON.parse(a);
    // res.send(a);
    // res.render('user', { user });

    // res.send(b);
    // res.render('user', {
    //   tittle: 'user',
    //   state,
    // });
  } catch (error) {
    res.status(404).json({
      message: error,
      data: [],
    });
  }
  next;
};

// export const getUsers = async (req, res, next) => {
//   try {
//     const response = await User.findAll();

//     res.render('user').json(response);
//     console.log(result);
//   } catch (error) {
//     res.status(404).json({
//       message: error,
//       data: [],
//     });
//   }
// };

export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: 'user created' });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'user updated' });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'user deleted' });
  } catch (error) {
    console.log(error.message);
  }
};
