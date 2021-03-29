import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// import users from "./data/users.js";
import products from './data/products.js';
import User from './models/UserModel.js';
import Product from './models/ProductModel.js';
import Order from './models/OrderModel.js';
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);
    console.log('DATA IMPORTED');
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('DATA DELETED');
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
