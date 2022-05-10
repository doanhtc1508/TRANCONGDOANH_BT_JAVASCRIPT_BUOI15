function tienCap (){
    var khachHang = document.getElementById ("loaikhachhang").value ;
    var maKhach = +document.getElementById ("makhachhang").value ;
    var ketNoi = + document.getElementById ("soketnoi").value ;
    var soKenh = +document.getElementById ("sokenhCaoCap").value ;

    if (khachHang === "doanhNghiep") {
        document.getElementById("soketnoi").style.display = "block" ;
    }else {
        document.getElementById("soketnoi").style.display = "none" ;
    }
}