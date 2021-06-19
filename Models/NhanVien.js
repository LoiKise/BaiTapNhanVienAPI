function NhanVien() {
  (this.maNhanVien = ""),
    (this.tenNhanVien = ""),
    (this.chucVu = ""),
    (this.luongCoBan = ""),
    (this.soGioLamTrongThang = ""),
    (this.heSoChucVu = ""),

    (this.tongluong = function () {
      return this.luongCoBan * this.heSoChucVu
    });

  this.xeploai = function () {
    var ketqua = "";
    if (this.soGioLamTrongThang > 120) {
      ketqua = "Nhân viên suất xắc";
    } else if (
      this.soGioLamTrongThang <= 120 && this.soGioLamTrongThang > 100
    ) {
      ketqua = "Nhân viên giỏi";
    } else if (this.soGioLamTrongThang <= 100 && this.soGioLamTrongThang > 80) {
      ketqua = "Nhân viên khá";
    } else if (this.soGioLamTrongThang <= 80 && this.soGioLamTrongThang > 50) {
      ketqua = "Nhân viên Trung bình";
    } else {
      ketqua = "kém";
    }
    return ketqua;
  };
}
