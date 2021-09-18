const Diary = require('../models/diary.model');

/*Get và post tạo bài viết nhật ký mới*/
exports.getDiaryCreate = (req, res, next) => {
    res.render('./diary/diaryAdd');
}

exports.postDiaryCreate = (req, res, next) => {
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;
    //insert vào db
    Diary.diaryAdd(data.title, data.content);
    res.redirect('/');
}

// xem chi tiết bài nhật ký
exports.getDiaryDetail = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu bài viết theo id
    const data = Diary.diaryGetDetail(ID);
    res.render('./diary/diaryDetail', {data: data});
}

/*Get và post cập nhật bài viết nhật ký*/
exports.getDiaryUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu bài viết theo id
    const data = Diary.diaryGetDetail(ID);
    res.render('./diary/diaryUpdate', {data: data});
}

exports.postDiaryUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;

    //update lại db dữ liệu đã nhận theo id bài viết
    Diary.diaryUpdate(ID, data.title, data.content);
    res.redirect('/');
}

/*Get và post xóa bài viết nhật ký*/
exports.getDiaryDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    ////truy vấn db để dữ liệu bài viết theo id
    const data = Diary.diaryGetDetail(ID);
    res.render('./diary/diaryDelete', {data: data});
}

exports.postDiaryDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //delete bài viết khỏi db theo id bài viết
    Diary.diaryDelete(ID);
    res.redirect('/');
}

