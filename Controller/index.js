var arrNhanVien = [];
var kiemtra = new Validation();
// document.querySelector("#btnHienThiThongTin").onclick = function () {
//   // lấy thông tin nhân viên
//   var nhanvien = new NhanVien();
//   nhanvien.maNhanVien = document.querySelector("#maNhanVien").value;
//   nhanvien.tenNhanVien = document.querySelector("#tenNhanVien").value;
//   // nhanvien.chucvu = document.querySelector('#chucVu').value;
//   nhanvien.luongCoBan = document.querySelector("#luongCoBan").value;
//   nhanvien.hesochucvu = document.querySelector("#chucVu").value;
//   nhanvien.soGioLamTrongThang =
//     document.querySelector("#gioiLamTheoThang").value;
//   nhanvien.xeploai();

//   // hiển thị thông tin giao diện
//   var slChucVu = document.querySelector("#chucVu");
//   var vitriOption = slChucVu.selectedIndex;
//   nhanvien.chucvu = slChucVu[vitriOption].innerHTML;

//   console.log(nhanvien);

// };

function renderTableNhanVien(arrSV) {
  //input
  //Từ mảng arrSV tạo ra 1 chuỗi html <tr> <td></td></tr>
  //arrSV = [{maSinhVien:'',....},{maSinhVien:'',....},{maSinhVien:'',....}]
  var content = "";
  for (var index = 0; index < arrSV.length; index++) {
    //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
    var nv = arrSV[index];
    var nhanvien = new NhanVien();
    nhanvien.maNhanVien = nv.maNhanVien;
    nhanvien.tenNhanVien = nv.tenNhanVien;
    nhanvien.chucVu = nv.chucVu;
    nhanvien.soGioLamTrongThang = nv.soGioLamTrongThang;
    nhanvien.heSoChucVu = nv.heSoChucVu;
    nhanvien.luongCoBan = nv.luongCoBan;
    console.log("nnn", nhanvien);
    var trNhanVien = `
                <tr>
                    <td>${nhanvien.maNhanVien}</td>
                    <td>${nhanvien.tenNhanVien}</td>
                    <td>${nhanvien.chucVu}</td>
                    <td>${nhanvien.luongCoBan}</td>
                    <td>${nhanvien.tongluong().toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</td>
                    <td>${nhanvien.soGioLamTrongThang}</td>
                    <td>${nhanvien.xeploai()}</td>
                    <td><button onclick="xoaSinhVien('${nhanvien.maNhanVien
      }')" class="btn btn-danger">Xoá</button>
                    <button onclick="chinhSua('${nhanvien.maNhanVien
      }')" class="ml-2 btn btn-success">Chỉnh sửa</button>
                    
                    </td>
                </tr>
        `;
    content += trNhanVien;
  }
  //Dom đến tbody trên giao diện để gán innerHTML vào
  document.querySelector("#tblNhanVien").innerHTML = content;

  // console.log('content',content);
}
