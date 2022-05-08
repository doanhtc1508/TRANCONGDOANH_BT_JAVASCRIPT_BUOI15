function coutn() {
    var diemKhuVuc = document.getElementById ("khuvuc").value ;
    var diemDoiTuong = document.getElementById ("doituong").value ;
    var mon1 = +document.getElementById ("mon1").value ;
    var mon2 = +document.getElementById ("mon2").value ;
    var mon3 = +document.getElementById ("mon3").value ;
    var diemChuan = +document.getElementById ("diemChuan").value ;
    diemKhuVuc = checkArea(diemKhuVuc) ;
    diemDoiTuong = checkSubject(diemDoiTuong) ;
    var tongDiem3Mon =  aulculatePoint(mon1,mon2,mon3) ;
    var diemTongKet= diemKhuVuc + diemDoiTuong + tongDiem3Mon ;
    hienThiKetQua (mon1,mon2,mon3,diemTongKet,diemChuan) ;
}
// Hàm kiểm tra  khu vực 
function checkArea(diemKhuVuc){
   switch (diemKhuVuc) {
        case "A" :
         return 2;
        case "B" :
         return 1 ;
        case "C" :
         return 0.5
        default :
        return 0;   
   }
}
// hàm kiểm tra đối tượng
function checkSubject(diemDoiTuong){
   switch (diemDoiTuong) {
        case "doituong1" :
        return 2.5 ;
        case "doituong2" :
        return 1.5 ;
        case "doituong3" :
        return 1 ;
        default :
        return 0 ;
   }
}
// hàm tính tổng điểm 3 môn
function aulculatePoint(mon1,mon2,mon3) {
    return mon1 + mon2 + mon3 ;
}
// hàm hiển thị kết quả 
function hienThiKetQua (mon1,mon2,mon3,diemTongKet,diemChuan){
    if(!mon1 || !mon2 || !mon3){
        document.getElementById ("ketQua").style.color = "red"
        document.getElementById ("ketQua").innerHTML = "Bạn đã thi trượt vì có 1 môn 0 điểm"
    }else if (diemTongKet >= diemChuan ) {
        document.getElementById ("ketQua").style.color = "blue"
        document.getElementById ("ketQua").innerHTML = `Bạn đã thi đậu với tổng điểm ${diemTongKet}`
    }else {
        document.getElementById ("ketQua").style.color = "red"
        document.getElementById ("ketQua").innerHTML = `Bạn đã thi rớt với tổng điểm ${diemTongKet}`
    }
}
