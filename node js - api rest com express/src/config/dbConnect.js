import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brubsbeys:123@cluster0.s5n53.mongodb.net/alura-node?")

let db = mongoose.connection;

export default db;