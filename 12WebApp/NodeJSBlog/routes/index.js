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

router.get('/', function(req, res) {
    res.render('index', {
        title: 'NodeJS Blog',
        message:'这是一个基于 Node.js 开发的博客系统。'
    });
});
router.get('/u/:user', function(req, res) {});
router.post('/post', function(req, res) {});
router.get('/reg', function(req, res) {});
router.post('/reg', function(req, res) {});
router.get('/login', function(req, res) {});
router.post('/login', function(req, res) {});
router.get('/logout', function(req, res) {});


module.exports = router;
