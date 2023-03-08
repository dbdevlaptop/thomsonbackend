const mongoose = require("mongoose");
const conn = require("../config/db");
var jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Schema for category table
const categorySchema = new Schema({
    name: String,
    slug: String,
}, {
    timestamps: true
}); 

// for create table in mongodb table db
let category = conn.model('category',categorySchema)

// Schema for Product table
const prodductSchema = new Schema({
    name: String,
    slug: String,
    model: String,
    category: String,
    smalldisp: String,
}, {
    timestamps: true
}); 

// for create table in mongodb table db
let product = conn.model('product',prodductSchema)



module.exports = {category, product};