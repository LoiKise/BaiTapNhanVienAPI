function Validation() {
	//Chứa các phương thức kiểm tra hợp lệ
	this.kiemTraRong = function (value, selectorError, name) {
		//Xử lý không hợp lệ
		if (value.trim() === "") {
			document.querySelector(selectorError).innerHTML =
				name + " không được bỏ trống !";
			return false;
		}
		//Xử lý hợp lệ
		document.querySelector(selectorError).innerHTML = "";
		return true;
	};
	// this.kiemTraKyTu = function (value, SelectorError, name)
	// {
	//     var regexAllLetter = /^[A-Za-z]+$/;
	//     if (regexAllLetter.test(value))
	//     {
	//         document.querySelector(SelectorError).innerHTML = "";
	//         return true;
	//     }
	//     document.querySelector(SelectorError).innerHTML =
	//         name + " tất cả phải có kí tự!";
	//     return false;
	// };
	this.kiemTraKiTu = function (value, SelectorError, name) {
		var regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
		if (regexAllLetter.test(value)) {
			document.querySelector(SelectorError).innerHTML = "";
			return true;
		}
		document.querySelector(SelectorError).innerHTML = name + " phải là chữ";
		return false;
    };
    this.kiemTraDoDaiMa = function (value, SelectorError, name)
    {
        if (value.length >= 4 && value.length <= 6)
        {
            document.querySelector(SelectorError).innerHTML = "";
            return true;
        }
        document.querySelector(SelectorError).innerHTML = name + "tối đa 4 - 6 ký số"
        return false;
    }
	this.kiemTraTienLuong = function (value, SelectorError, name) {
		if (Number(value) > 1000000 && Number(value) < 2000000) {
			document.querySelector(SelectorError).innerHTML = "";
			return true;
		}
		document.querySelector(SelectorError).innerHTML =
			name + " phải tối thiểu 1 triệu tối đa 2 triệu";
		return false;
	};
	this.kiemTraGioiLam = function (value, SelectorError, name) {
		if (Number(value) > 50 && Number(value) < 150) {
			document.querySelector(SelectorError).innerHTML = "";
			return true;
		}
		document.querySelector(SelectorError).innerHTML =
			name + " phải hơn 50 tiếng và tối đa 150 tiếng";
		return false;
	};
	this.kiemTraChucVu = function (value, SelectorError, name) {
		if (value == null) {
			document.querySelector(SelectorError).innerHTML =
				name + " không tìm thấy";
			return false;
		}
		document.querySelector(SelectorError).innerHTML = "";
		return true;
	};
	// this.kiemTraSo = function (value, SelectorError, name)
	// {
	//     var regexNumber = /^[0-9 +]+$/;

	//     if (regexNumber.test(value))
	//     {
	//         document.querySelector(SelectorError).innerHTML = "";
	//         return true;
	//     }
	//     document.querySelector(SelectorError).innerHTML =
	//         name + " phải là số và không được có chữ";
	//     return false;
	// };
	// this.kiemTraEmail = function (value, SelectorError, name)
	// {
	//     var regexEmail =
	//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//     if (regexEmail.test(value))
	//     {
	//         document.querySelector(SelectorError).innerHTML = "";
	//         return true;
	//     }
	//     document.querySelector(SelectorError).innerHTML = name + " Email!";
	//     return false;
	// };
	// this.kiemTraDoDai = function (value, SelectorError, minLenth, maxLenth, name)
	// {
	//     //nếu chuổi nhập vào vượt quá max hoặc min xuất lỗi
	//     if (value.length > maxLenth || value.length < minLenth)
	//     {
	//         document.querySelector(SelectorError).innerHTML = `
	//         ${name} từ ${minLenth} đến ${maxLenth} kí tự!
	//         `;
	//         return false;
	//     }
	//     document.querySelector(SelectorError).innerHTML = '';
	//     return true;
	// }
	// this.kiemTraDiem = function (value, SelectorError, minLenth, maxLenth, name)
	// {
	//     //   kiểm tra điểm toán lý hóa phải trên 0 và nhỏ hơn 10
	//     if (value > maxLenth || value < minLenth)
	//     {
	//         document.querySelector(SelectorError).innerHTML = `${ name } từ ${ minLenth } đến ${ maxLenth } không hợp lệ`
	//         return false;
	//     }
	//     else
	//         document.querySelector(SelectorError).innerHTML = '';
	//         return true;
	// }
}
