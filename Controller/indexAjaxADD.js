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
document.getElementById("btnCapNhatThongTin").disabled = true;
// thêm 1 phần tử vào danh sách vào API

document.querySelector("#btnHienThiThongTin").onclick = function () {
  // lấy thông tin nhân viên
  var nhanVien = new NhanVien();
  nhanVien.maNhanVien = document.querySelector("#maNhanVien").value;
  nhanVien.tenNhanVien = document.querySelector("#tenNhanVien").value;
  // nhanvien.chucvu = document.querySelector('#chucVu').value;
  nhanVien.luongCoBan = document.querySelector("#luongCoBan").value;
  nhanVien.heSoChucVu = document.querySelector("#chucVu").value;
  nhanVien.soGioLamTrongThang = document.querySelector("#gioiLamTheoThang").value;
  nhanVien.xeploai();


  // hiển thị thông tin giao diện
  var slChucVu = document.querySelector("#chucVu");
  var vitriOption = slChucVu.selectedIndex;
  nhanVien.chucVu = slChucVu[vitriOption].innerHTML;

  console.log("Nhân viên", nhanVien);
  var valid = true;
  valid &=
    kiemTra.kiemTraRong(
      nhanVien.maNhanVien,
      "#error_required_maNhanVien",
      "Mã nhân viên ")
    &
    kiemTra.kiemTraRong(
      nhanVien.tenNhanVien,
      "#error_required_tenNhanVien",
      "Tên nhân viên "
    )
  kiemTra.kiemTraRong(
    nhanVien.luongCoBan,
    "#error_required_luongCoBan",
    "Lương cơ bản"
  ) &
    kiemTra.kiemTraRong(
      nhanVien.soGioLamTrongThang,
      "#error_required_gioiLamTheoThang",
      "Giời làm theo tháng"
    );
  valid &= kiemTra.kiemTraKiTu(
    nhanVien.tenNhanVien,
    "#error_allLetter_tenSinhVien",
    "Tên nhân viên "
  );
  valid &= kiemTra.kiemTraDoDaiMa(
    nhanVien.maNhanVien,
    "#error_leght_maNhanVien",
    "Mã nhân viên"
  );
  valid &= kiemTra.kiemTraTienLuong(
    nhanVien.luongCoBan,
    "#error_luong_luongCoBan",
    "Lương cơ bản phải "
  );
  valid &= kiemTra.kiemTraGioiLam(
    nhanVien.soGioLamTrongThang,
    "#error_gioiLam_gioiLamTheoThang",
    "giời làm phải"
  );
  if (!valid) {
    return;
  } else {
    clear();
    var promise = axios({
      url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
      method: "post",
      data: nhanVien,
    });
    promise.then(function (result) {
      LayDanhSachSinhVienAPI();
      alert("thêm thành công")
    });
    promise.catch(function (error) {
      console.log(error);
    });
  };
}