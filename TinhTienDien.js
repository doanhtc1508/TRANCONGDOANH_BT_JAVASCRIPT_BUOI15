function countElectricity(){
    // B1 : DOM lấy giá trị của input
    var kw = +document.getElementById ("numberKw").value ;
    var name = document.getElementById ("name").value ;
    
    //B2 : tính toán giá tiền điện theo từng giá trị
    var total = 0 ;
    if (kw <= 50) {
        total += kw * 500 ;
    }else if ( kw<= 100 ) {
        total += 50 * 500 + (kw - 50) * 650 ;
    }else if (kw <= 200 ) {
        total += 50 * 500 + (50 * 650) + ((kw -100) * 850) ;
    }else if (kw <= 350 ) {
        total += 50 * 500 + (50 * 650) + ( 100 * 850) + ((kw - 200) * 1100);
    }else {
        total +=50 * 500 + (50 * 650) + (100* 850) + (150 * 1100) + (kw - 350) * 1300 ;
        
    }
    // B3 : xuất kết quả
    document.getElementById ("tongTien").innerHTML = `Người dùng : ${name} : ${total}
     vnd`

// function calculate(kw,kw_50,kw_50_100,kw_100_200,kw_200_350,kw_350){
//     var total = 0 ;
//     if (kw <= 50) {
//         total += kw * kw_50 ;
//     }else if (kw <= 100) {
//         total += 50 * kw_50 + (kw - 50) * kw_50_100 ;
//     }else if (kw <= 200){
//         total += 50 * kw_50 + (100 * kw_50_100) + ((kw-100) * kw_100_200) ;
//     }else if (kw <= 350 ){
//         total += 50 * kw_50 + (100 *kw_50_100) + (50 * kw_100_200) + ((kw - 200)* kw_200_350) ;
//     }else {
//         total += 50 * kw_50 + (100 *kw_50_100) + (50 * kw_100_200) + (150 * kw_200_350 ) + ((kw - 350) * kw_350)
//     }

}