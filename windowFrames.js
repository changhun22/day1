// 창틀 무게 구하기(사장님이 m단위로 끊어 파심 ..)

// 철근 1ft당  3.5달러
// 창문의 가로 세로 길이 300 * 200
const perFeet = 3.5

const width = 300
const height = 200

// 창틀은 가로가 2개 세로가 2개
const totalLength = (width * 2) + (height * 2)

// 길이(cm) => ft
const totalFeet = Math.ceil(totalLength / 30.48) // 1피트는 30.48cm이다/Math.ceil함수는 올림역활/round = 반올림 floor = 내림

//console.log(totalFeet) 총 창틀 무게


// 가격 계산
const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)
