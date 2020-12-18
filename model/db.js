/*
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2020-12-17 09:48:26
 */

const mongoose = require('mongoose')
 
mongoose.connect('mongodb://127.0.0.1:27017/lcp', { useNewUrlParser: true,useUnifiedTopology:true }, err => {
    if (err) {
        console.log(err)
        return false
    }
})

module.exports = mongoose