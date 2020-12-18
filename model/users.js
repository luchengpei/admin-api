/*
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2020-12-17 09:54:22
 */
const mongoose = require('./db.js')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: Number,
    sex: {
        type: Number,
        default:0
    },
    province: String,
    city: String,
    area: String,
    address:String,
    phone:Number,
})

module.exports = mongoose.model('Users',UserSchema,'users')