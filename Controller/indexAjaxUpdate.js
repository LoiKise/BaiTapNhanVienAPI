var kiemTra = new Validation();
function clear() {
  document.getElementById('maNhanVien').value = '';
  document.getElementById('tenNhanVien').value = '';
  document.getElementById('luongCoBan').value = '';
  document.getElementById('gioiLamTheoThang').value = '';
  document.getElementById('chucVu').value = 1;
}
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

function chinhSua(maNhanVien) {
  var promise = axios({
    url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
    method: "get",
  });
  promise.then(function (result) {
    var nhanVien = result.data;

    document.querySelector("#maNhanVien").value = nhanVien.maNhanVien;
    document.querySelector("#tenNhanVien").value = nhanVien.tenNhanVien;
    document.querySelector("#luongCoBan").value = nhanVien.luongCoBan;
    document.querySelector("#chucVu").value = nhanVien.hesochucvu;
    document.querySelector("#gioiLamTheoThang").value = nhanVien.soGioLamTrongThang;
    //đưa giá trị vào control input phía trên
  });
  promise.catch(function (error) {
    console.log("error", error.response.data);
  });
  document.getElementById("btnHienThiThongTin").disabled = true;
  document.getElementById("btnCapNhatThongTin").disabled = false;
}

document.querySelector("#btnCapNhatThongTin").onclick = function () {
  var nhanVienUpdate = new NhanVien();

  nhanVienUpdate.maNhanVien = document.querySelector("#maNhanVien").value;
  nhanVienUpdate.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nhanVienUpdate.luongCoBan = document.querySelector("#luongCoBan").value;
  nhanVienUpdate.heSoChucVu = document.querySelector("#chucVu").value;
  nhanVienUpdate.soGioLamTrongThang = document.querySelector("#gioiLamTheoThang").value;


  // hiển thị thông tin giao diện
  var slChucVu = document.querySelector("#chucVu");
  var vitriOption = slChucVu.selectedIndex;
  nhanVienUpdate.chucVu = slChucVu[vitriOption].innerHTML;

  console.log("Nhân viên", nhanVienUpdate);
  var valid = true;
  valid &=
    kiemTra.kiemTraRong(
      nhanVienUpdate.maNhanVien,
      "#error_required_maNhanVien",
      "Mã nhân viên "
    ) &
    kiemTra.kiemTraRong(
      nhanVienUpdate.tenNhanVien,
      "#error_required_tenNhanVien",
      "Tên nhân viên "
    ) &
    kiemTra.kiemTraRong(
      nhanVienUpdate.luongCoBan,
      "#error_required_luongCoBan",
      "Lương cơ bản"
    ) &
    kiemTra.kiemTraRong(
      nhanVienUpdate.soGioLamTrongThang,
      "#error_required_gioiLamTheoThang",
      "Giời làm theo tháng"
    );
  valid &= kiemTra.kiemTraKiTu(
    nhanVienUpdate.tenNhanVien,
    "#error_allLetter_tenSinhVien",
    "Tên nhân viên "
  );
  valid &= kiemTra.kiemTraTienLuong(
    nhanVienUpdate.luongCoBan,
    "#error_luong_luongCoBan",
    "Lương cơ bản phải "
  );
  valid &= kiemTra.kiemTraGioiLam(
    nhanVienUpdate.soGioLamTrongThang,
    "#error_gioiLam_gioiLamTheoThang",
    "giời làm phải"
  );
  clear();
  document.getElementById("btnCapNhatThongTin").disabled = true;
  document.getElementById("btnHienThiThongTin").disabled = false;
  if (!valid) {
    return;
  }
  var promise = axios({
    url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVienUpdate.maNhanVien}`,
    method: "put",
    data: nhanVienUpdate,
  });
  promise.then(function (result) {
    console.log("result", result.data);
    //sau khi cập nhập thành công lấy dữ liệu mới về
    LayDanhSachSinhVienAPI();
  });
  promise.catch(function (error) {
    console.log("error", error.response.data);
  });
};
