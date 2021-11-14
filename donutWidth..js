//도넛 넓이 구하기

const readLine = require('readline-sync')

//주어진 데이터
const r1 = 10 //도넛 작은 구멍 반지름
const r2 = 20 //도넛 전체의 반지름

//원의 넓이

// Math.pow(base, exponent) base 밑값 exponent 밑을 제곱하기위해 사용한수
// Math.PI 파이 (3.147592....)
const minDonut = Math.pow(r1,2) * Math.PI
const largeDonut = Math.pow(r2,2) * Math.PI

let gap = minDonut - largeDonut

// if 삼항연산자

// if(gap < 0){                //if를 사용하였을때
//     gap = gap * -1
// }

gap = gap < 0 ? gap * -1 : gap // 만약에 gap이 0보다 작다면 *-1을 해주고 그게 아니라면 gap 그대로를 반환한다

gap = gap.toFixed(2) //toFixed() 소수의 자리수의 길이를 ()번째 만큼 제한한다

// console.log("이 도형의 넓이는 "  + gap + "입니다")


//back tick 사용하면 좀더 간결하게 나타낼수 있다.
console.log(`이 도형의 넓이는 ${gap}cm입니다`)

