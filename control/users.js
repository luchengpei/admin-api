/*
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2020-12-17 10:02:12
 */

const Users = require('../model/users')
const express = require('express');

const router = express.Router();


//添加用户
router.post('/add/user', (req, res) => {
    const { name, age, sex, province, city, area, phone ,address} = req.body
    const userData = new Users({
        name,
        age,
        sex,
        province,
        city,
        area,
        phone,
        address
    })

    userData.save((err, doc) => {
        if (err) throw new Error(err)
        res.json({
            code: 200,
            data:{},
            msg:'添加成功'
        })
    })
})

//查询
router.get('/user/list', (req, res) => {
    const find = (params) => {
        Users.find(params, (err, doc) => {
            if (err) throw new Error(err)
             res.json({
                code: 200,
                data: doc,
                msg:'查询成功'
            })
        })
    }
    const { id } = req.query
    if (id) return find({ _id: id });//查询单条
    find({})//查询全部
    
})

//删除
router.delete('/delete/user', (req, res) => {
    const { id } = req.query
    const remove = (params) => {
        Users.remove(params, (err, doc) => {
            if (err) throw new Error(err)
             res.json({
                code: 200,
                data: {},
                msg:'删除成功'
            })
        })
    }
    if (id) return remove({ _id: id })//单条删除
    remove({})//删除全部
})


//修改 
router.post('/update/user', (req, res) => {
    const { name, age, sex, province, city, area, phone, address, id } = req.body

    try {
        Object.keys(req.body).forEach(item => {
            if (!req.body[item]) {
                throw new Error(`${item}必填`)
             }
        })
    } catch (error) {
        return res.json({
            code: 400,
            data: {},
            msg:error.message
         })  
    }

    Users.update({ _id: id }, { $set: { name, age, sex, province, city, area, phone, address } }, (err, doc) => {
        if (err) throw new Error(err)
        res.json({
            code: 200,
            data: doc,
            msg:'更新成功'
        })
    })
})
module.exports = router
