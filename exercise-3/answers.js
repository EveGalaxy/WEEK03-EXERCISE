function getDayName (input) {
    
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    return daysInWeek[input]
    // TODO: แปลงเลข 0-6 เป็น วันอาทิตย์ - วันเสาร์
}

function formatDate (input) {
    const monthInYear = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    // TODO: แปลง input เป็น String ในรูปแบบ "วันศุกร์ที่ 15 มกราคม พ.ศ. 2564"
    return daysInWeek[input.day] + "ที่ " + input.date + " " + monthInYear[input.month] + " พ.ศ. " + (input.year + 543)
}

function findTotal (input) {
    var total = 0
    for (var i in input) {
        if (input[i] > 0) {
            total += input[i]
        } 
    }
    return total
    // TODO: ให้หาผลบวกของเลขทั้งหมดใน input
}