const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

// User Schema 인스턴스 추가
const User = mongoose.model('user', require('../models/user'));

router.route('/')
  .get(async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
  })
  .post(async (req, res) => {
    const {
      userId,
      password,
      name,
      age,
      email,
      phone,
    } = req.body;

    const user = await User.create({
      userId, password, name, age, email, phone,
    });

    res.status(200).send(user);
  });

/**
 * @swagger
 * path:
 *    /users/:
 *      get:
 *          tags:
 *          - Default
 *          description: 사용자의 데이터를 추출합니다.
 *          produces:
 *          - application/json
 *          parameters:
 *              - name: name
 *                in: path
 *                required: true
 *                description: 호출하고자하는 사용자의 이름
 *                schema:
 *                  type: String
 *          security:
 *              - api_key: []
 *          responses:
 *              200:
 *                  description: success
 *                  schema:
 *                      type: array
 *              400:
 *                  description: Bad Request
 *                  schema:
 *                      type: String
 *              401:
 *                  description: unAuthorized JWT, Check your input api_key
 *                  schema:
 *                      type: String
 *              404:
 *                  description: Not found
 *                  schema:
 *                      type: String
 *
 */
router.route('/:name/')
  .get(async (req, res) => {
    console.log(req);
    const { name } = req.params;
    const user = await User.findOne({ name });

    res.status(200).send(user);
  });
module.exports = router;
