// 시계가 4시 47분을 가리킬때 내각을 구하여라

const hour = 4
const min = 47

//시침의 각도
let hourD = (360 / 12) * hour

//분침의 각도
let minD = (360/ 60) * min

console.log(hourD, minD)

//분에 따른 시침의 추가적인 이동
const extra = (30 / 60) * min

//hourD = hourD + extra
hourD += extra

console.log(hourD, minD)

const gap = hourD - minD

console.log(gap)