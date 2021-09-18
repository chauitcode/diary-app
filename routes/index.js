var express = require('express');
var router = express.Router();
const Diary = require('../models/diary.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  // truy vấn db lấy ra tất cả các id của bài viết
  const data = Diary.diaryGetListID();
  
  // sau khi có được mảng id các bài viết, ta sẽ lấy chi tiết từng bài viết một theo từng id 
  // và lưu vào mảng result
  const result = data.map((id) => {
    return Diary.diaryGetDetail(id)
  });

  // render  và truyền mảng result sang file index.ejs
  res.render('index', {result: result});
});

module.exports = router;
