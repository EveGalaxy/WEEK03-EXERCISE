function insertBySplice (input) {
    input.splice(3, 0, 3)
    return input;
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **แทรก (insert)** สมาชิกเข้าไปใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
}

function removeBySplice (input) {
    input.splice(4, 1);
    return input
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **ลบ (remove)** สมาชิกออกจาก Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
}

function replaceBySplice (input) {
    input.splice(4, 1, 4);
    return input
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
}

function findAverage(input) {
    
    var length = input.length
    const filter_num = input.filter((input) => typeof input === "number")
    const total = filter_num.reduce((sum, number) => {return sum+number}, 0)

    return total/length

    // var total = 0
    // var length = input.length
    // for (var i in input) {
    //     if (input[i] > 0 || input[i] < 0) {
    //         total += input[i]
    //     } else {
    //         total += 0
    //     }
    // }
    // return total/length
    // TODO: ให้ใช้ฟังก์ชัน .map() และ/หรือ .filter() และ/หรือ .reduce() ในการหาค่าเฉลี่ยของตัวเลขทั้งหมดใน input  
    // (ให้ถือว่า null, undefined, '' เป็น 0)  
}