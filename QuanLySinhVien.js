function coutn() {
    // B1 : DOM và lấy giá trị của input
    var diemKhuVuc = +document.getElementById ("diemkhuvuc").value ;
    // var isKhuVucB = document.getElementById ("khuvucB").checked ;
    // var isKhuVucC = document.getElementById ("khuvucC").checked ;
    // var isKhuVucX = document.getElementById ("khuvucX").checked ;
    
    var diemDoiTuong = +document.getElementById ("doituong").value ;
    // var isdoiTuong2 = document.getElementById ("doiTuong2").checked ;
    // var isdoiTuong3 = document.getElementById ("doiTuong3").checked ;
    // var isdoiTuongX = document.getElementById ("doiTuongX").checked ;
    
    var mon1 = +document.getElementById ("mon1").value ;
    var mon2 = +document.getElementById ("mon2").value ;
    var mon3 = +document.getElementById ("mon3").value ;
    var diemChuan = +document.getElementById ("diemChuan").value ;
    var tongDiem = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong ; 
    if (mon1 === 0 || mon2 === 0 || mon3 === 0){
        document.getElementById ("ketQua").innerHTML = `bạn đã thi trượt với một môn điểm bằng 0  với tổng điểm ${tongDiem}`
    }else if (diemChuan > tongDiem) {
        document.getElementById ("ketQua").innerHTML = `bạn đã thi rớt với tổng điểm ${tongDiem}`
    }else {
        document.getElementById ("ketQua").innerHTML = `bạn đã thi đậu với tổng điểm ${tongDiem}`

    }
    // var diemKhuVuc =  checkArea() ;
    // var diemDoiTuong = checkSubject () ;
    // var diemBaMon = aulculatePoint () ;
    // var total= 0 ;
    // B2 kiểm tra user đang chọn khu vực nào và chọn đối tượng nào để áp dụng công thức
    // khu vực A
//     if (isKhuVucA) {
//         // cộng điểm khu vực A
//         if (isdoiTuong1) {
//             total += mon1 + mon2 + mon3 + 2 + 2.5 ;
//         }else if (isdoiTuong2) {
//             total += mon1 + mon2 + mon3 + 2 + 1.5 ;
//         }else if (isdoiTuong3) {
//             total += mon1 + mon2 + mon3 + 2 + 1 ;
//         } else {
//             total +=  mon1 + mon2 + mon3 + 2 + 0 ;
//         }
//     }else if (isKhuVucB) {
//         // khu vực B
//         // cộng điểm khu vực B
//         if (isdoiTuong1) {
//             total += mon1 + mon2 + mon3 + 1 + 2.5 ;
//         }else if (isdoiTuong2) {
//             total += mon1 + mon2 + mon3 + 1 + 1.5 ;
//         }else if (isdoiTuong3) {
//             total += mon1 + mon2 + mon3 + 1 + 1 ;
//         }else {
//             total +=  mon1 + mon2 + mon3 + 1 + 0 ;
//         }
//     }else if (isKhuVucC) {
//         // khu vực C 
//         // cộng điểm khu vực C
//         if (isdoiTuong1) {
//             total += mon1 + mon2 + mon3 + 0.5 + 2 ;
//         }else if (isdoiTuong2) {
//             total += mon1 + mon2 + mon3 + 0.5 + 1.5 ;
//         }else if (isdoiTuong3) {
//             total += mon1 + mon2 + mon3 + 0.5 + 1 ;
//         }else {
//             total +=  mon1 + mon2 + mon3 + 0.5 + 0 ;
//         }
//     }else {
//         // khu vực không ưu tiên
//         // không cộng điểm;
//         total += mon1 + mon2 + mon3 ;
//     }
// //  tổng điểm 
//     // total = diemKhuVuc + diemDoiTuong + diemBaMon ; 
//     // alert (total)

//     // alert (diemChuan);

//     // B3 :  kiểm tra tổng điểm của user và so sánh với điểm chuẩn và xuất kết quả
//     if(diemChuan < point && mon1 > 0 && mon2 > 0 && mon3 > 0  ) {
//         document.getElementById ("ketQua").innerHTML = `tổng điểm ${total} Đậu`
//     }else {
//         document.getElementById ("ketQua").innerHTML = `tổng điểm ${total} Rớt`
//     }
// var khuvuc = checkArea(khuvuc)
}

// // Hàm kiểm tra  khu vực 
// function checkArea(khuvuc){
//     var isKhuVucA = document.getElementById ("khuvucA").checked ;
//     var isKhuVucB = document.getElementById ("khuvucB").checked ;
//     var isKhuVucC = document.getElementById ("khuvucC").checked ;
//     var isKhuVucX = document.getElementById ("khuvucX").checked ;
    
//     if(isKhuVucA) {
//     return 2;
//     }
//      if (isKhuVucB){
//     return 1;
//     }
//     if (isKhuVucC) {
//      return 0.5; 
//     }
//     if (isKhuVucX){
//         return 0 ;
//     }
//     // alert (point);
// }
// var diemKhuVuc =  checkArea(khuvuc) ;
// console.log (diemKhuVuc) ;


// hàm kiểm tra đối tượng
// function checkSubject(){
//     var isdoiTuong1 = document.getElementById ("doiTuong1").checked ;
//     var isdoiTuong2 = document.getElementById ("doiTuong2").checked ;
//     var isdoiTuong3 = document.getElementById ("doiTuong3").checked ;
//     var isdoiTuongX = document.getElementById ("doiTuongX").checked ;
//     var point = 0 ;
//     if (isdoiTuong1){
//         point += 2.5 ;
//     }else if (isdoiTuong2) {
//         point += 1.5 ;
//     }else if (isdoiTuong3) {
//         point += 1 ;
//     }else {
//         point +=0 ;
//     }
//     alert (point)
// }
// hàm tính tổng điểm 3 môn
// function aulculatePoint() {
//     var mon1 = +document.getElementById ("mon1").value ;
//     var mon2 = +document.getElementById ("mon2").value ;
//     var mon3 = +document.getElementById ("mon3").value ;
//     var point = mon1 + mon2 + mon3;
    
// }

