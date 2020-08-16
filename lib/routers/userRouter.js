const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// User Schema 인스턴스 추가
const User = mongoose.model('user', require('../models/user'));

/** 
 * POST /users/
 * 
 * @summary 유저 추가
 * 
 * @param name 사용자 이릅
 * @param age 나이
 * @param email 이메일 주소
 * @param phone 휴대전화 번호
 * 
 * @return user 정보
 */ 
router.route('/')
    .get(async function (req, res) {
        const users = await User.find();
        res.status(200).send(users);
    })
    .post(async function (req, res) {
    
        const {
            name,
            age,
            email,
            phone
        } = req.body;

        const user = await User.create({
            name, age, email, phone    
        });

        res.status(200).send(user);
    });

router.route('/:name/')
    .get(async function(req, res){
        console.log(req);
        const name = req.params.name;
        const user = await User.findOne({name: name});

        res.status(200).send(user);
    })
module.exports = router;