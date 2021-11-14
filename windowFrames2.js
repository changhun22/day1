// 창틀 무게 구하는 계산기 만들기(사장님이 m단위로 끊어 파심 ..)

const readLine = require('readline-sync')

console.log("1피트당 창틀의 가격은 얼마인가요?")
const perFeet = parseFloat(readLine.prompt()) //창틀 1피트당 달러 입력


console.log("가로길이는 얼마인가요? cm")
const width = parseInt(readLine.prompt()) //가로 길이 입력

console.log("세로길이는 얼마인가요? cm")
const height = parseInt(readLine.prompt()) //세로 길이 입력

// 창틀은 가로가 2개 세로가 2개
const totalLength = (width * 2) + (height * 2)

// 길이(cm) => ft
const totalFeet = Math.ceil(totalLength / 30.48) // 1피트는 30.48cm이다/Math.ceil함수는 올림역활/round = 반올림 floor = 내림

//console.log(totalFeet) 총 창틀 무게


// 가격 계산
const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)
