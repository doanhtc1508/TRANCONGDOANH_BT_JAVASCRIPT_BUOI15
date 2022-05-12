function tienCap (){
    // DOM tới input và lấy giá trị
    var khachHang = document.getElementById ("loaikhachhang").value ;
    var maKhach = +document.getElementById ("makhachhang").value ;
    var ketNoi = + document.getElementById ("soketnoi").value ;
    var soKenh = +document.getElementById ("sokenhCaoCap").value ;
    var tienCapNhaDan = capNhaDan(soKenh) ;
    var tienCapDoanhNghiep =  capDoanhNghiep(ketNoi,soKenh) ;
    var soTienCap = document.getElementById ("tienCap") ;
//     hiển thị kết quả 
    if (khachHang === "loaikhachhang"){
        alert("vui lòng chọn loại khách hàng")
    }else if (khachHang === "nhaDan"){
        soTienCap.innerHTML = `Mã khách hàng : ${maKhach} ; Tiền cáp $ ${tienCapNhaDan}`
    }else {
        soTienCap.innerHTML = `Mã khách hàng : ${maKhach} ; Tiền cáp $ ${tienCapDoanhNghiep}`  
    }

}

// Hàm chọn loại khách hàng
function khDoanhNghiep() {
    var khachHang = document.getElementById ("loaikhachhang").value ;
    if (khachHang === "loaikhachhang"){
        alert("vui lòng chọn loại khách hàng")
    }else if (khachHang === "doanhNghiep") {
        document.getElementById("soketnoi").style.display = "inline-block" ;
    }else{
        document.getElementById("soketnoi").style.display = "none" ;
    }
}
// Hàm tính tiền cáp nhà dân 
function capNhaDan(soKenh) {
    return 4.5 + 20.5 + soKenh * 7.5;  
}
// Hàm tính tiền cáp doanh nghiệp
function capDoanhNghiep(ketNoi,soKenh){
    var total = 0 ;
    if (ketNoi <= 10){
        total = 15 + 75 + soKenh * 50 ; 
    }else {
        total = 15 + 75 + soKenh * 50 + (ketNoi - 10) * 5;
    }
    return total ; 
}