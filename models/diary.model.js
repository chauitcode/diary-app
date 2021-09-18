/*
    SCHEMA belike:
    structure:
    {
        id: [Primary key] Number (Auto increase),
        title: String,
        content: String
    }

    //Example instance:
    diary = [
        {
            id: 1,
            title: diaryTitle1,
            content: diaryContent1,
        },
        {
            id: 2,
            title: diaryTitle2,
            content: diaryContent2,
        },
        ...
    ]

*/

// Khởi tạo mảng diary - lưu các instance diary
var diary = [];
// Tạo biến đếm ids - hỗ trợ việc auto increase primary key (id)
var ids = 1;

// thêm mới bài nhất ký
function diaryAdd(title, content) {
    id = ids;
    diary[id] = {id: ids, title: title, content: content};
    ids ++;
}

// cập nhật bài nhật ký
function diaryUpdate(id, title, content) {
    diary[id] = {id: id, title: title, content: content}
}

// xóa bài nhật ký
function diaryDelete(id) {
    delete diary[id];
}

// lấy danh sách các id trong mảng bài nhật ký
function diaryGetListID() {
    return Object.keys(diary);
}

// lấy chi tiết bài nhật ký bằng id
function diaryGetDetail(id) {
    return diary[id];
}

module.exports = {
    diaryAdd,
    diaryUpdate,
    diaryDelete,
    diaryGetListID,
    diaryGetDetail
}