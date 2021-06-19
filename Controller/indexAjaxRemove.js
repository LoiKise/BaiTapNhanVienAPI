function LayDanhSachSinhVienAPI() {
    var promise = axios({
        url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien", //lấy danh sách sinh viên từ đường dẩn sever(back-end cung cấp)
        method: "GET", //giao thức back-end cung cấp
        responseType: "json",
    });
    promise.then(function (result) {
        console.log("result", result.data);
        // sao khi lấy dử liệu xong sẻ lấy dử liệu ra dom
        renderTableNhanVien(result.data);
    });

    //xử lý thất bại

    promise.catch(function (error) {
        console.log("lỗi", error);
    });
}
LayDanhSachSinhVienAPI();

function xoaSinhVien(maNhanVien) {
    console.log("ma Ssinh viên", maNhanVien);

    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
        method: "delete",
    });

    promise.then(function (result) {
        console.log("resuel", result.data);
        LayDanhSachSinhVienAPI();
    });

    promise.catch(function (error) {
        console.log("error", error.response.data);
    });
}