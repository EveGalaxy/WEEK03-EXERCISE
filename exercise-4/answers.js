function mapToSquare (input) {
    return input.map((input) => { 
        if (input%2 == 0) {
            return input**2
        } else {
            return input
        }
    })
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
}

function convertTemperature (input) {

    let total = [];
    for (var i in input) {
        let value = {date: input[i].date, temperature: input[i].temperature};
        value.temperature = fah_to_celsius(value.temperature)
        total.push(value)
    }
    return total
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
}

function filterEvenNumber (input) {
    return input.filter((input) => input%2 == 0)
    // TODO: filter input เอาเลขคู่เท่านั้น
}

function filterAgeRange (input) {
    const people = input.people
    return people.filter((people) => people.age > input.min && people.age < input.max)
    // TODO: กรอง input.people ตามช่วงอายุ
}

function removeByFilter (input) {
    const people = input.people
    return people.filter((people) => !(people.id == input.removeId))
    // TODO: ลบ Object ใน Array ด้วยการ filter
}