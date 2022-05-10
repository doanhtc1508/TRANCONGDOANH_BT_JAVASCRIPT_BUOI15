function countElectricity(){
    // B1 : DOM lấy giá trị của input
    var kw = +document.getElementById ("numberKw").value ;
    var name = document.getElementById ("name").value ;
    var total = 0 ;
    //B2 : tính toán giá tiền điện theo từng giá trị
    total = calculate(kw, 500, 650, 850, 1100, 1300);
    // if (kw <= 50) {
    //     total += kw * 500 ;
    // }else if ( kw<= 100 ) {
    //     total += 50 * 500 + (kw - 50) * 650 ;
    // }else if (kw <= 200 ) {
    //     total += 50 * 500 + (50 * 650) + ((kw -100) * 850) ;
    // }else if (kw <= 350 ) {
    //     total += 50 * 500 + (50 * 650) + ( 100 * 850) + ((kw - 200) * 1100);
    // }else {
    //     total +=50 * 500 + (50 * 650) + (100* 850) + (150 * 1100) + (kw - 350) * 1300 ;
        
    // }
    // B3 : xuất kết quả
    document.getElementById ("tongTien").innerHTML = `<p>USER: ${name} </p> <p> Tổng số tiền phải trả ${total.toLocaleString()}
     vnd </p>`

    }
    function calculate(kw,kw_50,kw_650,kw_850,kw_1100,kw_1300){
        var total = 0 ;
        if (kw <= 50) {
            total += kw * kw_50 ;
        }else if (kw <= 100) {
            total += 50 * kw_50 + (kw - 50) * kw_650;
        }else if (kw <= 200){
            total += 50 * kw_50 + (50 * kw_650) + ((kw-100) * kw_850) ;
        }else if (kw <= 350 ){
            total += 50 * kw_50 + (50 *kw_650) + (100 * kw_850) + ((kw - 200)* kw_1100) ;
        }else {
            total += 50 * kw_50 + (50 *kw_650) + (100 * kw_850) + (150 * kw_1100 ) + ((kw - 350) * kw_1300)
        }
        return total ;
    }