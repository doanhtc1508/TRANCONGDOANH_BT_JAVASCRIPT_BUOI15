function tinhThue(){
   // DOM tới input và lấy giá trị
    var hoTen = document.getElementById ("user").value ;
    var thuNhapNam = +document.getElementById ("tongThuNhap").value ;
    var tongNguoi = +document.getElementById ("soNguoi").value ;
    var thuNhapDongThue = thuNhapChiuThue(thuNhapNam, 4e6 ,tongNguoi , 16e5)  ;
    var thuePhaiDong = tinhThueSuat(thuNhapDongThue ,hoTen,thuNhapNam ,tongNguoi );
    // hiển thị kết quả
    if (hoTen === "" || thuNhapNam === 0 || tongNguoi === 0  ){
        alert ("Số tiền thu nhập không hợp lệ")
 }else{
    document.getElementById("tienThue").innerHTML = `<p> Name : ${hoTen} </p> <p>Thuế phải đóng : ${thuePhaiDong.toLocaleString()} VND`
}
// alert(thuePhaiDong);
}
//Hàm tính thu nhập chịu thuế
function thuNhapChiuThue (thuNhapNam,luongCoBan,tongNguoi,thueThang){
    return thuNhapNam - luongCoBan - tongNguoi * thueThang ; 
}
//Hàm tính toán thu nhập chịu thuế 
function tinhThueSuat(thuNhapDongThue ){
 var tienThue = 0 ;
 
  if (thuNhapDongThue <= 60e6) {
    tienThue = thuNhapDongThue * 0.05;
 }else if (thuNhapDongThue <= 120e6) {
    tienThue = thuNhapDongThue  * 0.1 ;
 }else if (thuNhapDongThue <= 210e6) {
    tienThue = thuNhapDongThue * 0.15 ;
 }else if (thuNhapDongThue <= 384e6) {
    tienThue = thuNhapDongThue * 0.2 ;
 }else if (thuNhapDongThue <= 624e6) {
    tienThue = thuNhapDongThue * 0.25 ; 
 }else if (thuNhapDongThue <= 960e6) {
    tienThue = thuNhapDongThue * 0.3 ;
 }else {
    tienThue = thuNhapDongThue * 0.35 ;
 }
 return tienThue ;
}




