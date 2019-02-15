var express = require('express');
var router = express.Router();

/* 笔记部分 */
/* GET hello page. */
// router.get('/hello', function(req, res, next) {
//   res.render('hello', { title: 'Hello' });
// });

// /* 路径匹配模式 */
// router.all('/user/:username', function(req, res, next) {
//     console.log('all methods captured');
//     next();
// });
// router.get('/user/:username', function(req, res, next) {
//     res.send('user: ' + req.params.username);
// });

// // 片断视图
// router.get('/list', function(reg, res) {
//     res.render('list', {
//         title: "List",
//         items: [2019, 'Node.js', 'WebApp', 'Express']
//     });
// });


/* 项目部分 */

// 首页--------------------------------------------------------------------
router.get('/', function(req, res) {
    res.render('index', {
        title: 'NodeJS Blog',
        message: '这是一个基于 Node.js 开发的博客系统。'
    });
});
router.get('/u/:user', function(req, res) {});
router.post('/post', function(req, res) {});

// 注册页-------------------------------------------------------------------
router.get('/reg', function(req, res) {
    res.render('reg', {
        title: '用户注册'
    });
});
// 注册响应
router.post('/reg', function(req, res) {
    //检验用户两次输入的口令是否一致
    if (req.body['password_repeat'] != req.body['password']) {
        req.flash('error', '两次输入的口令不一致');
        return res.redirect('/reg');
    };
    var crypto = require('crypto')
    //生成口令的散列值
    var md5 = crypto.createHash('md5');
    // var password = md5.update(req.body.password).digest('base64');
    // var password = md5.update(data).digest('base64');
    // console.log(req.body.password);
    var name;
    var password;
    var User = require('../models/user.js');
    var newUser = new User({
        name: req.body.username,
        password: req.body.password
    });
    //检查用户名是否已经存在
    User.get(newUser.name, function(err, user) {
        if (user)
            err = '用户名已存在！';
        if (err) {
            req.flash('error', err);
            return res.redirect('/reg');
        }
        //如果不存在则新增用户
        newUser.save(function(err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/reg');
            }
            req.session.user = newUser;
            req.flash('success', '注册成功');
            res.redirect('/');
        });
    });
});


// 登录页-------------------------------------------------------------------
router.get('/login', function(req, res) {
    res.render('login', {
        title: '用户登录'
    });
});
router.post('/login', function(req, res) {

});
router.get('/logout', function(req, res) {});


module.exports = router;